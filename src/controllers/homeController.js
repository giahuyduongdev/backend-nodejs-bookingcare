import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = async (req, res) => {
  return res.render("test/about.ejs");
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

let displayCRUD = async (req, res) => {
  let data = await CRUDService.getAllUser();
  return res.render("displayCRUD.ejs", {
    data: data,
  });
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(req.body);
  console.log(message);
  return res.send("Post crud from server");
};

let editCRUD = async (req, res) =>{
  let userId = req.query.id;
  if(userId){
    let userData = await CRUDService.getUserInfoById(userId);
    console.log("---------------------------------");
    console.log(userData);
    console.log("---------------------------------");
    return res.render("editCRUD.ejs", {
      data : userData,
    });
  }
  else{
    return res.send("UserID not found");
  }
};

let putCRUD = async (req, res) =>{
  let userData = req.body;
  let allUsers = await CRUDService.updateUserData(userData);
  return res.render("displayCRUD", {
    data : allUsers,
  })
};

let deleteCRUD = async (req, res) =>{
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
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayCRUD: displayCRUD,
  editCRUD: editCRUD,
  putCRUD : putCRUD,
  deleteCRUD: deleteCRUD,
};
