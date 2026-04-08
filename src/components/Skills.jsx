import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server, Cpu } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <Code2 size={32} />, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { name: 'Node.js', icon: <Server size={32} />, color: 'text-green-400', bg: 'bg-green-400/10' },
    { name: 'MongoDB', icon: <Database size={32} />, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { name: 'Python', icon: <Cpu size={32} />, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <section id="skills" className="py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
          <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="glass-card p-6 flex flex-col items-center justify-center gap-4 group cursor-pointer"
            >
              <div className={`p-4 rounded-full ${skill.bg} ${skill.color} transition-transform group-hover:scale-110 duration-300`}>
                {skill.icon}
              </div>
              <span className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
