import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";
import specialtyController from "../controllers/specialtyController";
import clinicController from "../controllers/clinicController";
import patientController from "../controllers/patientController";
import adminController from "../controllers/adminController";

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
  // Đăng nhập
  router.post('/api/register-new-user', userController.handleRegisterNewUser);
  // Đăng ký tài khoản dành cho user(bệnh nhân)
  router.post("/api/user-forgot-password", userController.postForgotPassword);
  // Gửi email quên mật khẩu cho user
  router.post("/api/verify-retrieve-password",userController.postVerifyRetrievePassword);
  // Đổi mật khẩu khi nhấp vào link quên mật khẩu
  router.post("/api/user-confirm-account", userController.postConFirmNewAccount);
  // Gửi email xác nhận tài khoản sau khi đã đăng ký
  router.post("/api/user-confirm-account-email", userController.postConfirmNewAccountEmail);
  // Xác nhận email vừa mới đăng ký


  router.get('/api/get-all-users', userController.handleGetAllUsers);
  // Lấy thông tin của tất cả user
  router.post('/api/create-new-user', userController.handleCreateNewUser);
  // Tạo mới một user
  router.put('/api/edit-user', userController.handleEditUser);
  // Chỉnh sửa tất cả thông tin của user
  router.delete('/api/delete-user', userController.handleDeleteUser);
  // Xóa user

  router.get("/api/allcode", userController.getAllCode);
  // Lấy tất cả thông tin trong bảng allcode

  router.get("/api/top-doctor-home", doctorController.getTopDoctorHome); 
  // Lấy ra thông tin doctor để hiển thị ra danh sách bác sĩ nổi bật homepage
  router.get("/api/get-all-doctors", doctorController.getAllDoctors);
  // Lấy thông tin của tất cả bác sĩ
  router.post("/api/save-infor-doctors", doctorController.postInforDoctor);
  // Lưu thông tin của một bác sĩ
  router.get("/api/get-detail-doctor-by-id",doctorController.getDetailDoctorById); 
  // Lấy thông tin chi tiết của bác sĩ bằng id
  router.get("/api/get-extra-infor-doctor-by-id",doctorController.getExtraInforDoctorById);
  // Lấy thông tin mở rộng của bác sĩ để hiển thị chi tiết bác sĩ khi người dùng nhấp vào
  router.get("/api/get-profile-doctor-by-id",doctorController.getProfileDoctorById);
  // Lấy thông tin bác sĩ để hiển thị khi người dùng nhấp vào thời gian để đặt lịch

  router.post("/api/create-new-specialty", specialtyController.createSpecialty);
  //Tạo một chuyên khoa mới
  router.get("/api/get-specialty", specialtyController.getAllSpecialty);
  // Lấy thông tin tất cả chuyên khoa
  router.get("/api/get-detail-specialty-by-id",specialtyController.getDetailSpecialtyById);
  // Lấy thông tin chuyên khoa để hiển thị khi người dùng nhấp vào

  router.post("/api/create-new-clinic", clinicController.createClinic);
  // Tạo cơ sở y tế/phòng khám mới
  router.get("/api/get-clinic", clinicController.getAllClinic);
  // Lấy thông tin tất cả phòng khám
  router.get("/api/get-detail-clinic-by-id",clinicController.getDetailClinicById);
  // Lấy thông tin phòng khám để hiển thị khi người dùng nhấp vào

  router.post("/api/bulk-create-schedule", doctorController.bulkCreateSchedule);
  // Tạo lịch khám cho bác sĩ
  router.get("/api/get-schedule-doctor-by-date",doctorController.getScheduleByDate);
  // Lấy thông tin lịch khám của bác sĩ theo ngày

  router.post("/api/patient-book-appointment",patientController.postBookAppointment);
  // Gửi email xác nhận lịch khám
  router.post("/api/verify-book-appointment",patientController.postVerifyBookAppointment);
  // Xác nhận lịch khám
  router.post("/api/cancel-booking", doctorController.cancelBooking);
  // Bác sĩ hủy lịch khám
  router.post("/api/cancel-booking-email", doctorController.cancelBookingEmail);

  router.get("/api/get-list-patient-for-doctor",doctorController.getListPatientForDoctor);
  // Lấy danh sách bệnh nhân của bác sĩ
  router.post("/api/create-remedy", doctorController.createRemedy);
  // Tạo đơn thuốc
  router.post("/api/send-remedy", doctorController.sendRemedy);
  // Gửi đơn thuốc


  router.get("/api/get-weekly-revenue", adminController.getWeeklyRevenue);
  // Lấy lợi nhuận trong tuần 
  router.get("/api/get-total-new-user-day", adminController.getTotalNewUserDay);
  // Lấy thông tin user vừa mới tạo hôm nay
  router.get("/api/get-total-health-appointment-done",adminController.getTotalHealthAppointmentDone);
  // Lấy tổng số lịch hẹn đã hoàn thành
  router.get("/api/get-total-doctor", adminController.getTotalDoctor);
  // Lấy tổng số bác sĩ
  router.get("/api/get-top-three-doctors-of-the-year",adminController.getTopThreeDoctorsOfTheYear);
  // Lấy 3 bác sĩ có doanh thu cao nhất
  router.get("/api/get-top-four-vip-patient",adminController.getTopFourVipPatient);
  // Lấy 4 bệnh nhân khám nhiều nhất
  router.get("/api/get-monthly-revenue-specialty",adminController.getMonthlyRevenueSpecialty);
  // Lấy lợi nhuận mỗi tháng của các chuyên khoa


  return app.use("/", router);
};

module.exports = initWebRoutes;
