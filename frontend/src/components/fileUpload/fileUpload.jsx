import React from 'react';
import { useState } from 'react'
import server from '../../../server';
import All_Files from '../all_files/all_files';




export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [data, setdata] = useState(null);
  const [loading,setloading]=useState(true)
  const handleFileChange=(e)=>{
    setFile(e.target.files[0])
  }
  const handleFileUpload= async()=>{
    if(!file) return ;
      // const formData=new FormData();
      console.log("okay to the system")
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await server.post("uploadFile", formData, {
          withCredentials: true,
        });
        const d = response.data;
      
        setdata(d);
        // console.log("post", d;
        setloading(false);
        console.log("data from the server ", data);
      } catch (e) {
        console.error(e);
      }
      // console.log(data_from_server);
      // console.log(file)
  }

  return (
    <div className="App">
    <div className='navBar'>
    <h1>Add files from Computer</h1>
    </div>
    <div className='data'>
    <div className='fileuploader'>
    <input type="file" accept=".txt" onChange={handleFileChange} />
    <button onClick={handleFileUpload}>Upload</button>
    </div>
    <div>{loading?"":<All_Files info={data}/>}</div>
    </div>
    </div>
  )
}


