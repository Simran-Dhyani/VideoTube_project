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

  const Login = async (data) => {

    setError("");

    try {

      const response = await authService.login({
        email: data.email,
        password: data.password,
      });

      if (response) {

        dispatch(login(response.data.user));

        navigate("/dashboard");
      }

    } catch (e) {

      setError(
        e.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f8f7ff] flex items-center justify-center">

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

      

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(150,150,150,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(150,150,150,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

     
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 mx-auto w-full max-w-md"
        >

          <div className="backdrop-blur-2xl bg-white/60 border border-white/40 shadow-2xl rounded-3xl p-10">



            <div className="text-center">

              <h1 className="text-4xl font-bold text-gray-800">
                Welcome Back
              </h1>

              <p className="mt-3 text-gray-500">
                Continue your smart learning journey
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

            

            <form
              onSubmit={handleSubmit(Login)}
              className="mt-8 space-y-6"
            >

             

              <div>

                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>

                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 h-12 rounded-xl border-white/40 bg-white/70"
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


              <div>

                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 h-12 rounded-xl border-white/40 bg-white/70"
                  {...register("password", {
                    required: "Password is required",
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

              {/* Button */}

              <Button
                type="submit"
                className="w-full h-12 rounded-xl text-base font-semibold bg-black text-white hover:scale-[1.02] transition duration-300"
              >
                Sign In
              </Button>

            </form>

           
            <p className="text-center text-gray-500 mt-8">

              Don&apos;t have an account?{" "}

              <Link
                to="/signup"
                className="font-semibold text-black hover:underline"
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