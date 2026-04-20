import Container from "../components/container/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100">

      {/* HERO */}
      <div className="relative overflow-hidden">
  <Container>
    <div className="text-center py-28 space-y-6">

      <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
        Learn Smarter with <br />
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Videos + Notes + AI
        </span>
      </h1>

      <p className="text-gray-600 max-w-xl mx-auto">
        Watch videos, take notes side-by-side, and organize everything in one place along with AI assistance.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <Button size="lg" className="rounded-xl px-6">
          Start Learning
        </Button>

        <Button variant="outline" size="lg" className="rounded-xl px-6">
          Explore
        </Button>
      </div>

    </div>
  </Container>
</div>

      {/* FEATURES */}
<div className="grid md:grid-cols-3 gap-6 pb-20">
  
  {[
    {
      title: "Video Learning",
      desc: "Watch curated educational content",
      emoji: "📺",
    },
    {
      title: "Smart Notes",
      desc: "Take notes while watching videos",
      emoji: "📝",
    },
    {
      title: "Organized Folders",
      desc: "Structure your learning efficiently",
      emoji: "📂",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="p-6 rounded-2xl bg-white shadow-sm border hover:shadow-lg hover:-translate-y-1 transition duration-300"
    >
      <div className="text-3xl">{item.emoji}</div>
      <h3 className="text-lg font-semibold mt-3">{item.title}</h3>
      <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
    </div>
  ))}

</div>

    </div>
  );
}

export default Home;
