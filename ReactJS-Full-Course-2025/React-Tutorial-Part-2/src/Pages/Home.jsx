import React from 'react'
import { Link } from 'react-router-dom'
import { toast , ToastContainer } from 'react-toastify'
import { AiFillAudio } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";

export default function Home() {
  return (
    <div>
        <h1>This is a Home Page</h1>
        <Link to='/about' >About Page</Link>
        <br />
        <br />

        <button onClick={()=> toast.success("success")} style={{padding: "5px"}} >Success</button><br /><br />
        <button onClick={()=> toast.error("Server Error")} style={{padding: "5px"}} >Error</button><br /><br />
        <button onClick={()=> toast.info("This is a info")} style={{padding: "5px"}} >Info</button><br /><br />

        <br /><br />

        <div>
          <span><AiFillAudio/></span>
          <span><AiFillCamera/></span>
        </div>

        <ToastContainer/>
    </div>
  )
}
