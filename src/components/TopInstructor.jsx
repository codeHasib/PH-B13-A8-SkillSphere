"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Award } from "lucide-react";
import JaneImg from "../../public/images/jane.jpg";
import MichealImg from "../../public/images/micheal.jpg";
import JohnImg from "../../public/images/john.jpg";

const instructors = [
  {
    name: "John Doe",
    role: "Full Stack Engineer",
    rating: "4.9",
    image: JohnImg ,
  },
  {
    name: "Jane Smith",
    role: "Problem Solving",
    rating: "5.0",
    image: JaneImg,
  },
  {
    name: "Micheal Lee",
    role: "React & NextJS Engineer",
    rating: "4.8",
    image: MichealImg,
  },
];

const TopInstructors = () => {
  return (
    <section className="py-20 bg-white font-mono border-t border-black px-6 overflow-hidden">
      <div>
        <div className="flex justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Award className="w-4 h-4 text-red-600" />
              <span className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">
                Verified_Experts
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              Top_Instructors
            </h2>
          </motion.div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative border border-black p-4 bg-white"
            >
              <div className="relative aspect-square w-full mb-6 overflow-hidden bg-gray-100 border border-gray-200">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 right-0 bg-black text-white px-3 py-1 flex items-center space-x-1">
                  <Star className="w-3 h-3 fill-white" />
                  <span className="text-xs font-bold">{person.rating}</span>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-black uppercase tracking-tighter group-hover:text-red-600 transition-colors">
                  {person.name}
                </h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  {person.role}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-[9px] text-gray-400 uppercase">
                  Profile_Verified
                </span>
                <div className="w-8 h-1 bg-black/10 group-hover:bg-red-600 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
