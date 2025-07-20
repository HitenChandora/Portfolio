'use client';
import { Calendar,Briefcase} from 'lucide-react';

export default function Work() {

    const workExperience = [
        {
          title: 'Senior Full Stack Developer',
          company: 'TechFlow Inc.',
          period: '2022 - Present',
          description: 'Lead development of microservices architecture serving 100K+ users. Mentored junior developers and implemented CI/CD pipelines using AWS and Docker.',
          technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL']
        },
        {
          title: 'Frontend Developer',
          company: 'StartupXYZ',
          period: '2020 - 2022',
          description: 'Built responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UI components.',
          technologies: ['React', 'TypeScript', 'Tailwind CSS', 'GraphQL']
        },
        {
          title: 'Junior Developer',
          company: 'WebSolutions Co.',
          period: '2019 - 2020',
          description: 'Developed and maintained client websites using modern web technologies. Gained experience in full-stack development.',
          technologies: ['JavaScript', 'React', 'Node.js', 'MongoDB']
        }
      ];
    return(
      <section id="work" className="min-h-screen flex items-center px-4 bg-black/30">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-xl text-gray-400">My professional journey in software development</p>
          </div>


          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <div key={index} className="flex items-start space-x-8 group">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  {index !== workExperience.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-green-500/50 to-transparent"></div>
                  )}
                </div>


                <div className="flex-1 bg-black/30 border border-gray-800/50 rounded-xl p-8 group-hover:border-green-500/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-green-400 font-semibold text-lg">{job.company}</p>
                    </div>
                    <div className="flex items-center text-gray-400 mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      {job.period}
                    </div>
                  </div>


                  <p className="text-gray-400 mb-6 leading-relaxed">{job.description}</p>


                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-green-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    );
};