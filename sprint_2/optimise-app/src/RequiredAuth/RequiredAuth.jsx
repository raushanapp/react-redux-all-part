import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

//  to verify  if the user is authenticated 
//  if yes then let him go to expected component
//  else rdirect to the login page
function RequiredAuth({children}) {
    const isAuth = useSelector((state)=>state.isAuth.isAuth)
    const location = useLocation()
    console.log(" Inside Required Auth",location)
    if(!isAuth) {
        return <Navigate to='/login' state={{from:location}} replace/>
    }
  return children
}

export default RequiredAuth