const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors")
const cookieParser = require('cookie-parser');
const controller = require("./router_function/read_file")
const db=require('./dataBase/db')
const {registration} = require('./authHandler/regestration')
const {login}=require('./authHandler/auth')
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';
const{User}=require('./dataBase/model/user_model')
const {auth_check}=require('./middleware/authentication_handler')
const app = express();



app.use(express.json());
app.use(cookieParser("slkjdfhlsdjfkwernoearisf"));
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
const port = 3000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



app.get("/", (req, res) => {
  res.status(300).json({"hello":"chalo okay"})
});

app.post("/uploadFile",auth_check,upload.single('file'),controller.file_text);
app.get("/auth_check",auth_check,(req,res)=>{
  console.log("askjlbfkjasnf.war",req.user);
  res.send(req.user);
});

app.get('/logout',(req,res)=>{
  res.clearCookie('user_info');
  res.status(200).json("success");
})

app.post('/register',registration);
app.post('/login', login);








app.listen(port, () => console.log(`App listening on port ${port}!`));
