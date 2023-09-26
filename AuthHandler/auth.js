const {User} = require('../dataBase/model/user_model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';


const login=async (req,res)=>{
    // console.log(req.user);
    console.log("req user",req.user)

    if(req.user){
        console.log("cookiee hai phele se ")
        res.send(req.user.user_name);
    }
    else{

        const user_info=req.body.info;
        console.log("cookiee",req.cookies)
    const userName=user_info.name;
    const password=user_info.pwd;
    console.log("info user",userName);
    try{
        const isauthicate = await User.findOne({user_name:userName}).then(async (d)=>{
            console.log(d);
            if(!d){
                console.log("no such user")
                res.status(404).json("no user")
            }
            else{
                console.log("users",d);
                const check =bcrypt.compare(password, d.password, function(err, result) {
                    if(result){
                        const token = jwt.sign(userName, secretKey);
                        // console.log("token",token);
                        //setting up the cookiee
                        
                        res.cookie('user_info',token, {
                            maxAge: 3600000,
                            httpOnly: true,
                            // sameSite: 'None', // Use 'None' for cross-origin requests over HTTPS
                        secure: true, // Required for 'SameSite=None'
                    });
                      res.status(200).json({isauth:isauthicate})
                }
                else{
                    res.status(401).json({"issuth":isauthicate});
                }
                return result 
            });
            
        }
        }).catch((e)=>{
            console.log(e);
            return e;
        })
        
        
    }
    catch(e){
        console.log(e);
        res.send(500).json({err:e})
    }
    
}

}

module.exports ={login}
