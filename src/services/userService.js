import db from "../models/index";
import bcrypt from "bcryptjs";
require("dotenv").config();
import emailService from "./emailService";
import { v4 as uuidv4 } from "uuid";
const salt = bcrypt.genSaltSync(10);


let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          where: { email: email },
          attributes: [
            "id",
            "email",
            "roleId",
            "password",
            "firstName",
            "lastName",
            "image",
            "tokenUser",
            "authicated"
          ],
          include: [
            {
              model: db.Doctor_Infor,
              attributes: ["priceId", "specialtyId"],
              include: [
                {
                  model: db.Allcode,
                  as: "priceTypeData",
                  attributes: ["valueEn", "valueVi"],
                },
              ],
            },
          ],
          raw: true,
          nest: true,
        });
        if (user) {
          if(user.authicated === 'no'){
          userData.errCode = 4;
          userData.errMessage = `Tài khoản chưa được xác thực, vui lòng xác thực tài khoản`;
          }
          else{
              //compare password
            let check = await bcrypt.compareSync(password, user.password);
            if (check) {
              let tokenUser = uuidv4();
              await updateTokenUserData(user.id, tokenUser);
              userData.errCode = 0;
              userData.errMessage = "OK";
              delete user.password;
              delete user.tokenUser;
              userData.user = user;
            } else {
              userData.errCode = 3;
              userData.errMessage = "Sai mật khẩu";
            }
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `Không tìm thấy người dùng`;
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Email không tồn tại trong hệ thóng, vui lòng thử lại`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};


let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = "";
      if (userId === "ALL") {
        users = await db.User.findAll({
          attributes: {
            exclude: ["password", "tokenUser"],
          },
        });
      }
      if (userId && userId !== "ALL") {
        users = await db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password", "tokenUser"],
          },
        });
      }
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

let registerNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      //check email is exist
      let check = await checkUserEmail(data.email);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: "Email đã được sử dụng, hãy thử với email khác",
        });
      } else {
        let hashPasswordFromBcrypt = await hashUserPassword(data.password);
        await db.User.create({
          email: data.email,
          password: hashPasswordFromBcrypt,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          phonenumber: data.phonenumber,
          birthday: data.birthday,
          gender: data.gender,
          roleId: 'R3',
          authicated: 'no'
        });
        resolve({
          errCode: 0,
          message: "ok",
          data: data
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      //check email is exist
      let check = await checkUserEmail(data.email);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: "Email đã được sử dụng, hãy thử với email khác",
        });
      } else {
        let hashPasswordFromBcrypt = await hashUserPassword(data.password);
        await db.User.create({
          email: data.email,
          password: hashPasswordFromBcrypt,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          phonenumber: data.phonenumber,
          gender: data.gender,
          roleId: data.roleId,
          positionId: data.positionId,
          image: data.avatar,
          authicated: 'yes'
        });
        resolve({
          errCode: 0,
          message: "ok",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
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

let deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
      });
      if (!user) {
        resolve({
          errCode: 2,
          errMessage: `Người dùng không tồn tại`,
        });
      }
      if (user) {
        await db.User.destroy({
          where: { id: userId },
        });
      }
      resolve({
        errCode: 0,
        errMessage: `Người dùng đã bị xóa`,
      });
    } catch (e) {
      reject(e);
    }
  });
};


let updateTokenUserData = (userId, tokenUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!userId) {
        resolve({
          errCode: 2,
          errMessage: "Thiếu dữ liệu đầu vào",
        });
      }
      let user = await db.User.findOne({
        where: { id: userId },
        raw: false, 
      });
      if (user) {
        user.tokenUser = tokenUser;
        await user.save();

        resolve({
          errCode: 0,
          message: "Cập nhật token thành công",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: `Người dùng không tồn tại`,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};


let updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id) {
        resolve({
          errCode: 2,
          errMessage: "Thiếu dữ liệu đầu vào",
        });
      }
      let user = await db.User.findOne({
        where: { id: data.id },
        raw: false, 
      });
      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        user.roleId = data.roleId;
        user.positionId = data.positionId;
        user.gender = data.gender;
        user.phonenumber = data.phonenumber;
        if (data.avatar !== "") {
          user.image = data.avatar;
        }
        user.image = data.avatar;
        await user.save();

        resolve({
          errCode: 0,
          message: "Cập nhật người dùng thành công",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: `Người dùng không tồn tại`,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let changeAccountPassword = (data) =>{
  return new Promise (async(resolve,reject) =>{
    try{
      if(!data.id || !data.oldPassword || !data.newPassword){
        resolve({
          errCode: 2,
          errMessage: "Thiếu dữ liệu đầu vào",
        });
      }
      else{
        let user = await db.User.findOne({
          where: { id: data.id },
          raw: false, 
        });
        if(user){
          let check = await bcrypt.compareSync(data.oldPassword, user.password);
          if(check){
            if(data.oldPassword === data.newPassword){
              resolve({
                errCode: 1,
                message: "Mật khẩu mới không được giống mật khẩu cũ",
              });
            }
            let hashPasswordFromBcrypt = await hashUserPassword(data.newPassword);
            user.password = hashPasswordFromBcrypt;
            await user.save();
            resolve({
              errCode: 0,
              message: "Cập nhật mật khẩu mới thành công",
            });
          }
          else{
            resolve({
              errCode: 1,
              message: "Mật khẩu hiện tại không đúng",
            });
          }
        }
        else{
          resolve({
            errCode: 1,
            errMessage: `Người dùng không tồn tại`,
          });
        }
      }
    }catch(e){
      reject(e);
    }
  });
}

let getUserInfoProfile = (userEmail) =>{
  return new Promise (async(resolve,reject) =>{
    try{
        let users = await db.User.findOne({
          where: { email: userEmail},
          attributes: {
            exclude: ["password", "tokenUser"],
          },
          raw: true,
          nest: true,
        });
        resolve(users);
    }catch(e){
      reject(e);
    }
  });

}

let getAllCodeService = (typeInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!typeInput) {
        resolve({
          errCode: 1,
          errMessage: "Thiếu dữ liệu đầu vào",
        });
      } else {
        let res = {};
        let allcode = await db.Allcode.findAll({
          where: { type: typeInput },
        });
        res.errCode = 0;
        res.data = allcode;
        resolve(res);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let buildUrlEmailForgotPassword = (tokenUser, email) => {
  let result = `${process.env.URL_REACT}/retrieve-password?tokenUser=${tokenUser}&email=${email}`;
  return result;
};

let buildUrlEmailConfirmAccount = (tokenUser, email) => {
  let result = `${process.env.URL_REACT}/confirm-new-account?tokenUser=${tokenUser}&email=${email}`;
  return result;
};


let postCofirmAccountService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.email) {
        resolve({
          errCode: 1,
          errMessage: "Thiếu dữ liệu đầu vào",
        });
      } else {
        let tokenUser = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' -random
        await emailService.sendConfirmAccountEmail({
          receiverEmail: data.email,
          language: data.language,
          redirectLink: buildUrlEmailConfirmAccount(tokenUser, data.email),
        });

        //find user have in table Users-if have update tokenUser
        let user = await db.User.findOne({
          where: { email: data.email },
          raw: false,
        });
        if (user) {
          user.tokenUser = tokenUser;
          user.save();
          resolve({
            errCode: 0,
            message: "Hãy kiểm tra email của bạn",
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: `Người dùng không tồn tại`,
          });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};

let postConFirmNewAccountEmail = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.tokenUser || !data.email) {
        resolve({
          errCode: 1,
          errMessage: "Thiếu dữ liệu đầu vào",
        });
      } else {
        let user = await db.User.findOne({
          where: { email: data.email, tokenUser: data.tokenUser },
          raw: false,
        });
        if (user) {
          user.authicated = 'yes';
          user.tokenUser = null;
          await user.save();

          resolve({
            errCode: 0,
            message: "Xác thực tài khoản thành công",
          });
        } else {
          resolve({
            errCode: 2,
            errMessage: `Tài khoản đã được xác thực hoặc không tồn tại`,
          });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};


let postForgotPasswordService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.email) {
        resolve({
          errCode: 1,
          errMessage: "Thiếu dữ liệu đầu vào",
        });
      } else {
        let tokenUser = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' -random
        await emailService.sendForgotPasswordEmail({
          receiverEmail: data.email,
          redirectLink: buildUrlEmailForgotPassword(tokenUser, data.email),
        });

        //find user have in table Users-if have update tokenUser
        let user = await db.User.findOne({
          where: { email: data.email },
          raw: false,
        });
        if (user) {
          user.tokenUser = tokenUser;
          await user.save();

          resolve({
            errCode: 0,
            message: "Gửi email lấy lại mật khẩu thành công",
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: `Người dùng không tồn tại`,
          });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};

let postVerifyRetrievePasswordService = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.tokenUser || !data.email || !data.newPassword) {
        resolve({
          errCode: 1,
          errMessage: "Thiếu dữ liệu đầu vào",
        });
      } else {
        let hashPasswordFromBcrypt = await hashUserPassword(data.newPassword);

        //find user have in table Users-if have update tokenUser
        let user = await db.User.findOne({
          where: { email: data.email, tokenUser: data.tokenUser },
          raw: false,
        });
        if (user) {
          user.password = hashPasswordFromBcrypt;
          user.tokenUser = null;
          await user.save();

          resolve({
            errCode: 0,
            message: "Đổi mật khẩu thành công",
          });
        } else {
          resolve({
            errCode: 2,
            errMessage: `Người dùng không tồn tại`,
          });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};


module.exports = {
  handleUserLogin: handleUserLogin,
  checkUserEmail: checkUserEmail,
  getAllUsers: getAllUsers,
  registerNewUser: registerNewUser,
  createNewUser: createNewUser,
  hashUserPassword : hashUserPassword,
  deleteUser: deleteUser,
  updateTokenUserData: updateTokenUserData,
  updateUserData: updateUserData,
  getAllCodeService: getAllCodeService,
  postForgotPasswordService: postForgotPasswordService,
  postVerifyRetrievePasswordService: postVerifyRetrievePasswordService,
  postCofirmAccountService: postCofirmAccountService,
  postConFirmNewAccountEmail: postConFirmNewAccountEmail,
  getUserInfoProfile: getUserInfoProfile,
  changeAccountPassword: changeAccountPassword
};