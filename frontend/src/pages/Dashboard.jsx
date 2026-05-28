import {
  HeroSection,
  Sidebar,
  Navbar,
  VideoCard,
  VideoSection
} from "../components/index.js";

function Dashboard() {
  const videos = [

  {
    id: 1,

    thumbnail:
      "https://i.ytimg.com/vi/dGcsHMXbSOA/maxresdefault.jpg",

    title: "Learn React in One Video",

    channel: "Codevolution",

    duration: "24:10",
  },

  {
    id: 2,

    thumbnail:
      "https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg",

    title: "Node.js Crash Course",

    channel: "Traversy Media",

    duration: "18:40",
  },

];

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