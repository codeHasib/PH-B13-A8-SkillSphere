"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BannerImg from "../../public/banner.jpg";
import GoogleAuthBtn from "./GoogleAuthBtn";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignUpCompo = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    
    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      image: userData.image,
      email: userData.email,
      password: userData.password,
    });

    if (!error) {
      toast.success("REGISTRATION SUCCESSFUL");
      router.push("/courses");
    } else {
      toast.error(error.message.toUpperCase());
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row font-mono px-2 overflow-x-hidden">
      {/* Left Section - Image Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-3/5 h-64 md:h-auto relative overflow-hidden flex flex-col justify-end border-r border-gray-800"
      >
        <Image
          src={BannerImg}
          alt="Banner"
          fill
          style={{ objectFit: "cover" }}
          className="grayscale opacity-30"
        />

        <div className="absolute top-10 md:top-20 right-5 md:right-10 text-right z-10 w-full px-5 md:px-0">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="inline-block border border-gray-600 px-4 py-3 mb-10 text-sm font-light uppercase tracking-widest text-white/70"
          >
            FOLLOW_THE_PATH
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-lg md:text-2xl font-light text-white/60 mb-3">
              01 // REGISTER
            </p>
            <p className="text-lg md:text-2xl font-light text-white/60 mb-3">
              02 // CHOOSE THE SKILL
            </p>
            <p className="text-lg md:text-2xl font-light text-white/60 mb-3">
              03 // LEARN
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Section - Form */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-2/5 bg-white text-black p-10 md:p-16 flex flex-col"
      >
        <h1 className="text-4xl font-extrabold tracking-tighter mb-10">
          SKILLSPHERE
        </h1>

        <div className="flex items-center mb-8">
          <div className="w-1 h-12 bg-black mr-4"></div>
          <div>
            <h3 className="text-xs uppercase font-bold text-black/50">
              REGISTER_ACCOUNT
            </h3>
            <p className="text-xs text-black/70">CREATE YOUR ACCOUNT.</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold mb-2">NAME</label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="border border-black p-3 w-full focus:bg-gray-50 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold mb-2">EMAIL</label>
            <input
              type="email"
              name="email"
              required
              placeholder="user@skillsphere.com"
              className="border border-black p-3 w-full focus:bg-gray-50 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold mb-2">IMAGE URL</label>
            <input
              type="text"
              name="image"
              required
              placeholder="https://image-link.com"
              className="border border-black p-3 w-full focus:bg-gray-50 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold mb-2">PASSWORD</label>
            <input
              type="password"
              name="password"
              required
              placeholder="***********"
              className="border border-black p-3 w-full focus:bg-gray-50 outline-none"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-black text-white p-4 font-bold mt-4 hover:bg-gray-800 transition-colors"
          >
            REGISTER
          </motion.button>
        </form>

        <div className="text-center my-4 text-sm">OR</div>

        <GoogleAuthBtn />

        <p className="mt-6 text-center text-sm">
          ALREADY REGISTERED?{" "}
          <Link className="font-bold underline" href={"/auth/signin"}>
            LOGIN
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUpCompo;