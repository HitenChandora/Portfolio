'use client';
import { useEffect, useState } from 'react';
import { ChevronDown, Code, ArrowRight, User, Briefcase, FolderOpen, MessageSquare, BookOpen, HomeIcon } from 'lucide-react';
import About from './about/page';
import Work from './work/page';
import Blog from './blog/page';
import Contact from './contact/page';
import Project from './project/page';
import Home from './home/page';

export default function Main() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null, 
        rootMargin: '0px 0px -70% 0px',
        threshold: 0.1, 
      }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const navLinks = [
    { id: 'home', label: 'Home', icon: <HomeIcon className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'work', label: 'Work', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpen className="w-4 h-4" /> },
    { id: 'blog', label: 'Blog', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <MessageSquare className="w-4 h-4" /> },
  ];
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              {'HC'}
            </div>
            <ul className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                   onClick={() => scrollToSection(link.id)}
                    className={`flex items-center space-x-2 transition-all duration-300 hover:text-green-400 group ${activeSection === link.id ? 'text-green-400' : 'text-gray-400'
                      }`}
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <Home/>
      <About/>
      <Work/>
      <Project/>
      <Blog/>
      <Contact/>

    </div>
  );
}