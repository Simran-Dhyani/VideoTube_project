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
  const [searchQuery,setSearchQuery]=useState("")
  const getVideos=async()=>{
    const query=searchQuery || "web development"
    const data=await fetchVideos(query)
    setVideos(data)
  }

  useEffect(()=>{
    getVideos()

  },[searchQuery])

  

  return (

    <div className="flex min-h-screen bg-gradient-to-br from-[#fdfbff] via-[#f7f7ff] to-[#eef4ff]">

      <Sidebar />

      <div className="flex-1 p-6">

        <Navbar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        />

        {/* Hero */}

        <HeroSection 
        />
        
        <VideoSection
        title="Recommended videos"
        videos={videos}

        />

      </div>

    </div>
  );
}

export default Dashboard;