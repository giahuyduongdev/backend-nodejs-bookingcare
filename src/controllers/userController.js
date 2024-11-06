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

let handleGetAllUsers = async (req, res) =>{
  let id = req.query.id; // ALL, id(get all orr get one user)
  if(!id){
    return res.status(500).json({
      errCode: 1,
      errMessage: 'Missing required parameters',
      users: [],
    })
  }
  let users = await userService.getAllUsers(id);
  if(users){
    console.log(users);
    return res.status(200).json({
      errCode: 0,
      errMessage: 'OK',
      users,
    });
  }else
  {
    return res.status(200).json({
      errCode: 2,
      errMessage: 'User not found',
      users: [],
    });
  }
};

let handleCreateNewUser = async (req, res) => {
  let message = await userService.createNewUser(req.body);
  return res.status(200).json(message);
};

let handleDeleteUser = async (req, res) =>{
  let id = req.body.id;
  if(!id){
    return res.status(500).json({
      errCode: 1,
      errMessage: 'Missing required parameters!'
    })
  }
  let message = await userService.deleteUser(id);
  return res.status(200).json(message);
}

let handleEditUser = async (req, res) =>{
  let data = req.body;
  let message = await userService.updateUserData(data);
  return res.status(200).json(message);
}

module.exports = {
  handleLogin : handleLogin,
  handleGetAllUsers : handleGetAllUsers,
  handleCreateNewUser : handleCreateNewUser,
  handleEditUser : handleEditUser,
  handleDeleteUser: handleDeleteUser
};