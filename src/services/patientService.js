import db from "../models/index";
require("dotenv").config();
import emailService from "./emailService";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import { InvalidConnectionError, Model, where } from "sequelize";
const salt = bcrypt.genSaltSync(10);

let buildUrlEmail = (doctorId, token) => {
  let result = `${process.env.URL_REACT}/verify-booking?token=${token}&doctorId=${doctorId}`;

  return result;
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let postBookAppointment = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.email ||
        !data.doctorId ||
        !data.timeType || 
        !data.date ||
        !data.fullName ||
        !data.selectedGender ||
        !data.address ||
        !data.phonenumber ||
        !data.birthday ||
        !data.reason
      ) {
        resolve({
          errCode: 1,
          errMessage: "Thông tin nhập còn thiếu",
        });
      } else {
        let token = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

        let user = await db.User.findOne({
          where: { email: data.email },
        });

        let check = await db.Booking.findOne({
          where:{
            patientId: user.id,
            doctorId: data.doctorId,
            timeType: data.timeType,
            date: data.date,
            statusId: 'S2'
          },
        });

        let check1 = await db.Booking.findOne({
          where:{
            patientId: user.id,
            doctorId: data.doctorId,
            timeType: data.timeType,
            date: data.date,
            statusId: 'S3'
          },
        });

        if(check || check1){
          if(check){
            resolve({
              errCode: 2,
              errMessage: "Bạn đang có lịch hẹn đã được xác nhận vào khung giờ này",
            });
          }
          if(check1){
            resolve({
              errCode: 2,
              errMessage: "Bạn đã có lịch hẹn hoàn thành khám vào khung giờ này",
            });
          }
        }
        else{
          await emailService.sendSimpleEmail({
            receiverEmail: data.email,
            patientName: data.fullName,
            time: data.timeString,
            doctorName: data.doctorName,
            language: data.language,
            reason: data.reason,
            redirectLink: buildUrlEmail(data.doctorId, token),
        });

        if (user) {
          await db.Booking.create({
            statusId: "S1",
            doctorId: data.doctorId,
            patientId: user.id,
            date: data.date,
            timeType: data.timeType, 
            token: token,
            reason: data.reason
          });
        }

        resolve({
          errCode: 0,
          errMessage: "Lưu thông tin lịch hẹn thành công",
        });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};

let postVerifyBookAppointment =  (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.token || !data.doctorId) {
        resolve({
          errCode: 1,
          errMessage: "Thiếu dữ liệu đầu vào",
        });
      } else {
        let appointment = await db.Booking.findOne({
          where: { doctorId: data.doctorId, token: data.token, statusId: "S1" },
          raw: false,
        });

        if (appointment) {
          appointment.statusId = "S2";
          appointment.token = null;
          await appointment.save();
          resolve({
            errCode: 0,
            errMessage: "Cập nhật lịch hẹn thành công",
          });
        } else {
          resolve({
            errCode: 2,
            errMessage: "Lịch hẹn đã được xác nhận hoặc không tồn tại",
          });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getListAppointmentForPatient = (patientId, date) =>{
  return new Promise(async (resolve, reject) =>{
    try{
      if(!patientId || !date){
        resolve({
          errCode: 1,
          errMessage: "Thiếu dữ liệu đầu vào",
        });
      }
      else{
        let data = await db.Booking.findAll({
          where: {patientId: patientId, date: date },
          attributes: {
            exclude: ["imageRemedy", "token", "createdAt", "updatedAt"],
          },
          include: [
            {
              model: db.User,
              as: "doctorDataAppointment",
              attributes: [ 
                "id",
                "email",
                "firstName",
                "lastName"
              ],
            },
            {
              model: db.Allcode,
              as: "timeTypeDataPatient",
              attributes: ["valueEn", "valueVi"],
            },
            {
              model: db.Doctor_Infor,
              as: "doctorDataAppointmentDetail",
              attributes: ["addressClinic", "nameClinic"],
              include: [
                {
                  model: db.Allcode,
                  as: "priceTypeData",
                  attributes: ["valueEn", "valueVi"]
                },
                {
                  model: db.Allcode,
                  as: "paymentTypeData",
                  attributes: ["valueEn", "valueVi"]
                },
                {
                  model: db.Specialty,
                  as: "specialtyData",
                  attributes: ["name"]
                }
              ]
            }
          ],
          raw: true,
          nest: true,
        });
        if (!data) {
          data = {};
        }
        resolve({
          errCode: 0,
          data: data
        });
      }
    }catch(e){
      reject(e);
    }
  })
}


module.exports = {
  postBookAppointment: postBookAppointment,
  postVerifyBookAppointment: postVerifyBookAppointment,
  getListAppointmentForPatient: getListAppointmentForPatient
};
