const API_KEY =import.meta.env.VITE_YOUTUBE_API_KEY

const BASE_URL = "https://www.googleapis.com/youtube/v3"

export const fetchVideos = async () => {

  const response = await fetch(
    `${BASE_URL}/search?part=snippet&q=web development&type=video&maxResults=10&key=${API_KEY}`
  )
  if (!response.ok) {
   throw new Error("Failed to fetch videos")
   }

  const data = await response.json()

  return data.items
}