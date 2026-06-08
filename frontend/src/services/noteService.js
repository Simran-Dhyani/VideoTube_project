import axios from "axios";
const API=import.meta.env.VITE_API_URL;
export const saveNotes=async({videoId,content,videoTitle,})=>{
    console.log("TITLE =", videoTitle);
    const response=await axios.post(
         `${API}/api/v1/notes`,
         {
            videoId,
            content,
            videoTitle
         },
         {
            withCredentials:true,
         }

    );
    return response.data;
};
export const getNotes = async (videoId) => {
    const response = await axios.get(
        `${API}/api/v1/notes/${videoId}`,
        {
            withCredentials: true,
        }
    );

    return response.data.data;
};
export const deleteNote = async (noteId) => {
    const response = await axios.delete(
        `${API}/api/v1/notes/${noteId}`,
        {
            withCredentials: true,
        }
    );

    return response.data;
};
export const updateNote = async (noteId, content) => {
  const response = await axios.patch(
    `${API}/api/v1/notes/${noteId}`,
    { content },
    {
      withCredentials: true,
    }
  );

  return response.data;
};