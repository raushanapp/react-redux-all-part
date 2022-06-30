import { GET_LOGIN_FAILURE, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS } from "./action.type.auth"
let token = localStorage.getItem("token")
const initalState = {
    isAuth:!!token,
    token:token,
    isLoading:false,
    isError:false
}

export const reducerAuth = (state=initalState,{type,payload})=>{

    switch(type){
        case GET_LOGIN_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case GET_LOGIN_SUCCESS:{
            localStorage.setItem("token",payload.token)
            return {
                ...state,
                isLoading:false,
                isError:false,
                isAuth:true,
                token:payload.token
            }
        }
        case GET_LOGIN_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true,
                isAuth:false,
                token:''
            }
        }
        default:{
            return state
        }
    }
}