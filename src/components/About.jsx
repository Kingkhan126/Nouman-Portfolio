import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              Hi! I'm Noman. My journey into tech started with a deep curiosity about how intelligent systems can solve complex real-world problems. 
            </p>
            <p>
              Born in <span className="text-fuchsia-400 font-medium">Karak</span> and currently based in <span className="text-fuchsia-400 font-medium">Peshawar</span>, I bring a unique perspective to software development. I specialize in bridging the gap between cutting-edge Artificial Intelligence / Machine Learning models and robust Full-Stack applications.
            </p>
            <p>
              Whether it's building a seamless user interface or architecting a complex backend to handle data processing, I love creating experiences that are both beautiful and functionally powerful.
            </p>

            <div className="flex items-center gap-2 pt-4 text-violet-400 font-medium">
              <MapPin size={20} />
              <span>Based in Peshawar, Pakistan</span>
            </div>
          </div>

          <div className="relative group">
            {/* Image Placeholder / Abstract Graphic */}
            <div className="w-full aspect-square max-w-md mx-auto glass-card relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-500/20 z-0"></div>
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: 'radial-gradient(circle at center, #c026d3 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />
              
              <Sparkles className="w-24 h-24 text-fuchsia-400/50 relative z-10" />
              
              {/* If image is available, it can be added here */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
