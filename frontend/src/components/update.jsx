import React, { useEffect, useState } from 'react'
// import "../css/cre.css"
import axios from "axios"
import {useNavigate,useParams} from "react-router-dom"


function update() {
  const un=useNavigate();
  const formdet={name:"",email:"",password:"",lastname:""}
  const params=useParams()
  const[data,setdata]=useState(formdet)
  useEffect(()=>{
getdataa()
  },[])
 
  const [userdet,setuserdet]=useState(formdet);
  function formdetail(e){
  

   setdata({...data,[e.target.name]:e.target.value}) 
  }

  async function getdataa() {
    try {
      const response = await axios.get(`http://localhost:4000/update/${params.id}`); // Make sure the URL matches your server route
      
      setdata(response.data)
    
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async function updatedata(e){
    e.preventDefault()
   try {
    const dataa=await axios.put(`http://localhost:4000/update/${params.id}`,data)
    un("/allusers")

    

    
   } catch (error) {
    
   }
  }

  return (
    <div><form>
  
    <div class="mb-3">
     
      <input placeholder='update Name' type="text" name='name' value={data?.name}  onChange={formdetail} class="form-control" id="exampleInputPassword1"/>
    </div>
     <div class="mb-3">
    
      <input placeholder='update LastName' type="text" name='lastname' value={data?.lastname}  onChange={formdetail} class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3">
     
      <input placeholder='update email' type="email" name='email' value={data?.email} onChange={formdetail}  class="form-control" id="exampleInputPassword1"/>
    </div>
    
    <div class="mb-3">
   
      <input placeholder='update password' type="password" name='password' value={data?.password} onChange={formdetail} class="form-control" id="exampleInputPassword1"/>
    </div>
    
    <button type="submit" onClick={updatedata} class="btn btn-primary">update User</button>
  </form></div>
  )
}

export default update