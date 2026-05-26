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
    <div className="relative min-h-screen overflow-hidden bg-[#f8f7ff] flex items-center justify-center">

      {/* Animated Background */}

      <motion.div
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -40, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-pink-200/40 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
        }}
        className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-blue-200/40 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-200/30 blur-[100px] rounded-full"
      />

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(150,150,150,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(150,150,150,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Signup Card */}

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto w-full max-w-lg py-10"
        >

          <div className="backdrop-blur-2xl bg-white/60 border border-white/40 shadow-2xl rounded-3xl p-10">

            {/* Heading */}

            <div className="text-center">

              <h1 className="text-4xl font-bold text-gray-800">
                Create Account
              </h1>

              <p className="mt-3 text-gray-500">
                Start your smart learning journey
              </p>

            </div>

            {/* Error */}

            {
              error && (
                <p className="text-red-500 text-center mt-6">
                  {error}
                </p>
              )
            }

            {/* Form */}

            <form
              onSubmit={handleSubmit(createAccount)}
              className="mt-8 space-y-5"
            >

              {/* Fullname */}

              <div>

                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <Input
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-2 h-12 rounded-xl bg-white/70"
                  {...register("fullname", {
                    required: "Full name is required",
                  })}
                />

                {
                  errors.fullname && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.fullname.message}
                    </p>
                  )
                }

              </div>

              {/* Username */}

              <div>

                <label className="text-sm font-medium text-gray-700">
                  Username
                </label>

                <Input
                  type="text"
                  placeholder="Choose username"
                  className="mt-2 h-12 rounded-xl bg-white/70"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />

                {
                  errors.username && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.username.message}
                    </p>
                  )
                }

              </div>

              {/* Email */}

              <div>

                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>

                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 h-12 rounded-xl bg-white/70"
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

                {
                  errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )
                }

              </div>

              {/* Password */}

              <div>

                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <Input
                  type="password"
                  placeholder="Create password"
                  className="mt-2 h-12 rounded-xl bg-white/70"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password should be at least 6 characters",
                    },
                  })}
                />

                {
                  errors.password && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.password.message}
                    </p>
                  )
                }

              </div>

              {/* Avatar */}

              <div>

                <label className="text-sm font-medium text-gray-700">
                  Avatar
                </label>

                <Input
                  type="file"
                  accept="image/*"
                  className="mt-2 rounded-xl bg-white/70"
                  {...register("avatar", {
                    required: "Avatar is required",
                  })}
                />

                {
                  errors.avatar && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.avatar.message}
                    </p>
                  )
                }

              </div>

              {/* Cover Image */}

              <div>

                <label className="text-sm font-medium text-gray-700">
                  Cover Image (Optional)
                </label>

                <Input
                  type="file"
                  accept="image/*"
                  className="mt-2 rounded-xl bg-white/70"
                  {...register("coverImage")}
                />

              </div>

              {/* Submit Button */}

              <Button
                type="submit"
                className="w-full h-12 rounded-xl text-base font-semibold bg-black text-white hover:scale-[1.02] transition duration-300"
              >
                Create Account
              </Button>

            </form>

            {/* Bottom Text */}

            <p className="text-center text-gray-500 mt-8">

              Already have an account?{" "}

              <Link
                to="/login"
                className="font-semibold text-black hover:underline"
              >
                Sign In
              </Link>

            </p>

          </div>

        </motion.div>

      </Container>

    </div>
  );
}

export default SignUp;