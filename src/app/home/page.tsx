'use client';
import { ChevronDown, Code, ArrowRight } from 'lucide-react';
export default function Home() {
    return(
        <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-emerald-500/5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl"></div>
        </div>


        <div className="text-center z-10 max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="w-full h-full bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
                <Code className="w-16 h-16 text-gray-950" />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>


          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-3a00 via-green-500 to-emerald-500 bg-clip-text text-transparent leading-tight">
            Hiten Chandora
          </h1>
          <p className="text-2xl md:text-4xl text-gray-400 mb-8 font-light">
            Mobile Application Developer
          </p>
         

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
            >
              View My Work
              <ChevronDown className="ml-2 w-5 h-5 group-hover:animate-bounce" />
            </button>


            <button
            
              className="inline-flex items-center px-8 py-4 border-2 border-gray-700 hover:border-green-400 text-gray-300 hover:text-white font-semibold rounded-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Let's Connect
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    );
}