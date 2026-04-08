import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
          <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="glass-card p-8 md:p-10 relative overflow-hidden group">
          {/* Decorative side border */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-fuchsia-600 to-violet-600"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div className="flex gap-6 items-start">
              <div className="p-4 rounded-full bg-violet-600/20 text-violet-400 hidden md:flex">
                <GraduationCap size={40} />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-slate-200 mb-2">Bachelor of Science in Computer Science</h3>
                <h4 className="text-lg text-fuchsia-400 font-medium mb-4">University of Agriculture, Peshawar</h4>
                <p className="text-slate-400 max-w-2xl leading-relaxed">
                  Focused on core computer science foundations, including software engineering, database design, algorithms, and artificial intelligence. Built several full-stack projects to apply theoretical knowledge to practical scenarios.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-slate-400 font-mono text-sm self-start md:self-stretch justify-center pl-0 md:pl-8 md:border-l border-slate-700/50">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-violet-400" />
                <span>Graduated</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-fuchsia-400" />
                <span>Peshawar, PK</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
