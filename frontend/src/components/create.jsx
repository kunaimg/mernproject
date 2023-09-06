import React, { useState } from 'react'
import "../css/create.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
function create() {
  const un=useNavigate();
  const formdet={name:"",email:"",password:"",lastname:""}
  const [userdet,setuserdet]=useState(formdet);
  function formdetail(e){
   setuserdet({...userdet,[e.target.name]:e.target.value})
 
  }
  async function savedata(e){
    e.preventDefault()
   try {
    const data=await axios.post('http://localhost:4000/add',userdet)
    un("/allusers")

    
   } catch (error) {
    
   }
  }

  return (
    <div><form>
  
    <div class="mb-3">
     
      <input placeholder='Name' type="text" name='name' onChange={formdetail} class="form-control" id="exampleInputPassword1"/>
    </div>
     <div class="mb-3">
    
      <input placeholder='LastName' type="text" name='lastname' onChange={formdetail} class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3">
     
      <input placeholder='email' type="email" name='email' onChange={formdetail} class="form-control" id="exampleInputPassword1"/>
    </div>
    
    <div class="mb-3">
   
      <input placeholder='password' type="password" name='password' onChange={formdetail} class="form-control" id="exampleInputPassword1"/>
    </div>
    
    <button type="submit" onClick={savedata} class="btn btn-primary">Create User</button>
  </form></div>
  )
}

export default create