"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, Zap, Target } from "lucide-react";

const LearningTips = () => {
  const techniques = [
    {
      title: "Active Recall",
      desc: "Don't just read. Test yourself immediately after studying to strengthen neural pathways.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "Feynman Technique",
      desc: "Explain a concept to a 5-year-old. If you can't, you don't understand it yet.",
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  const timeManagement = [
    {
      title: "Pomodoro Protocol",
      desc: "25 minutes of deep work, 5 minutes of rest. Repeat 4 times, then take a long break.",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      title: "Eat the Frog",
      desc: "Complete your most difficult coding task first thing in the morning when focus is peak.",
      icon: <Target className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-20 bg-white font-mono border-t border-black px-6">
      <div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 border-l-4 border-black pl-6"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Learning_Protocols
          </h2>
          <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest">
            Optimize your cognitive infrastructure for maximum retention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-8 bg-black text-white inline-block px-4 py-1 uppercase">
              01 // Study_Techniques
            </h3>
            <div className="space-y-6">
              {techniques.map((item, idx) => (
                <div key={idx} className="border border-black p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center mb-4 text-black">
                    {item.icon}
                    <span className="ml-3 font-black uppercase">{item.title}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed uppercase">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-8 bg-black text-white inline-block px-4 py-1 uppercase">
              02 // Time_Management
            </h3>
            <div className="space-y-6">
              {timeManagement.map((item, idx) => (
                <div key={idx} className="border border-black p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center mb-4 text-black">
                    {item.icon}
                    <span className="ml-3 font-black uppercase">{item.title}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed uppercase">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center border-t border-gray-200 pt-8"
        >
          <p className="text-[10px] text-gray-400 tracking-[0.4em] uppercase">
            Efficiency is the foundation of mastery. Start your session now.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningTips;