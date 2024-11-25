import db from "../models/index";
require("dotenv").config();
import emailService from "./emailService";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
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
          errMessage: "Missing required parameter",
        });
      } else {
        let token = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        let hashPasswordFromBcrypt = await hashUserPassword('123');
        let check = await db.User.findOne({
          where: { email: data.email },
          raw: false, 
        });
        if(check){
          await emailService.sendSimpleEmail({
            receiverEmail: data.email,
            patientName: data.fullName,
            time: data.timeString,
            doctorName: data.doctorName,
            language: data.language,
            reason: data.reason,
            redirectLink: buildUrlEmail(data.doctorId, token),
          });
        }
        else{
          await emailService.sendSimpleEmailNew({
            receiverEmail: data.email,
            patientName: data.fullName,
            time: data.timeString,
            doctorName: data.doctorName,
            language: data.language,
            reason: data.reason,
            redirectLink: buildUrlEmail(data.doctorId, token),
          });
        }


        //upsert patient
        let user = await db.User.findOrCreate({
          where: { email: data.email },
          defaults: {
            email: data.email,
            password: hashPasswordFromBcrypt,
            roleId: "R3",
            gender: data.selectedGender,
            address: data.address,
            firstName: data.fullName,
            phonenumber: data.phonenumber,
            birthday: data.birthday,
            authicated: 'yes'
          },
        });


        //create a booking record
        if (user && user[0]) {
          await db.Booking.create({
            statusId: "S1",
            doctorId: data.doctorId,
            patientId: user[0].id,
            date: data.date,
            timeType: data.timeType, 
            token: token,
            reason: data.reason
          });
        }

        // let user1 = await db.User.findOne({
        //   where: { email: data.email },
        //   raw: false, 
        // });
        // if(user1){
        //   user1.birthday = data.birthday;
        //   await user1.save()
        // }
        // if (user && user[0]) {
        //   await db.Booking.findOrCreate({
        //     where: { patientId: user[0].id },
        //     defaults: {
        //       statusId: "S1",
        //       doctorId: data.doctorId,
        //       patientId: user[0].id,
        //       date: data.date,
        //       timeType: data.timeType,
        //       token: token,
        //     },
        //   });
        // }
        resolve({
          errCode: 0,
          errMessage: "Save infor patient succeed!",
        });
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
          errMessage: "Missing required parameter",
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
            errMessage: "Update the appointment succeed!",
          });
        } else {
          resolve({
            errCode: 2,
            errMessage: "Appointment has been activated or does not exist!",
          });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  postBookAppointment: postBookAppointment,
  postVerifyBookAppointment: postVerifyBookAppointment,
};
