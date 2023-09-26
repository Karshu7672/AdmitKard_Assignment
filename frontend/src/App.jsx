import { useState } from 'react'
import './App.css'
import server from '../server'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FileUpload from './components/fileUpload/fileUpload'
import Login from './components/login/login_page'
import Register from './components/register/register'
import Navbar from './components/navbar/navbar';


function App() {
  

  return (
   <div>
   <Router>
   <Navbar/>
    <Routes>
    <Route exact path="/" element={<FileUpload/>} />
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/register" element={<Register/>} />
    </Routes>
    </Router>
   </div>
  )
}

export default App;

