"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, PlayCircle, FileText, Lock } from "lucide-react";

const curriculumData = [
  {
    section: "01 // Foundation_Architecture",
    lessons: [
      { title: "System Introduction & Setup", duration: "15:00", type: "video" },
      { title: "Core Principles of Design", duration: "25:00", type: "video" },
      { title: "Resource Documentation", duration: "PDF", type: "file" },
    ],
  },
  {
    section: "02 // Technical_Implementation",
    lessons: [
      { title: "Advanced Syntax Mastery", duration: "45:00", type: "video" },
      { title: "Structuring Global State", duration: "30:00", type: "video" },
      { title: "Build Process Optimization", duration: "20:00", type: "video" },
    ],
  },
  {
    section: "03 // Final_Deployment",
    lessons: [
      { title: "Production Readiness Checklist", duration: "10:00", type: "video" },
      { title: "Security Protocols", duration: "15:00", type: "video" },
      { title: "Final Certification Quiz", duration: "Exam", type: "file" },
    ],
  },
];

const CurriculumCompo = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <section className="w-full bg-white font-mono border-t border-black py-12 md:py-20">
      <div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-10 border-l-2 border-black pl-4"
        >
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tighter">
            Course_Curriculum
          </h2>
          <p className="text-gray-500 text-[10px] md:text-xs mt-1 uppercase tracking-widest">
            Detailed Syllabus
          </p>
        </motion.div>
        <div className="border border-black">
          {curriculumData.map((module, idx) => (
            <div key={idx} className="border-b border-black last:border-b-0">
              <button
                onClick={() => setActiveSection(activeSection === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-5 md:p-6 bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-xs md:text-base font-black uppercase tracking-tight text-left">
                  {module.section}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeSection === idx ? "rotate-180" : ""
                  }`} 
                />
              </button>

              <AnimatePresence>
                {activeSection === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden bg-gray-50"
                  >
                    <div className="p-5 md:p-6 space-y-3">
                      {module.lessons.map((lesson, lIdx) => (
                        <div 
                          key={lIdx} 
                          className="flex items-center justify-between py-2 border-b border-gray-200 last:border-0"
                        >
                          <div className="flex items-center space-x-3">
                            {lesson.type === "video" ? (
                              <PlayCircle className="w-3 h-3 text-gray-400" />
                            ) : (
                              <FileText className="w-3 h-3 text-gray-400" />
                            )}
                            <span className="text-[10px] md:text-xs uppercase font-medium text-gray-600">
                              {lesson.title}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <span className="text-[9px] text-gray-400 font-bold tracking-widest">
                              {lesson.duration}
                            </span>
                            {idx === 0 ? (
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                            ) : (
                                <Lock className="w-3 h-3 text-gray-300" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumCompo;