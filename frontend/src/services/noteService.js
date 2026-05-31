import axios from "axios";
export const saveNotes=async(videoId,content)=>{
    const response=await axios.post(
         "http://localhost:8000/api/v1/notes",
         {
            videoId,
            content,
         },
         {
            withCredentials:true,
         }

    );
    return response.data;
};