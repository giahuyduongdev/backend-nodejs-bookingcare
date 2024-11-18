import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";
import specialtyController from "../controllers/specialtyController";
import clinicController from "../controllers/clinicController";

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
  router.post("/api/user-forgot-password", userController.postForgotPassword);
  router.post(
    "/api/verify-retrieve-password",
    userController.postVerifyRetrievePassword
  );
  router.post("/api/user-confirm-account", userController.postConFirmNewAccount);
  router.post("/api/user-confirm-account-email", userController.postConfirmNewAccountEmail);

  router.get('/api/get-all-users', userController.handleGetAllUsers);
  router.post('/api/create-new-user', userController.handleCreateNewUser);
  router.put('/api/edit-user', userController.handleEditUser);
  router.delete('/api/delete-user', userController.handleDeleteUser);

  router.get("/api/allcode", userController.getAllCode);

  router.get("/api/top-doctor-home", doctorController.getTopDoctorHome); // Lấy ra top doctor để hiển thị trang chủ
  router.get("/api/get-all-doctors", doctorController.getAllDoctors);
  router.post("/api/save-infor-doctors", doctorController.postInforDoctor); // lưu thông tin của table doctor_info và mardowns trong quản lý thông tin bác sĩ của admin
  router.get("/api/get-detail-doctor-by-id",doctorController.getDetailDoctorById); 
  // lấy thông tin table doctor_infor, mardowns và all code trong trang quản lý thông tin bác sĩ của admin
  router.get("/api/get-extra-infor-doctor-by-id",doctorController.getExtraInforDoctorById);
  // lấy thông tin bác sĩ để hiển thị trên trang web khi nhấp vào xem chi tiết bên phía trang chủ

  router.get("/api/get-specialty", specialtyController.getAllSpecialty);

  router.get("/api/get-clinic", clinicController.getAllClinic);


  return app.use("/", router);
};

module.exports = initWebRoutes;
