import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 font-sans text-slate-200 overflow-x-hidden selection:bg-fuchsia-500/30 selection:text-white">
      {/* Dynamic Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-fuchsia-600/20 blur-[120px]" />
      </div>

      <nav className="fixed top-0 inset-x-0 z-50 glass py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-500">
            NK.
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-fuchsia-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-fuchsia-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-fuchsia-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-fuchsia-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-6 pt-28 pb-24 flex flex-col gap-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;
