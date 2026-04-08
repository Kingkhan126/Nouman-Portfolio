import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-start pt-10" id="hero">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-fuchsia-400 font-medium mb-4 tracking-wide"
      >
        Hi, my name is
      </motion.p>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold font-sans tracking-tight text-white mb-4"
      >
        Noman Khalid.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold font-sans tracking-tight text-slate-400 mb-8"
      >
        I build intelligent solutions.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl text-lg text-slate-400 mb-12 leading-relaxed"
      >
        I'm a Computer Science graduate specializing in AI, Machine Learning, and Full-Stack development. Currently focused on building dynamic, high-performance applications and exploring the cutting edge of modern web architecture.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a 
          href="#projects"
          className="inline-flex items-center gap-2 px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-full font-medium transition-all hover:scale-105 shadow-[0_0_20px_rgba(192,38,211,0.4)]"
        >
          View My Work
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
