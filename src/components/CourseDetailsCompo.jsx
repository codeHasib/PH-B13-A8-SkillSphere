"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Star, BarChart, User, Tag, ChevronLeft } from "lucide-react";
import Link from "next/link";

const CourseDetailsCompo = ({ course }) => {
  const {
    title,
    instructor,
    duration,
    rating,
    level,
    description,
    image,
    category,
  } = course;

  return (
    <div className=" bg-white text-black font-mono">
      <nav className="p-4 flex items-center justify-between">
        <Link
          href="/courses"
          className="flex items-center text-xs font-bold uppercase tracking-widest hover:text-red-600 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back_To_Catalog
        </Link>
        <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">
          SkillSphere // Course_Access_Point
        </span>
      </nav>

      <div className="flex flex-col lg:flex-row lg:min-h-[calc(100vh-60px)]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-3/5 relative bg-black flex flex-col justify-end p-8 md:p-16"
        >
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

          <div className="relative z-10">
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block bg-red-600 text-white px-3 py-1 text-[10px] uppercase font-bold tracking-widest mb-4"
            >
              {category}
            </motion.span>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none"
            >
              {title}
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-2/5 p-8 md:p-16 flex flex-col justify-center bg-white"
        >
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="space-y-1">
              <span className="flex items-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                <User className="w-3 h-3 mr-2" /> Instructor
              </span>
              <p className="text-lg font-black uppercase tracking-tighter">
                {instructor}
              </p>
            </div>
            <div className="space-y-1">
              <span className="flex items-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                <Clock className="w-3 h-3 mr-2" /> Duration
              </span>
              <p className="text-lg font-black uppercase tracking-tighter">
                {duration}
              </p>
            </div>
            <div className="space-y-1">
              <span className="flex items-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                <BarChart className="w-3 h-3 mr-2" /> Skill_Level
              </span>
              <p className="text-lg font-black uppercase tracking-tighter">
                {level}
              </p>
            </div>
            <div className="space-y-1">
              <span className="flex items-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                <Star className="w-3 h-3 mr-2 fill-black" /> Rating
              </span>
              <p className="text-lg font-black uppercase tracking-tighter">
                {rating} / 5.0
              </p>
            </div>
          </div>

          <div className="border-t border-black pt-8 mb-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] mb-4 text-gray-400">
              Project_Syllabus
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed uppercase">
              {description}
              This curriculum is engineered for rapid mastery, utilizing the
              latest industry frameworks and structural best practices.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-center text-[9px] text-gray-400 uppercase tracking-widest">
              Secured access // Digital certification upon completion
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetailsCompo;
