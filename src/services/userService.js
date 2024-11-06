import db from "../models/index";
import bcrypt from "bcryptjs";
var salt = bcrypt.genSaltSync(10);


let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try{
      let userData = {}
      let isExist = await checkUserEmail(email)
      if(isExist){
        //user already exits  
        let user = await db.User.findOne({
          where: {email : email},
          attributes: ['email', 'roleId', 'password'],
        })
        if(user){
          // compare password
          let check = await bcrypt.compareSync(password, user.password); 
          if(check){
            userData.errCode = 0
            userData.errMessage = `OK`
            delete user.password
            userData.user = user
          }
          else{
            userData.errCode = 3
            userData.errMessage = `wrong password`
          }
        }else{
          userData.errCode = 2
          userData.errMessage = `User's not found `
        }
        resolve(userData)
      }else{
        //return error
        userData.errCode = 1
        userData.errMessage = `Your's Email isn't exist in your system. Please try other email`
      }
      resolve(userData)// gán giá trị 
    }catch(e){
      reject(e)
    }
  }); 
};

let getAllUsers = (userId) =>{
  return new Promise(async (resolve, reject) =>{
    try{
      let users = '';
        if(userId === 'ALL'){
          users = await db.User.findAll({
            attributes: {
              exclude: ["password"],
            }
          });
        }
        if(userId && userId !== 'ALL'){
          users = await db.User.findOne({
            where: {id : userId},
            attributes: {
              exclude: ["password"],
            }
          })
        }
        resolve(users);
    }catch(e){
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try{
      let user = await db.User.findOne({
        where: {email: userEmail}
      })
      if(user){
        resolve(true)
      }else{
        resolve(false)
      }
    }catch (e){
      reject(e);
    }
  });
};

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      //  Hàm bcrypt.hashSync có thể là một hoạt động bất đồng bộ, nghĩa là nó có thể mất một thời gian để hoàn thành. Sử dụng Promise và async/await cho phép code tiếp tục thực hiện các tác vụ khác trong khi chờ đợi quá trình hash hoàn thành.
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let createNewUser  = (data) =>{
  return new Promise(async (resolve, reject) => {
    try{
      //check email first
      let check = await checkUserEmail(data.email);
      if (check == true)
      {
        resolve({
          errCode: 1,
          message: 'Your email is already in used, Plz try another email'
        });
      }else{
        let hashPasswordFromBcrypt = await hashUserPassword(data.password);
        await db.User.create({
          email: data.email,
          password: hashPasswordFromBcrypt,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          gender: data.gender == "1" ? true : false,
          roleId: data.roleId,
          phonenumber: data.phonenumber,
        });
      }
      resolve({
        errCode: 0,
        message: 'OK'
      });
    }catch(e){
      reject(e);
    }
  });
};

let deleteUser = (userId) =>{
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

let updateUserData = (data) =>{
  return new Promise(async (resolve, reject) =>{
    try{
      if (!data.id) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter",
        });
      }
      let user = await db.User.findOne({
        where : {id : data.id},
        raw: false
      });
      if(user){
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        await user.save();
        resolve({
          errCode: 0,
          message: "Update the user succeed!"
        });
      }
      else{
        resolve({
          errCode: 2,
          errMessage: `User's not found!`,
        });
      }
    }catch(e){
      reject(e);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
  checkUserEmail: checkUserEmail,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  hashUserPassword : hashUserPassword,
  deleteUser: deleteUser,
  updateUserData: updateUserData
};