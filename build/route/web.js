"use strict";

var _express = _interopRequireDefault(require("express"));
var _homeController = _interopRequireDefault(require("../controllers/homeController"));
var _userController = _interopRequireDefault(require("../controllers/userController"));
var _doctorController = _interopRequireDefault(require("../controllers/doctorController"));
var _specialtyController = _interopRequireDefault(require("../controllers/specialtyController"));
var _clinicController = _interopRequireDefault(require("../controllers/clinicController"));
var _patientController = _interopRequireDefault(require("../controllers/patientController"));
var _adminController = _interopRequireDefault(require("../controllers/adminController"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
var initWebRoutes = function initWebRoutes(app) {
  router.get("/", _homeController["default"].getHomePage);
  router.get("/create-user", _homeController["default"].createUser);
  router.post("/post-user", _homeController["default"].postUser);
  router.get("/get-user", _homeController["default"].displayUser);
  router.get("/edit-user", _homeController["default"].editUser);
  router.post("/post-edit-user", _homeController["default"].postEditUser);
  router.get("/delete-user", _homeController["default"].deleteUser);
  //-----------------------------------------------------------------------API
  router.post('/api/login', _userController["default"].handleLogin);
  // Đăng nhập
  router.post('/api/register-new-user', _userController["default"].handleRegisterNewUser);
  // Đăng ký tài khoản dành cho user(bệnh nhân)
  router.post("/api/user-forgot-password", _userController["default"].postForgotPassword);
  // Gửi email quên mật khẩu cho user
  router.post("/api/verify-retrieve-password", _userController["default"].postVerifyRetrievePassword);
  // Đổi mật khẩu khi nhấp vào link quên mật khẩu
  router.post("/api/user-confirm-account", _userController["default"].postConFirmNewAccount);
  // Gửi email xác nhận tài khoản sau khi đã đăng ký
  router.get("/api/get-user-profile", _userController["default"].getUserInfoProfile);
  // Lấy thông tin để hiển thị hồ sơ
  router.post("/api/user-confirm-account-email", _userController["default"].postConfirmNewAccountEmail);
  // Xác nhận email vừa mới đăng ký

  router.get('/api/get-all-users', _userController["default"].handleGetAllUsers);
  // Lấy thông tin của tất cả user
  router.post('/api/create-new-user', _userController["default"].handleCreateNewUser);
  // Tạo mới một user
  router.put('/api/edit-user', _userController["default"].handleEditUser);
  // Chỉnh sửa tất cả thông tin của user
  router.put('/api/change-password-user', _userController["default"].handleChangePassword);
  // Đổi mật khẩu người dùng
  router["delete"]('/api/delete-user', _userController["default"].handleDeleteUser);
  // Xóa user

  router.get("/api/allcode", _userController["default"].getAllCode);
  // Lấy tất cả thông tin trong bảng allcode

  router.get("/api/top-doctor-home", _doctorController["default"].getTopDoctorHome);
  // Lấy ra thông tin doctor để hiển thị ra danh sách bác sĩ nổi bật homepage
  router.get("/api/get-all-doctors", _doctorController["default"].getAllDoctors);
  // Lấy thông tin của tất cả bác sĩ
  router.post("/api/save-infor-doctors", _doctorController["default"].postInforDoctor);
  // Lưu thông tin của một bác sĩ
  router.get("/api/get-detail-doctor-by-id", _doctorController["default"].getDetailDoctorById);
  // Lấy thông tin chi tiết của bác sĩ bằng id
  router.get("/api/get-extra-infor-doctor-by-id", _doctorController["default"].getExtraInforDoctorById);
  // Lấy thông tin mở rộng của bác sĩ để hiển thị chi tiết bác sĩ khi người dùng nhấp vào
  router.get("/api/get-profile-doctor-by-id", _doctorController["default"].getProfileDoctorById);
  // Lấy thông tin bác sĩ để hiển thị khi người dùng nhấp vào thời gian để đặt lịch

  router.post("/api/create-new-specialty", _specialtyController["default"].createSpecialty);
  //Tạo một chuyên khoa mới
  router.get("/api/get-specialty", _specialtyController["default"].getAllSpecialty);
  // Lấy thông tin tất cả chuyên khoa
  router.get("/api/get-detail-specialty-by-id", _specialtyController["default"].getDetailSpecialtyById);
  // Lấy thông tin chuyên khoa để hiển thị khi người dùng nhấp vào

  router.post("/api/create-new-clinic", _clinicController["default"].createClinic);
  // Tạo cơ sở y tế/phòng khám mới
  router.get("/api/get-clinic", _clinicController["default"].getAllClinic);
  // Lấy thông tin tất cả phòng khám
  router.get("/api/get-detail-clinic-by-id", _clinicController["default"].getDetailClinicById);
  // Lấy thông tin phòng khám để hiển thị khi người dùng nhấp vào

  router.post("/api/bulk-create-schedule", _doctorController["default"].bulkCreateSchedule);
  // Tạo lịch khám cho bác sĩ
  router.get("/api/get-schedule-doctor-by-date", _doctorController["default"].getScheduleByDate);
  // Lấy thông tin lịch khám của bác sĩ theo ngày

  router.post("/api/patient-book-appointment", _patientController["default"].postBookAppointment);
  // Gửi email xác nhận lịch khám
  router.post("/api/verify-book-appointment", _patientController["default"].postVerifyBookAppointment);
  // Xác nhận lịch khám
  router.post("/api/cancel-booking", _doctorController["default"].cancelBooking);
  // Bác sĩ hủy lịch khám
  router.post("/api/cancel-booking-email", _doctorController["default"].cancelBookingEmail);
  router.get("/api/get-list-patient-for-doctor", _doctorController["default"].getListPatientForDoctor);
  // Lấy danh sách bệnh nhân của bác sĩ
  router.post("/api/create-remedy", _doctorController["default"].createRemedy);
  // Tạo đơn thuốc
  router.post("/api/send-remedy", _doctorController["default"].sendRemedy);
  // Gửi đơn thuốc

  router.get("/api/get-list-appointment-for-patient", _patientController["default"].getListAppointmentForPatient);
  router.get("/api/get-weekly-revenue", _adminController["default"].getWeeklyRevenue);
  // Lấy lợi nhuận trong tuần 
  router.get("/api/get-total-new-user-day", _adminController["default"].getTotalNewUserDay);
  // Lấy thông tin user vừa mới tạo hôm nay
  router.get("/api/get-total-health-appointment-done", _adminController["default"].getTotalHealthAppointmentDone);
  // Lấy tổng số lịch hẹn đã hoàn thành
  router.get("/api/get-total-doctor", _adminController["default"].getTotalDoctor);
  // Lấy tổng số bác sĩ
  router.get("/api/get-top-three-doctors-of-the-year", _adminController["default"].getTopThreeDoctorsOfTheYear);
  // Lấy 3 bác sĩ có doanh thu cao nhất
  router.get("/api/get-top-four-vip-patient", _adminController["default"].getTopFourVipPatient);
  // Lấy 4 bệnh nhân khám nhiều nhất
  router.get("/api/get-monthly-revenue-specialty", _adminController["default"].getMonthlyRevenueSpecialty);
  // Lấy lợi nhuận mỗi tháng của các chuyên khoa

  return app.use("/", router);
};
module.exports = initWebRoutes;