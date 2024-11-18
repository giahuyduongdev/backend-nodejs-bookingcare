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
          userData.errMessage = `User's not authenticated, plz authicate your account `;
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
              userData.errMessage = "wrong password";
            }
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User's not found`;
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your's Email isn't exist in your system. Plz try other email`;
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
          errMessage: "Your email is already in used, plz try another email!!",
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
          roleId: 'R3',
          authicated: 'no'
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

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      //check email is exist
      let check = await checkUserEmail(data.email);
      if (check === true) {
        resolve({
          errCode: 1,
          errMessage: "Your email is already in used, plz try another email!!",
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
          errMessage: `The user isn't exist`,
        });
      }
      if (user) {
        await db.User.destroy({
          where: { id: userId },
        });
      }
      resolve({
        errCode: 0,
        errMessage: `The user is deleted`,
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
          errMessage: "Missing input parameter",
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
          message: "Update the token user succeed!",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: `User's not found!`,
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
          errMessage: "Missing required parameter",
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
          message: "Update the user succeed!",
        });
      } else {
        resolve({
          errCode: 1,
          errMessage: `User's not found!`,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllCodeService = (typeInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!typeInput) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameters",
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

let buildUrlEmailConfirmAccount = (tokenUser, email, authicated) => {
  let result = `${process.env.URL_REACT}/confirm-new-account?tokenUser=${tokenUser}&email=${email}`;
  return result;
};


let postCofirmAccountService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.email) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter",
        });
      } else {
        let tokenUser = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' -random
        await emailService.sendConfirmAccountEmail({
          receiverEmail: data.email,
          redirectLink: buildUrlEmailConfirmAccount(tokenUser, data.email),
        });

        //find user have in table Users-if have update tokenUser
        let user = await db.User.findOne({
          where: { email: data.email },
          raw: false,
        });
        if (user) {
          resolve({
            errCode: 0,
            message: "PLz check your email",
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: `User's not found!`,
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
          errMessage: "Missing required parameter",
        });
      } else {
        let user = await db.User.findOne({
          where: { email: data.email },
          raw: false,
        });
        if (user) {
          user.authicated = 'yes';
          await user.save();

          resolve({
            errCode: 0,
            message: "Authicate your account succeed!",
          });
        } else {
          resolve({
            errCode: 2,
            errMessage: `User's not found!`,
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
          errMessage: "Missing required parameter",
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
            message: "Update the user and send Forgot Password email succeed!",
          });
        } else {
          resolve({
            errCode: 1,
            errMessage: `User's not found!`,
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
          errMessage: "Missing required parameter",
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
            message: "Change user password succeed!",
          });
        } else {
          resolve({
            errCode: 2,
            errMessage: `User's not found!`,
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
  postConFirmNewAccountEmail: postConFirmNewAccountEmail
};