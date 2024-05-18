import React, { useState } from 'react'
import axios from 'axios'

function Admin() {
    const [name,setName]=useState('')
    const [number,setNumber]=useState('')
    const [email,setEmail]=useState('')
    const handleSubmit=()=>{
      const formData={
        name:name,
        number:number,
        email:email
      }

      //npm i axios
      axios.post('http://localhost:3001/admin/post',formData)
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
    }
  return (
    <div>
        <h1>Personal Details</h1><br></br>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/><br></br>
        <label>Phone No: </label>
        <input type='number' value={number} onChange={(e)=>{setNumber(e.target.value)}}/><br></br>
        <label>E-mail: </label>
        <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br></br>
        <button type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Admin


