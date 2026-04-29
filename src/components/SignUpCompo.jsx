"use client";

import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import BannerImg from "../../public/banner.jpg";
import GoogleAuthBtn from "./GoogleAuthBtn";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignUpCompo = () => {
  const [step, setStep] = useState(1);

  const router = useRouter();

  const backdropVariants = {
    hidden: { opacity: 0, x: "-10%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: { delay: customDelay, duration: 0.6, ease: "backOut" },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const inputVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const stepVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    animate: {
      x: 0,
      opacity: 1,
      position: "relative",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute",
      transition: { duration: 0.5, ease: "easeInOut" },
    }),
  };

  const terminalDetails = [
    "01 // REGISTER",
    "02 // CHOOSE THE SKILL",
    "03 // LEARN",
  ];

  async function onSubmit(e) {
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
  }

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col md:flex-row font-mono px-2">
        <motion.div
          className="w-full md:w-3/5 h-64 md:h-auto relative overflow-hidden flex flex-col justify-end border-r border-gray-800"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={BannerImg}
            alt="Background PCB Structure"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="grayscale opacity-30 scale-110"
          />

          <div className="absolute top-10 md:top-20 right-5 md:right-10 text-right z-10 w-full px-5 md:px-0">
            <motion.div
              className="inline-block border border-gray-600 px-4 py-3 mb-10"
              custom={0.5}
              variants={textVariants}
            >
              <h2 className="text-sm font-light uppercase tracking-widest text-white/70">
                FOLLOW_THE_PATH
              </h2>
            </motion.div>

            {terminalDetails.map((detail, index) => (
              <motion.p
                key={index}
                className="text-lg md:text-2xl font-light text-white/60 mb-3"
                custom={0.8 + index * 0.1}
                variants={textVariants}
              >
                {detail}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full md:w-2/5 bg-white text-black p-10 md:p-16 flex flex-col justify-between"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-between items-start mb-16">
            <h1 className="text-4xl font-extrabold tracking-tighter text-black font-space">
              SKILLSPHERE
            </h1>
          </div>

          <div className="flex-grow flex flex-col justify-center relative min-h-[400px]">
            <AnimatePresence initial={false} mode="popLayout" custom={step}>
              {step === 1 && (
                <motion.div
                  key={step}
                  variants={stepVariants}
                  custom={step}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="w-full"
                >
                  <div className="flex items-center mb-10">
                    <div className="w-1 h-20 bg-black mr-6"></div>
                    <div className="space-y-1">
                      <h3 className="text-xs uppercase tracking-widest text-black/50 font-medium">
                        REGISTER_ACCOUNT
                      </h3>
                      <p className="text-xs text-black/70 font-light">
                        CREATE YOUR ACCOUNT.
                      </p>
                    </div>
                  </div>

                  <form onSubmit={onSubmit}>
                    {/* name */}
                    <div className="mb-5">
                      <label className="block text-sm tracking-wide font-medium text-black mb-3">
                        NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="border border-black p-4 text-gray-800 text-lg w-full"
                        placeholder="John Doe"
                      />
                    </div>
                    {/* email */}
                    <div className="mb-5">
                      <label className="block text-sm tracking-wide font-medium text-black mb-3">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="border border-black p-4 text-gray-800 text-lg w-full"
                        placeholder="user@skillsphere.com"
                      />
                    </div>
                    {/* image url */}
                    <div className="mb-5">
                      <label className="block text-sm tracking-wide font-medium text-black mb-3">
                        IMAGE URL
                      </label>
                      <input
                        type="text"
                        name="image"
                        required
                        className="border border-black p-4 text-gray-800 text-lg w-full"
                        placeholder="IMAGE URL"
                      />
                    </div>
                    {/* password */}
                    <div className="mb-5">
                      <label className="block text-sm tracking-wide font-medium text-black mb-3">
                        PASSWORD
                      </label>
                      <input
                        type="password"
                        name="password"
                        required
                        className="border border-black p-4 text-gray-800 text-lg w-full"
                        placeholder="***********"
                      />
                    </div>

                    <input
                      type="submit"
                      value={"REGISTER"}
                      className="inline-block w-full text-center p-4 border-1"
                    />

                    <p className="text-center mt-2">OR</p>
                  </form>
                  <GoogleAuthBtn></GoogleAuthBtn>

                  <p className="my-3 text-center">
                    ALREADY REGISTERED?{" "}
                    <Link className="font-bold" href={"/auth/signin"}>
                      LOGIN
                    </Link>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SignUpCompo;
