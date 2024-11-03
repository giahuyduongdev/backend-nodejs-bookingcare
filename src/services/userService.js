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
          raw: true
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


let compareUserPassword = (userPassword) => {
  return new Promise(async (resolve, reject) =>{
    try{

    }catch(e){
      reject(e)
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

module.exports = {
  handleUserLogin: handleUserLogin,
  checkUserEmail: checkUserEmail,
};