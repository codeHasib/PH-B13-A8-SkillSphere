"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, Home, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [randomTraceID, setRandomTraceID] = useState(0);
  useEffect(() => {
    const randomNum = Math.random().toString(36).substring(7).toUpperCase();
    setRandomTraceID(randomNum);
  }, []);
  const router = useRouter();
  return (
    <div className="min-h-screen bg-black text-white font-mono flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <AlertTriangle className="w-20 h-20 text-red-600 animate-pulse" />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4">
          404_ERROR
        </h1>
        <p className="text-sm md:text-lg text-gray-500 uppercase tracking-[0.3em] mb-12">
          The requested coordinate does not exist in the SkillSphere database.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <Link
          href="/"
          className="flex items-center justify-center bg-white text-black px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all"
        >
          <Home className="w-4 h-4 mr-2" />
          Return_Home
        </Link>

        <button
          onClick={() => router.back()}
          className="flex items-center justify-center border border-white text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Previous_Node
        </button>
      </motion.div>

      <div className="absolute bottom-10 w-full text-[9px] text-gray-700 uppercase tracking-widest">
        Trace_ID: {randomTraceID}
      </div>
    </div>
  );
}
