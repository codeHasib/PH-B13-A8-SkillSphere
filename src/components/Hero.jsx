"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BannerImg from "../../public/images/js.jpg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden bg-black font-mono">
      <div className="absolute inset-0 z-0">
        <Image
          src={BannerImg}
          fill
          alt="Hero Image"
          className="object-cover opacity-50 grayscale"
        ></Image>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 border border-gray-500 px-3 py-1 mb-6"
          >
            <span className="w-2 h-2 bg-green-400 animate-pulse"></span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-white/80 uppercase">
              Registration_ongoing // 2026_Curriculum
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none uppercase mb-6"
          >
            Learn from <br />
            Industry experts
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-300 text-sm md:text-lg max-w-xl mb-10 leading-relaxed uppercase"
          >
            High-performance courses in Web Development, Graphics, and UI/UX.
            Built for the next generation of technical architects.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4"
          >
            <Link
              href={"/courses"}
              className="bg-white text-black px-8 py-4 font-bold text-sm tracking-widest hover:bg-gray-200 transition-all uppercase"
            >
              Explore_Courses
            </Link>
            <Link
              href={"/auth/signup"}
              className="border border-white text-white px-8 py-4 font-bold text-sm tracking-widest hover:bg-white hover:text-black transition-all uppercase"
            >
              Join_now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
