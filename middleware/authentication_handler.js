const {User}= require('../dataBase/model/user_model')
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';


const auth_check=async (req, res, next) => {
    console.log(req.cookies);
    if (req.cookies.user_info) {
      try {
        const decoded = jwt.verify(req.cookies.user_info, secretKey);
        const user = await User.findOne({ user_name: decoded });
        if (user) {
          req.user = user.user_name; // Store the user data in req.user
          console.log("req_middleware user", req.user);
        }
        else{
            console.log("kon hai to ")
            res.status(401).json({msg:"Unauthorized"})
        }
      } catch (err) {
        console.error("Error verifying or finding user:", err);
      }
      next();
    }
    else{
        res.status(401).json({msg:"Unauthorized"})
    }
  }

module.exports = {auth_check}