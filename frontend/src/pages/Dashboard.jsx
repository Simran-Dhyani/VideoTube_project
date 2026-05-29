import { useState,useEffect } from "react";
import {
  HeroSection,
  Sidebar,
  Navbar,
  VideoSection
} from "../components/index.js";
import { fetchVideos } from "@/services/youtubeService.js";

function Dashboard() {
  const [videos,setVideos]=useState([])
  const getVideos=async()=>{
    const data=await fetchVideos()
    setVideos(data)
  }

  useEffect(()=>{
    getVideos()

  },[])

  

  return (

    <div className="flex min-h-screen bg-gradient-to-br from-[#fdfbff] via-[#f7f7ff] to-[#eef4ff]">

      <Sidebar />

      <div className="flex-1 p-6">

        <Navbar />

        {/* Hero */}

        <HeroSection />
        
        <VideoSection
        title="Recommended videos"
        videos={videos}

        />

      </div>

    </div>
  );
}

export default Dashboard;