const mongoose = require('mongoose');
 

const userSchema = new mongoose.Schema({
    user_name:String,
    password:String,
    file_id:[String]
})
const User = mongoose.model('User', userSchema);

module.exports ={User}