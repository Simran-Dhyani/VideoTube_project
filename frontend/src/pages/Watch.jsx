
import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Watch() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Video Section */}
        <div className="lg:w-2/3">
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-2xl shadow-lg"
              src={`https://www.youtube.com/embed/${id}`}
              title="YouTube Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Video Info */}
          <div className="mt-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Video Title
            </h1>

            <p className="mt-2 text-gray-500">
              Channel Name
            </p>
          </div>
        </div>

        {/* Notes Section */}
        <div className="lg:w-1/3">
          <Card className="p-5 lg:sticky lg:top-6">
            <h2 className="text-xl font-semibold mb-4">
              My Notes
            </h2>

            <textarea
              placeholder="Write your notes here..."
              className="
                w-full
                h-72
                p-4
                border
                rounded-xl
                resize-none
                outline-none
                focus:ring-2
                focus:ring-purple-400
              "
            />

            <Button className="w-full mt-4">
              Save Note
            </Button>
          </Card>
        </div>

      </div>
    </div>
  );
}

export default Watch;