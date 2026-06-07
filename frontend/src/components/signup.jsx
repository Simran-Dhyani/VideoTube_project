import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import authService from "../services/authService";

import Container from "../components/container/Container";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SignUp() {

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createAccount = async (data) => {

  setError("");

  try {

    const response = await authService.register({
      ...data,
      avatar: data.avatar[0],
      coverImage: data.coverImage?.[0],
    });

    if (response) {
      navigate("/login");
    }

  } catch (e) {

    setError(
      e.response?.data?.message || "Registration failed"
    );
  }
};
  
    return (
  <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">

    {/* Animated Background */}

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

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

    </div>

    <Container>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-xl mx-auto"
      >

        <div
          className="
          backdrop-blur-2xl
          bg-white/10
          border border-white/20
          shadow-2xl
          rounded-3xl
          p-8
          "
        >

          {/* Heading */}

          <div className="text-center mb-8">

            <h1 className="text-4xl font-bold">
              Create Your
              <span className="block bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Learnify Account
              </span>
            </h1>

            <p className="text-gray-400 mt-4">
              Start your smart learning journey today
            </p>

          </div>

          {error && (
            <p className="text-red-400 text-center mb-4">
              {error}
            </p>
          )}

          <form
            onSubmit={handleSubmit(createAccount)}
            className="space-y-5"
          >

            <Input
              placeholder="Full Name"
              className="h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              {...register("fullname", {
                required: "Full name is required",
              })}
            />

            <Input
              placeholder="Username"
              className="h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              {...register("username", {
                required: "Username is required",
              })}
            />

            <Input
              type="email"
              placeholder="Email Address"
              className="h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              {...register("email", {
                required: "Email is required",
              })}
            />

            <Input
              type="password"
              placeholder="Password"
              className="h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              {...register("password", {
                required: "Password is required",
              })}
            />

            <div>
              <label className="text-sm text-gray-300">
                Avatar
              </label>

              <Input
                type="file"
                accept="image/*"
                className="mt-2 bg-white/10 border-white/20 text-gray-300"
                {...register("avatar", {
                  required: "Avatar is required",
                })}
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">
                Cover Image (Optional)
              </label>

              <Input
                type="file"
                accept="image/*"
                className="mt-2 bg-white/10 border-white/20 text-gray-300"
                {...register("coverImage")}
              />
            </div>

            <Button
              type="submit"
              className="
              w-full
              h-12
              rounded-xl
              bg-gradient-to-r
              from-purple-600
              to-blue-600
              hover:from-purple-700
              hover:to-blue-700
              transition-all
              duration-300
              hover:scale-[1.02]
              "
            >
              Create Account
            </Button>

          </form>

          <div className="mt-8 text-center">

            <p className="text-gray-400">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="
              text-purple-400
              font-semibold
              hover:text-purple-300
              transition
              "
            >
              Sign In
            </Link>

          </div>

        </div>

      </motion.div>
    </Container>

  </div>
);
  
}

export default SignUp;