const { v4: uuidv4, validate: uuidValidate } = require('uuid');
const {file_operations}=require('./file_operation')
const uuid = uuidv4();
const {File}= require('../dataBase/model/file_data')






const file_text=async (req,res)=>{
  const file = req.file; // We get the file in req.file
  console.log(file);
  if (!file) { // in case we do not get a file we return
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  const multerText = Buffer.from(file.buffer).toString("utf-8"); 
  // console.log(multerText)
  const result = { 
    fileText: multerText,
  };
  const data = file_operations(result)
  const check = await File.findOne({file_name:file.originalname}).then((d)=>{
    console.log(d);
    return d;
  }).catch((e)=>{
    console.log(e);
  })
  console.log("check",check);
  if(!check){
    console.log("inside condition")
    const file_data = File({
      file_id:uuidv4(),
      file_name:file.originalname,
      file_text:result.fileText,
      file_meta_data:data
    })
    await file_data.save().then((d)=>{
      console.log(d)
      res.status(200).json(d);
    }).catch(e=>console.log(e));
  }
  else{
    console.log("already exist")
    res.status(200).json(check)
  }
}




module.exports={file_text}
