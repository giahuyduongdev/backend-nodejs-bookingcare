import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
    return res.render("homepage.ejs");
};

let createUser = (req, res) => {
  return res.render("createUser.ejs");
};

let displayUser = async (req, res) => {
  let data = await CRUDService.getAllUser();
  return res.render("displayUser.ejs", {
    data: data,
  });
};

let postUser = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(req.body);
  console.log(message);
  return res.send("Create a new user successfully!");
};

let editUser = async (req, res) =>{
  let userId = req.query.id;
  if(userId){
    let userData = await CRUDService.getUserInfoById(userId);
    console.log("---------------------------------");
    console.log(userData);
    console.log("---------------------------------");
    return res.render("editUser.ejs", {
      data : userData,
    });
  }
  else{
    return res.send("User not found");
  }
};

let postEditUser = async (req, res) =>{
  let userData = req.body;
  let allUsers = await CRUDService.updateUserData(userData);
  return res.render("displayUser", {
    data : allUsers,
  })
};

let deleteUser = async (req, res) =>{
  let id = req.query.id;
  let data = await db.User.findAll();
  if(id){
    let allUsers = await CRUDService.deleteUserById(id);
    return res.send('Deleted');
  }
  else
  {
    res.send("User not found");
  }
};


module.exports = {
  getHomePage: getHomePage,
  createUser: createUser,
  postUser: postUser,
  displayUser: displayUser,
  editUser: editUser,
  postEditUser : postEditUser,
  deleteUser: deleteUser,
};
