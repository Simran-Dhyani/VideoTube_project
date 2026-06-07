import axios from "axios";
const API=import.meta.env.VITE_API_URL;
export const getNotes= async () => {
  const response = await axios.get(
    `${API}/api/v1/users/myNotes`,
    {
      withCredentials: true
    }
  );

  return response.data.data;
};