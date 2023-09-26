const { model } = require('mongoose');
const {User} = require('../dataBase/model/user_model');
const bcrypt = require('bcrypt');


const registration=async (req,res)=>{
    const user_info=req.body.info;
    console.log("registration",user_info)
    let user;
    try{

        bcrypt.hash(user_info.pwd,10, async (err, hash)=>{
            const info =await User.findOne({user_name:user_info.name}).then((d)=>{return d}).catch((e)=>{return e})
            console.log("info",info)
            if(info){
                console.log("already exist");
                res.status(409).json({msg:"already exist"})
            }
            else{
                console.log("hogaya regester ")
                user =new User({
                    user_name:user_info.name,
                    password:hash,
                })
            const response = await user.save().then((d)=>{
                console.log("ho gaya",d)
                res.status(200).json({msg:"success"});
                return d;
            })
        }
        });
    }
    catch(e){
        console.log(e);
        res.send(500).json({err:e})
    }

    
}

module.exports ={registration}