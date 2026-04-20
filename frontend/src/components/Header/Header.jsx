import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../container/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black border-b border-white/20">
      <Container>
        <div className="flex items-center justify-between py-4">

          {/*  LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-wide"
          >
            <Link to="/">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Learnify
              </span>
            </Link>
          </motion.div>

          {/*  NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">

            <Link
              to="/"
              className="hover:text-white transition"
            >
              Home
            </Link>

            {authStatus && (
              <>
                <Link
                  to="/videos"
                  className="hover:text-white transition"
                >
                  Videos
                </Link>

                <Link
                  to="/channel"
                  className="hover:text-white transition"
                >
                  Channel
                </Link>
              </>
            )}

          </nav>

          {/*  BUTTONS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            {!authStatus ? (
              <>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                  asChild
                >
                  <Link to="/login">Login</Link>
                </Button>

                <Button
                  className="rounded-xl bg-white text-black hover:bg-gray-200 transition"
                  asChild
                >
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Logout
              </Button>
            )}
          </motion.div>

        </div>
      </Container>
    </header>
  );
}

export default Header;