import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Co-Working Space Website',
      description: 'A full-stack application designed to manage co-working space reservations, memberships, and amenities. Includes an interactive frontend with smooth animations and a robust backend for user data persistence.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      title: 'Blog Website',
      description: 'A modern, responsive blogging platform allowing users to read, write, and interact with articles. Features a clean typography-focused design and content management system integration.',
      tech: ['React', 'Tailwind CSS', 'Node.js'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <div className="h-px bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="glass-card p-8 flex flex-col h-full group relative overflow-hidden"
            >
              {/* Highlight gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="text-fuchsia-400">
                  <Folder size={40} />
                </div>
                <div className="flex gap-4 text-slate-400">
                  <a href={project.github} className="hover:text-fuchsia-400 transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.live} className="hover:text-fuchsia-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-200 mb-4 relative z-10 group-hover:text-fuchsia-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-8 flex-grow relative z-10">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-x-4 gap-y-2 mt-auto relative z-10">
                {project.tech.map((tech, i) => (
                  <li key={i} className="text-sm font-mono text-violet-400">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
