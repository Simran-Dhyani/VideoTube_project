import axios from "axios";
const API=import.meta.env.VITE_API_URL;
const authService={

async login(data){
    const res=await axios.post(`${API}/api/v1/users/login`,data,{withCredentials:true});
    return res.data.data;
},
async getUser(){
    try {
        const res=await axios.get(`${API}/api/v1/users/current-user`,{withCredentials:true});
        return res.data.data;
    } catch (error) {
        return null;
    }
},
async logout(){
 await axios.post(`${API}/api/v1/users/logout`,{},{withCredentials:true});
    
}



}
export default authService;