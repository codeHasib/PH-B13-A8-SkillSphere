"use client";

import { Search, Command } from "lucide-react";
import { motion } from "framer-motion";

const SearchBox = ({ search }) => {
  return (
    <div className="w-full bg-white py-10 px-6 border-b border-black font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-black">
            {" "}
            Search_Filters
          </label>
          <div className="hidden md:flex items-center space-x-2 text-gray-400"></div>
        </div>

        <div className="relative flex flex-col md:flex-row gap-0 border-2 border-black group">
          <div className="hidden md:flex items-center justify-center pl-4 bg-white text-black">
            <Search className="w-5 h-5" />
          </div>

          <input
            type="text"
            onChange={search}
            placeholder="TYPE_COURSE_NAME"
            className="w-full p-4 md:p-5 text-sm md:text-base outline-none bg-white uppercase placeholder:text-gray-300 font-black tracking-widest transition-all focus:bg-gray-50"
          />

          <motion.button
            whileHover={{ backgroundColor: "#000", color: "#fff" }}
            whileTap={{ scale: 0.98 }}
            className="bg-black text-white px-8 py-4 md:py-0 font-black text-xs uppercase tracking-widest border-t-2 md:border-t-0 md:border-l-2 border-black transition-colors"
          >
            EXECUTE_SEARCH
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
