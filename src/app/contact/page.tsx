'use client';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
    return(
        <section id="contact" className="min-h-screen flex items-center px-4 py-20 bg-black/30">
        <div className="max-w-5xl mx-auto w-full text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
          </p>


          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:alex@example.com"
              className="group flex flex-col items-center p-8 bg-black/50 border border-gray-800/50 rounded-xl hover:border-green-400/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-400">alex@example.com</p>
            </a>


            <a
              href="https://linkedin.com"
              className="group flex flex-col items-center p-8 bg-black/50 border border-gray-800/50 rounded-xl hover:border-green-400/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">Connect with me</p>
            </a>


            <a
              href="https://github.com"
              className="group flex flex-col items-center p-8 bg-black/50 border border-gray-800/50 rounded-xl hover:border-green-400/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">Check my code</p>
            </a>
          </div>


          <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-2xl p-8 border border-green-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to start a project?</h3>
            <p className="text-gray-400 mb-6">Let's discuss your ideas and bring them to life!</p>
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    );
};