import {
  Home,
  BookOpen,
  Folder,
  History,
  User,
  Settings,
} from "lucide-react";

function Sidebar() {

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
    },
    {
      title: "Learn",
      icon: BookOpen,
    },
    {
      title: "Collections",
      icon: Folder,
    },
    {
      title: "History",
      icon: History,
    },
    {
      title: "Profile",
      icon: User,
    },
    {
      title: "Settings",
      icon: Settings,
    },
  ];

  return (

    <div className="w-[260px] min-h-screen p-5">

      {/* Glass Sidebar */}

      <div className="h-full rounded-3xl border border-white/40 bg-white/60 backdrop-blur-2xl shadow-xl p-5">

        {/* Logo */}

        <div className="mb-10">

          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Learn Smartly
          </h1>

        </div>

        {/* Menu */}

        <div className="space-y-2">

          {
            menuItems.map((item, index) => {

              const Icon = item.icon;

              return (

                <button
                  key={index}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    rounded-2xl
                    text-gray-700
                    hover:bg-white
                    hover:shadow-md
                    transition-all
                    duration-300
                    group
                  "
                >

                  <Icon
                    size={20}
                    className="group-hover:scale-110 transition"
                  />

                  <span className="font-medium">
                    {item.title}
                  </span>

                </button>

              );
            })
          }

        </div>

      </div>

    </div>

  );
}

export default Sidebar;