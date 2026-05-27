import {
  HeroSection,
  Sidebar,
  Navbar,
  VideoCard,
  VideoGrid
} from "../components/index.js";

function Dashboard() {

  return (

    <div className="flex min-h-screen bg-gradient-to-br from-[#fdfbff] via-[#f7f7ff] to-[#eef4ff]">

      <Sidebar />

      <div className="flex-1 p-6">

        <Navbar />

        {/* Hero */}

        <HeroSection />

        {/* Temporary Video Test */}

        <div className="mt-10 max-w-sm">

          <VideoCard
            video={{
              thumbnail:
                "https://i.ytimg.com/vi/dGcsHMXbSOA/maxresdefault.jpg",

              title: "Learn React in One Video",

              channel: "Codevolution",

              duration: "24:10",
            }}
          />

        </div>

        <VideoGrid />

      </div>

    </div>
  );
}

export default Dashboard;