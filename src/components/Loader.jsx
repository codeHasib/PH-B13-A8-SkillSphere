"use client";

import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full font-mono">
      <div className="relative">
        <span className="loading loading-spinner loading-lg text-black"></span>

        <div className="absolute -top-4 -left-4 w-2 h-2 bg-black"></div>
        <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-red-600"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
        className="mt-8 flex flex-col items-center"
      >
        <span className="text-xs font-black uppercase tracking-[0.4em] text-black">
          Fetching_Data
        </span>
        <span className="text-[10px] text-gray-400 mt-2 uppercase tracking-widest">
          Syncing with SkillSphere Core...
        </span>
      </motion.div>
    </div>
  );
};

export default Loader;
