"use client";

import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import { User, Image as ImageIcon, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";

const UpdateInformation = () => {
  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    await authClient.updateUser({
      image: userData.image,
      name: userData.name,
    });
    window.location.href = "/profile";
    toast.success("PROFILE_DATA_UPDATED");
  }

  return (
    <div className="min-h-screen bg-white font-mono text-black flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md border-2 border-black p-8 bg-white"
      >
        <div className="flex items-center justify-between mb-8 border-b border-black pb-4">
          <Link
            href="/profile"
            className="hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-black uppercase tracking-tighter">
            Edit_Registry_Data
          </h1>
          <div className="w-2 h-2 bg-red-600 animate-pulse"></div>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center">
              <User className="w-3 h-3 mr-2" /> Full_Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="ENTER_NEW_NAME"
              className="w-full border border-black p-4 outline-none focus:bg-gray-50 font-bold uppercase text-sm tracking-tight transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center">
              <ImageIcon className="w-3 h-3 mr-2" /> Avatar_URL
            </label>
            <input
              type="text"
              name="image"
              required
              placeholder="HTTPS://IMAGE_SOURCE_PATH"
              className="w-full border border-black p-4 outline-none focus:bg-gray-50 font-medium text-sm tracking-tight transition-colors"
            />
          </div>

          <p className="text-[9px] text-gray-400 uppercase leading-relaxed">
            Note: Changes will propagate across all SkillSphere nodes within 60
            seconds.
          </p>

          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "#000", color: "#fff" }}
            whileTap={{ scale: 0.98 }}
            className="w-full border-2 border-black bg-white text-black py-4 font-black uppercase tracking-widest text-xs flex items-center justify-center space-x-2 transition-colors"
          >
            <Save className="w-4 h-4" />
            <input type="submit" value={"Update_Information"} />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdateInformation;
