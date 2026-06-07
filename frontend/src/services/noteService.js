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
export const getNotes = async (videoId) => {
    const response = await axios.get(
        `http://localhost:8000/api/v1/notes/${videoId}`,
        {
            withCredentials: true,
        }
    );

    return response.data.data;
};
export const deleteNote = async (noteId) => {
    const response = await axios.delete(
        `http://localhost:8000/api/v1/notes/${noteId}`,
        {
            withCredentials: true,
        }
    );

    return response.data;
};
export const updateNote = async (noteId, content) => {
  const response = await axios.patch(
    `http://localhost:8000/api/v1/notes/${noteId}`,
    { content },
    {
      withCredentials: true,
    }
  );

  return response.data;
};