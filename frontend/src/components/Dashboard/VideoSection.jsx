import React from "react";
import  VideoCard  from "./VideoCard";
function VideoSection({title,videos}){
    return (
        <div>
        <h1 className="text-2xl font-bold mt-2">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {
        videos?.map((video)=>(
            <VideoCard 
            key={video.id}
            video={video}/>

        )
        
        )
       }
        </div>
     </div>
      )
    }
export default VideoSection;