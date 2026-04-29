"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flame, ArrowUpRight } from "lucide-react";
import CourseCard from "./CourseCard";
import { useData } from "@/context/useData";
import Loader from "./Loader";
import Link from "next/link";

const TrendingSection = () => {
  const { courses, loading } = useData();
  if (loading) {
    return <Loader></Loader>;
  }
  const trendingCourses = courses.slice(0, 3);
  return (
    <section className="py-20 bg-white border-t border-black px-6 font-mono">
      <div>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 mb-3"
            >
              <Flame className="w-4 h-4 text-orange-600 animate-bounce" />
              <span className="text-[10px] tracking-[0.3em] font-bold text-gray-500 uppercase">
                Live_Metrics // High_Demand
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Trending_Now
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="flex items-center text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1 group"
          >
            <Link href={"/courses"} className="flex justify-center items-center">
              Explore_All_courses
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
