'use client';
export default function About() {
  const skills = [
    'Java', // from resume [cite: 36]
    'Kotlin', // from resume [cite: 36]
    'Dart', // from resume [cite: 36]
    'Javascript', // from resume [cite: 36]
    'C#', // from resume [cite: 36]
    'SQL', // from resume [cite: 36]
    'Flutter', // from resume [cite: 37]
    'Ionic + Angular', // from resume [cite: 37]
    'Android SDK', // from resume [cite: 37]
    'ASP.NET Core', // from resume [cite: 37]
    'Entity Framework', // from resume [cite: 37]
    'WinForms', // from resume [cite: 37]
    'Telerik Reporting', // from resume [cite: 37]
    'Visual Studio', // from resume [cite: 38]
    'VS Code', // from resume [cite: 38]
    'Android Studio', // from resume [cite: 38]
    'Xcode', // from resume [cite: 38]
    'SSMS', // from resume [cite: 38]
    'Postman', // from resume [cite: 38]
    'Git', // from resume [cite: 38]
    'Vercel', // from resume [cite: 38]
    'Telerik Report Designer' // from resume [cite: 38]
  ];
    
    return(
        <section id="about" className="min-h-screen flex items-center px-4 bg-black/30">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                I am a Mobile Application Developer with a B.Tech in Computer Engineering from Uka Tarsadia University, which I completed in April 2023 with a CGPA of 8.9.
                </p>
                <p>
                I am currently employed as a Mobile Application Developer at Otobit Private Limited in Surat, a position I have held since September 2022. My work there includes optimizing and maintaining legacy Android applications, and resolving critical bugs. I developed and managed a loan collection app using Flutter with a robust SQLite-based local database. I also led the end-to-end development and release of a cross-platform sports social media app using Flutter , and led a team to design a real-time slot booking application using Kotlin.
                </p>
              </div>
            </div>

            <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6 text-white">Technologies & Tools</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <div
                      key={skill}
                      className="group px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-green-400 hover:border-green-400/50 hover:bg-green-400/5 transition-all duration-300 text-center"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      <span className="text-sm font-medium group-hover:scale-105 transition-transform inline-block">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
          
          </div>
        </div>
      </section>
    );
};