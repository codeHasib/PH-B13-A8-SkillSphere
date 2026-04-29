"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";

const CourseCard = ({ image, title, instructor, rating, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      className="group bg-white border border-black overflow-hidden flex flex-col h-full font-mono"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-black">
        <Image
          src={image || "/placeholder-course.jpg"}
          alt={title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-black leading-tight uppercase tracking-tighter text-black">
            {title}
          </h3>
        </div>

        <p className="text-xs text-gray-500 uppercase mb-4 tracking-widest">
          By {instructor}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3 fill-black text-black" />
            <span className="text-xs font-bold text-black">{rating}</span>
          </div>

          <Link
            href={`/courses/${id}`}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-black border-b-2 border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors"
          >
            View_Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
