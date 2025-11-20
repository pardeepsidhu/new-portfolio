import React from "react";

// Professional Experience Section
export function ExperienceSection() {
  return (
    <section className="w-full h-full relative overflow-hidden mb-6  flex items-center">
      {/* Deep black background */}
      <div aria-hidden className="absolute inset-0 bg-black" />

      {/* Ambient atmospheric glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 15% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 85% 70%, rgba(168, 85, 247, 0.12) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative z-10 container mx-auto px-1 px-0 h-full flex items-center py-0 sm:py-2">
        <div className="w-full max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-4 sm:mb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between animate-fade-in">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-3 sm:mb-4">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs text-gray-300 font-medium tracking-wide">
                Career Journey
              </span>
            </div> */}
            
            <h2 className="text-2xl md:pl-8 sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              Work{' '}
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-white">My professional journey in software development</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent" />

            {/* Experience Items */}
            <div className="space-y-4 sm:space-y-6">
              {/* Experience 1 - Current */}
              <div className="relative pl-12 sm:pl-20 group animate-slide-up" style={{ animationDelay: '0ms' }}>
                <div className="absolute left-2.5 sm:left-6 top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500 border-4 border-black group-hover:scale-125 transition-transform duration-300 animate-pulse" />
                
                <div className="border border-white/10 rounded-xl p-3 sm:p-4 bg-gradient-to-r from-white/5 to-transparent hover:from-purple-600/20 hover:to-purple-600/5 hover:border-purple-500/40 transition-all duration-300 cursor-pointer hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 sm:mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-base sm:text-lg p-1">
                          <img 
                          src={"/goany.png"}
                          />
                        </div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">Full Stack Developer</h3>
                        <span className="px-2 py-0.5 text-[9px] sm:text-[10px] rounded-full bg-green-500/20 text-green-400 border border-green-500/30">Current</span>
                      </div>
                      <p className="text-xs sm:text-sm text-purple-400 font-medium">Goanny Technologies • Virtual</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                      <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-400">Sep 2024 - Present</span>
                    </div>
                  </div>
                  <ul className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs md:text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 sm:mt-1">▸</span>
                      <span>Working as Full Stack Developer on real-life applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 sm:mt-1">▸</span>
                      <span>Hands-on with PostgreSQL, Express.js, Prisma, Nest.js, React.js, and Node.js</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 sm:mt-1">▸</span>
                      <span>Working with TypeScript and Next.js in production environment</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">PostgreSQL</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">Prisma</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">Nest.js</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">TypeScript</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">Next.js</span>
                  </div>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative pl-12 sm:pl-20 group animate-slide-up" style={{ animationDelay: '100ms' }}>
                <div className="absolute left-2.5 sm:left-6 top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-500 border-4 border-black group-hover:scale-125 transition-transform duration-300" />
                
                <div className="border border-white/10 rounded-xl p-3 sm:p-4 bg-gradient-to-r from-white/5 to-transparent hover:from-purple-600/20 hover:to-purple-600/5 hover:border-purple-500/40 transition-all duration-300 cursor-pointer hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 sm:mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-base sm:text-lg p-1">
                          <img
                          src={"/coders.avif"}
                          />
                        </div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">Next.js Developer</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-purple-400 font-medium">Coder Boutique • Remote</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                      <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-400">Mar 2024 - Apr 2024</span>
                    </div>
                  </div>
                  <ul className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs md:text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 sm:mt-1">▸</span>
                      <span>Remote internship (3 months planned, completed 1 month due to medical/final exams)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 sm:mt-1">▸</span>
                      <span>Worked with Next.js, TypeScript, and Tailwind CSS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 sm:mt-1">▸</span>
                      <span>Gained experience in modern frontend and full-stack workflows</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">Next.js</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">TypeScript</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">Tailwind CSS</span>
                  </div>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="relative pl-12 sm:pl-20 group animate-slide-up" style={{ animationDelay: '200ms' }}>
                <div className="absolute left-2.5 sm:left-6 top-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-500 border-4 border-black group-hover:scale-125 transition-transform duration-300" />
                
                <div className="border border-white/10 rounded-xl p-3 sm:p-4 bg-gradient-to-r from-white/5 to-transparent hover:from-purple-600/20 hover:to-purple-600/5 hover:border-purple-500/40 transition-all duration-300 cursor-pointer hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2 sm:mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-base sm:text-lg p-1">
                          <img 
                          src={"/outthink.png"}
                          />
                        </div>
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white">MERN Stack Developer</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-purple-400 font-medium">Outthink Global Communications • Virtual</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                      <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-400">Apr 2024 - May 2024</span>
                    </div>
                  </div>
                  <ul className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs md:text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 sm:mt-1">▸</span>
                      <span>Completed a 1-month virtual internship in MERN Stack</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 sm:mt-1">▸</span>
                      <span>Worked on real-life applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5 sm:mt-1">▸</span>
                      <span>Hands-on with MongoDB, Express.js, React.js, and Node.js</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">MongoDB</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">Express.js</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">React.js</span>
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-[10px] md:text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}

export default ExperienceSection;