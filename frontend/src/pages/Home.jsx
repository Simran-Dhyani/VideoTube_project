import React from "react";
import Container from "../components/container/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="relative min-h-screen  bg-black text-white overflow-hidden">

      
<div className="absolute inset-0 overflow-hidden">

  
  <motion.div
    animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0] }}
    transition={{ duration: 20, repeat: Infinity }}
    className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-purple-500 opacity-30 blur-[140px] rounded-full"
  />

  <motion.div
    animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0] }}
    transition={{ duration: 25, repeat: Infinity }}
    className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-pink-600 opacity-30 blur-[140px] rounded-full"
  />

 
  <motion.div
    animate={{ y: [0, -30, 0] }}
    transition={{ duration: 10, repeat: Infinity }}
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sky-500 opacity-20 blur-[120px] rounded-full"
  />

   <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

  
 

</div>
   
      <div className="relative z-10">

        {/*  HERO SECTION */}
        <Container>
          <div className="text-center py-32">

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1,ease:"easeOut" }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Learn with{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Intelligence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 mt-6 max-w-xl mx-auto"
            >
              Watch videos, take smart notes, and organize your learning in one place along with AI assistance .
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button
                size="lg"
                className="rounded-xl px-6 bg-white text-black hover:bg-gray-200 transition hover:shadow-lg hover:-translate-y-1"
              >
                Get Started
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-xl px-6 border-white/30 text-white hover:bg-white/10 transition hover:shadow-lg hover:-translate-y-1"
              >
                Explore
              </Button>
            </motion.div>

          </div>
        </Container>

        {/*  FEATURES SECTION */}
        <Container>
          <div className="grid md:grid-cols-3 gap-8 pb-32">

            {[
              {
                title: "Smart Notes",
                desc: "Write notes alongside videos in real-time",
              },
              {
                title: "Video Learning",
                desc: "Stream and learn without interruptions",
              },
              {
                title: "Organized Folders",
                desc: "Keep all your learning structured",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05,y:-5 }}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl transition"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.desc}</p>
              </motion.div>
            ))}

          </div>
        </Container>

      </div>
    </div>
  );
}

export default Home