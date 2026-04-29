"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, Mail, Shield, Award, Edit3, Save } from "lucide-react";
import { useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";
import Loader from "./Loader";

const MyProfileCompo = () => {
  const { data, isPending } = useSession();

  //   {
  //     "name": "marry",
  //     "email": "marryjane@gmail.com",
  //     "emailVerified": false,
  //     "createdAt": "2026-04-29T20:49:58.452Z",
  //     "updatedAt": "2026-04-29T20:49:58.452Z",
  //     "id": "69f26ef6a8fba56921cf05da"
  // }

  if (isPending) {
    return <Loader></Loader>;
  }

  if (!data) {
    redirect("/auth/signin");
  }

  const createdAt = data?.user?.createdAt;

  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString()
    : "";

  const studentData = data?.user;

  return (
    <div className="min-h-screen bg-white font-mono text-black border-t border-black">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/3 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-black bg-gray-50"
        >
          <div className="sticky top-12 text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter mb-2">
              {studentData.name}
            </h1>
            <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-8">
              {studentData.email}
            </p>

            <div className="space-y-4 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3 text-xs uppercase tracking-widest font-bold">
                <Shield className="w-4 h-4 text-red-600" />
                <span>
                  {studentData.emailVerified
                    ? "Verified_Student"
                    : "Unverified_Student"}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-2/3 p-8 md:p-12 space-y-10"
        >
          <div className="p-6 bg-black text-white">
            <div className="flex justify-between items-center text-[10px] tracking-[0.3em] uppercase">
              <span>Account_Created:</span>
              <span className="font-black">{formattedDate}</span>
            </div>
          </div>
          <div className="pt-6 border-t border-gray-100 flex justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 bg-black text-white px-10 py-4 font-black uppercase tracking-widest text-xs hover:bg-gray-800 transition-colors shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]"
            >
              <Save className="w-4 h-4" />
              <Link href={"/profile/update"}>Update_Profile</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyProfileCompo;
