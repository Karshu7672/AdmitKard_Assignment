const mongoose = require('mongoose');

 const File_data = mongoose.Schema({
    file_id:[String],
    file_name:String,
    file_text:String,
    file_meta_data:{},

})
const File = mongoose.model('File', File_data);

module.exports={File}

