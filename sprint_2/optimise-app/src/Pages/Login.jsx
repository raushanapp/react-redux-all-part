import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { login } from '../ReduxStore/AuthReducer/action.auth'
function Login() {
  const [email,setEmail] =useState("")
  const [password,setPassword] =useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const comingFrom = location.state?.from?.pathname || "/"
  console.log("inside login page",location)
  const handleSubmit = (e)=>{
     e.preventDefault()
     if(email && password) {
       dispatch(login({email,password}))
       .then((r)=>{
         if(r.type==="GET_LOGIN_SUCCESS"){
            navigate(comingFrom,{replace:true})
            // navigate("/")
         }
       })
     }
  }
  return (
    <LoginWrapper>
    <div>
       <form  onSubmit={handleSubmit}>
         <div>
           <label >Email : </label>
           <input type="email" placeholder='enter email' 
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
           />
         </div>
         <div>
           <label >Password : </label>
           <input type="password"  placeholder='enter password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
           />
         </div>
         <button type='submit'>Login</button>
       </form>
    </div>
    </LoginWrapper>
  )
}

export default Login

const LoginWrapper = styled.div`
   display: flex;
   width: 300px;
   margin: auto;
   align-items: center;
   flex-direction: column;
`