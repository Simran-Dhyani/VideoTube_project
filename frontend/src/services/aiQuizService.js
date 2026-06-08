import axios from "axios";
const API=import.meta.env.VITE_API_URL;
export const generateQuiz= async ({notes,videoTitle}) => {
  const response = await axios.post(
    `${API}/api/v1/ai/generate-quiz`,
    {
        notes,
        videoTitle
    },
    {
      withCredentials: true,
      
    }
  );

  return response.data.quiz;
};