import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useSelector } from "react-redux";
function HeroSection() {
const userData=useSelector((state)=>state.auth.userData);

  return (
    
    <div
      className="
        relative
        overflow-hidden
        rounded-[32px]
        p-10 md:p-14
        bg-white/60
        backdrop-blur-2xl
        border
        border-white/40
        shadow-xl
      "
    >

      {/* Floating Pastel Gradient */}

      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="
          absolute
          top-[-120px]
          right-[-120px]
          w-[300px]
          h-[300px]
          bg-purple-200/40
          blur-[120px]
          rounded-full
        "
      />

      <motion.div
        animate={{
          x: [0, -30, 30, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-[-100px]
          left-[-100px]
          w-[250px]
          h-[250px]
          bg-pink-200/40
          blur-[120px]
          rounded-full
        "
      />

      {/* Content */}

      <div className="relative z-10">

        {/* Greeting */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-5xl
            md:text-6xl
            font-bold
            text-gray-800
            leading-tight
          "
        >

          What are we learning today,{userData?.fullname}?

        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            mt-5
            text-lg
            text-gray-500
            max-w-2xl
          "
        >

          Search YouTube videos, organize learning,
          and study with AI powered assistance.

        </motion.p>

        {/* Button */}

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            mt-8
            px-8
            py-4
            rounded-2xl
            bg-black
            text-white
            font-medium
            shadow-lg
          "
        >

          Continue Learning

        </motion.button>

      </div>

    </div>

  );
}

export default HeroSection;