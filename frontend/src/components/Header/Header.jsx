import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../container/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black border-b border-white/20">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/*  LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-xl font-bold tracking-wide"
          >
            <Link to="/">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Learnify
              </span>
            </Link>
          </motion.div>

          
          {/*  BUTTONS */}
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="flex items-center gap-4"
              >
              {!authStatus ? (
              <>
                <motion.div
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: "spring", stiffness: 300 }}
                 >
                <Button
                 
                  className="text-black rounded-xl bg-green-800 hover:bg-indigo-400 border-black transition "
                  asChild
                >
                  <Link to="/login">Login</Link>
                </Button>
                </motion.div>
                 <motion.div
                 whileHover={{ scale: 1.08, y: -2 }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: "spring", stiffness: 300 }}
                 >

                <Button
                  className="rounded-xl bg-white text-black hover:bg-indigo-400 border-black transition"
                  asChild
                >
                  <Link to="/signup">Sign Up</Link>
                </Button>
                </motion.div>
                </>
                ) : (
                  <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                 >

              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Logout
              </Button>
               </motion.div>
            )}
         </motion.div>

        </div>
      </Container>
    </header>
  );
}

export default Header;