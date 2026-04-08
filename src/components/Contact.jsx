import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Contact = () => {
  return (
    <section id="contact" className="py-20 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-12 leading-relaxed">
          I'm currently looking for new opportunities to build amazing products. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:contact@example.com"
          className="inline-block px-10 py-4 bg-transparent border-2 border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500/10 rounded-full font-medium transition-all hover:scale-105 mb-16"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-8 text-slate-400">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors tooltip" aria-label="GitHub">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors tooltip" aria-label="LinkedIn">
            <FaLinkedin size={28} />
          </a>
          <a href="mailto:contact@example.com" className="hover:text-fuchsia-400 transition-colors tooltip" aria-label="Email">
            <Mail size={28} />
          </a>
        </div>
        
        <div className="mt-16 text-slate-500 text-sm font-mono">
          <p>© {new Date().getFullYear()} Noman Khalid. Built with React & Tailwind CSS.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
