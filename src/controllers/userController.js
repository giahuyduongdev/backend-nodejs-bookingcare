import userService from "../services/userService";

let handleLogin = async (req, res) => {
  let email = req.body.email; // lấy giá trị người dùng gửi lên
  let password = req.body.password;
  if(!email || !password){
    return res.status(500).json({
      errCode: 1,
      message: 'Missing inputs parameter!'
    })
  };

  let userData = await userService.handleUserLogin(email, password);

  //check email exits
  //compare password
  //return userInfo
  //access_token: JWT json webtoken
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {}
  });
};

module.exports = {
  handleLogin : handleLogin,
};