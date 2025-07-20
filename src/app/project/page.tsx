'use client';
import { Github, ExternalLink, Database, Globe, ArrowRight} from 'lucide-react';

export default function Project() {
    const projects = [
        {
          title: 'E-Commerce Platform',
          description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard built with Next.js and Stripe.',
          tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
          github: '#',
          demo: '#',
          image: '/api/placeholder/400/250',
          featured: true
        },
        {
          title: 'Task Management API',
          description: 'RESTful API with authentication, real-time notifications, and comprehensive project management features.',
          tech: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
          github: '#',
          demo: '#',
          image: '/api/placeholder/400/250',
          featured: true
        },
        {
          title: 'Mobile Fitness App',
          description: 'Cross-platform mobile app for workout tracking with social features and progress analytics.',
          tech: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
          github: '#',
          demo: '#',
          image: '/api/placeholder/400/250',
          featured: false
        },
        {
          title: 'AI Chat Platform',
          description: 'Real-time chat application with AI integration and smart conversation features.',
          tech: ['Next.js', 'OpenAI API', 'WebSockets', 'Tailwind'],
          github: '#',
          demo: '#',
          image: '/api/placeholder/400/250',
          featured: true
        }
      ];
    
    return(
        <section id="projects" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development
            </p>
          </div>


          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <div
                key={index}
                className="group bg-black/50 border border-gray-800/50 rounded-2xl overflow-hidden hover:border-green-500/50 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="relative h-64 bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-600/10"></div>
                  <div className="relative z-10">
                    {index % 2 === 0 ? <Globe className="w-16 h-16 text-green-400" /> : <Database className="w-16 h-16 text-emerald-400" />}
                  </div>
                </div>


                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>


                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-green-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>


                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 font-medium"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-green-400 hover:text-green-300 transition-colors duration-300 font-medium"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border border-green-400 text-green-400 rounded-lg hover:bg-green-400 hover:text-gray-950 transition-all duration-300">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    );
};