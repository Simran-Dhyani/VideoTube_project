
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import authService from "../services/authService";
import { login } from "../store/authSlice";

import Container from "../components/container/Container";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const LoginUser = async (data) => {
    setError("");

    try {
      const response = await authService.login({
        email: data.email,
        password: data.password,
      });

      if (response) {
        dispatch(login(response.user));
        navigate("/dashboard");
      }
    } catch (e) {
      setError(
        e.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">

      {/* Animated Background */}

      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
          className="absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-purple-500/30 blur-[140px] rounded-full"
        />

        <motion.div
          animate={{
            x: [0, -60, 60, 0],
            y: [0, 60, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
          }}
          className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-pink-600/30 blur-[140px] rounded-full"
        />

        <motion.div
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sky-500/20 blur-[120px] rounded-full"
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

      </div>

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 w-full mx-auto max-w-md"
        >

          <div
            className="
              backdrop-blur-3xl
              bg-white/10
              border
              border-white/20
              rounded-3xl
              p-10
              shadow-[0_0_60px_rgba(168,85,247,0.15)]
            "
          >

            

            <div className="text-center mb-8">

              <h1
                className="
                  text-5xl
                  font-bold
                  bg-gradient-to-r
                  from-purple-800
                  to-pink-600
                  
                  bg-clip-text
                  text-transparent
                "
              >
                Welcome Back!!
              </h1>

              <p className="text-gray-400 mt-4">
                Continue your smart learning journey
              </p>

            </div>

            {/* Error */}

            {error && (
              <div
                className="
                  bg-red-500/10
                  border
                  border-red-500/20
                  text-red-400
                  rounded-xl
                  p-3
                  text-center
                  mb-5
                "
              >
                {error}
              </div>
            )}

            {/* Form */}

            <form
              onSubmit={handleSubmit(LoginUser)}
              className="space-y-5"
            >

              <div>

                <label className="text-gray-300 text-sm">
                  Email
                </label>

                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    mt-2
                    h-12
                    bg-white/5
                    border-white/10
                    text-white
                    placeholder:text-gray-500
                    rounded-xl
                    focus:ring-2
                    focus:ring-purple-500
                    hover:[1.02]
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-purple-500/30
                  "
                  {...register("email", {
                    required: "Email is required",
                    validate: {
                      matchPattern: (value) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                          value
                        ) || "Enter valid email",
                    },
                  })}
                />

                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}

              </div>

              <div>

                <label className="text-gray-300 text-sm">
                  Password
                </label>

                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="
                    mt-2
                    h-12
                    bg-white/5
                    border-white/10
                    text-white
                    placeholder:text-gray-500
                    rounded-xl
                    focus:ring-2
                    focus:ring-purple-500
                    hover:[1.02]
                     transition-all
                     duration-300
                    shadow-lg
                    shadow-purple-500/30
                  "
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                {errors.password && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}

              </div>

              <Button
                type="submit"
                className="
                  w-full
                  h-12
                  rounded-xl
                  font-semibold
                  bg-gradient-to-r
                  from-purple-800
                  to-pink-600
                  border-black
                  
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-purple-500/30
                "
              >
                Sign In
              </Button>

            </form>

            <p className="text-center text-gray-400 mt-8">

              Don't have an account?{" "}

              <Link
                to="/signup"
                className="
                  text-purple-400
                  font-semibold
                  hover:text-purple-300
                "
              >
                Sign Up
              </Link>

            </p>

          </div>

        </motion.div>

      </Container>

    </div>
  );
}

export default Login;
