import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/create-user", homeController.createUser);

  router.post("/post-user", homeController.postUser);
  router.get("/get-user", homeController.displayUser);
  router.get("/edit-user", homeController.editUser);

  router.post("/post-edit-user", homeController.postEditUser);
  router.get("/delete-user", homeController.deleteUser);
  //-----------------------------------------------------------------------API
  router.post('/api/login', userController.handleLogin);
  router.post('/api/register-new-user', userController.handleRegisterNewUser);


  router.get('/api/get-all-users', userController.handleGetAllUsers);
  router.post('/api/create-new-user', userController.handleCreateNewUser);
  router.put('/api/edit-user', userController.handleEditUser);
  router.delete('/api/delete-user', userController.handleDeleteUser);
  router.post("/api/user-forgot-password", userController.postForgotPassword);
  router.post(
    "/api/verify-retrieve-password",
    userController.postVerifyRetrievePassword
  );


  router.get("/api/allcode", userController.getAllCode);

  router.get("/api/top-doctor-home", doctorController.getTopDoctorHome);

  return app.use("/", router);
};

module.exports = initWebRoutes;
