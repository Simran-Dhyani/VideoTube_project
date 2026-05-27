import React from "react";
import { useDispatch } from "react-redux";
import authService from "@/services/authService";
import { logout } from "@/store/authSlice";
function LogOutBtn(){
    const dispatch=useDispatch();
    const logOutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout());
        })
    }
    return(
        <button className="inline-block size-6 rounded-sm px-4 py-4 hover:bg-blue-950 bg-purple-900" onClick={logOutHandler}>LogOut</button>
    )


}
export default LogOutBtn