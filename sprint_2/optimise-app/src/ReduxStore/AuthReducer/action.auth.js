import { GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS } from "./action.type.auth"
import axios from "axios"

export const login = (data)=>(dispatch)=>{
    console.log(data.email)
    dispatch({type:GET_LOGIN_REQUEST})
    // axios.post("https://reqres.in/api/login",{
    //     email:data.eamil,
    //     password:data.password
    //     // data:payload
    // }
   return  axios({
        method:"post",
        url:"https://reqres.in/api/login",
        data:{
            email:data.email,
            password:data.password
        }
    })
    .then((r)=>dispatch({type:GET_LOGIN_SUCCESS,payload:r.data}))
    .catch((e)=>dispatch({type:GET_LOGIN_FAILURE}))
}