import axios from "axios";
const API=import.meta.env.VITE_API_URL;
const authService={
async register(data){

    const formData = new FormData();

    formData.append("fullname", data.fullname);
    formData.append("email", data.email);
    formData.append("username", data.username);
    formData.append("password", data.password);

    formData.append("avatar", data.avatar);

    if(data.coverImage){
        formData.append("coverImage", data.coverImage);
    }

    const res = await axios.post(
        `${API}/api/v1/users/register`,
        formData,
        {
            withCredentials:true,
            headers:{
                "Content-Type":"multipart/form-data"
            }
        }
    );

    return res.data.data;
},
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