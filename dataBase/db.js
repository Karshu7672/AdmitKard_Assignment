const mongoose=require('mongoose');

const url='mongodb+srv://kioken:IcYNTAbGZPwNkeHq@cluster0.0gedaos.mongodb.net/?retryWrites=true&w=majority/readme'
mongoose.connect('mongodb://127.0.0.1:27017/fileRead').then((msg)=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err)
})


const db =mongoose.connection;

module.exports=db
