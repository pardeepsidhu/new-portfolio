import React, { useState } from "react";

export function AboutMeSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const skills = [
    {
      title: "Frontend",
      icon: (
        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      tech: "HTML, CSS, JavaScript, React.js, Next.js, TypeScript, Tailwind CSS",
      delay: "0ms"
    },
    {
      title: "Backend",
      icon: (
        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      tech: "Node.js, Express.js, Nest.js, RESTful APIs",
      delay: "100ms"
    },
    {
      title: "Database",
      icon: (
        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      tech: "MongoDB, PostgreSQL, Prisma ORM",
      delay: "200ms"
    },
    {
      title: "Tools & Version Control",
      icon: (
        <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      tech: "Git, GitHub, VS Code, Postman",
      delay: "300ms"
    }
  ];

  return (
    <section className="w-full  relative overflow-visible flex flex-col lg:flex-row items-center justify-center gap-2 pb-2 lg:gap-12 px-2 sm:px-6 md:px-12 ">
      {/* Deep black background */}
      <div aria-hidden className="absolute inset-0 bg-black z-0" />

      {/* Ambient atmospheric glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 z-0"
        style={{
          background: `
            radial-gradient(circle at 15% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 85% 70%, rgba(168, 85, 247, 0.12) 0%, transparent 60%)
          `,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-8">
        {/* LEFT CONTENT */}
        <div className="flex-1 max-w-xl w-full space-y-1 sm:space-y-2">
          {/* Eyebrow text */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 bg-gradient-to-r from-white/5 to-transparent hover:from-purple-600/30 hover:to-purple-600/10 hover:border-purple-500/40 cursor-pointer animate-fade-in"
            style={{ animationDelay: '0ms' }}
          >
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs text-gray-300 font-medium tracking-wide">
              Full Stack MERN Developer
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white tracking-tight animate-slide-up"
            style={{ animationDelay: '100ms' }}
          >
            About{' '}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          {/* Introduction */}
          <p
            className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed max-w-full animate-slide-up"
            style={{ animationDelay: '200ms' }}
          >
            Hi, I'm Pardeep, a passionate MERN Stack Developer , Completed BCA from Maharaja Ranjit Singh Punjab Technical University. From Fazilka, Punjab, I turn ideas into powerful web applications.
          </p>

          {/* Feature grid - Skills by Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2 pt-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group space-y-2 border border-white/10 transition-all duration-500 bg-gradient-to-r from-white/5 to-transparent cursor-pointer animate-slide-up"
                style={{
                  padding: "12px 16px",
                  borderRadius: "12px",
                  animationDelay: skill.delay,
                  transform: hoveredCard === index ? 'translateY(-2px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center transition-all duration-300 group-hover:bg-purple-500/30 group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white transition-colors duration-300 group-hover:text-purple-400">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed transition-colors duration-300 group-hover:text-gray-400">
                  {skill.tech}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        {/* RIGHT IMAGE SECTION */}
        <div
          className="flex-1 relative w-full max-w-md sm:max-w-lg lg:max-w-xl min-h-[350px] sm:h-[400px] lg:h-[450px] mt-3 sm:mt-8 lg:mt-0 animate-fade-in"
          style={{ animationDelay: "400ms", zIndex: 20 }}
        >
          {/* Profile Image Container */}
          <div className="relative w-full h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm overflow-hidden transition-all duration-700 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20">
            <img
              src={"/profile.png"}
              alt="Pardeep - MERN Stack Developer"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{
                objectPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Floating stat cards */}
          <div
            className="absolute flex flex-col gap-1 top-4 right-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-2xl max-w-[160px] transition-all duration-500 bg-gradient-to-r from-white/5 to-transparent hover:from-purple-600/30 hover:to-purple-600/10 hover:border-purple-500/40 cursor-pointer hover:scale-105 animate-float"
            style={{ animationDelay: "600ms" }}
          >
            <div className="text-lg lg:text-xl font-bold text-white">BCA Graduate</div>
          </div>

          <div
            className="absolute flex flex-col gap-0 bottom-4 left-4 bg-black/60 backdrop-blur-xl border border-white/10 rounded-xl p-3 shadow-2xl max-w-[160px] transition-all duration-500 bg-gradient-to-r from-white/5 to-transparent hover:from-purple-600/30 hover:to-purple-600/10 hover:border-purple-500/40 cursor-pointer hover:scale-105 animate-float"
            style={{ animationDelay: "700ms" }}
          >
            <div className="text-lg lg:text-xl font-bold text-white">Punjab</div>
            <div className="text-xs lg:text-sm text-gray-400">Fazilka District</div>
          </div>

          <div
            className="absolute flex flex-col gap-1 top-1/2 -translate-y-1/2 right-2 bg-gradient-to-br from-purple-500/20 to-transparent backdrop-blur-xl border border-purple-500/20 rounded-xl p-3 shadow-2xl max-w-[180px] transition-all duration-500 hover:from-purple-600/30 hover:to-purple-600/10 hover:border-purple-500/40 cursor-pointer hover:scale-105 animate-float"
            style={{ animationDelay: "800ms" }}
          >
            <div className="flex items-center gap-0 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs lg:text-sm text-gray-300 font-medium">AVAILABLE</span>
            </div>
            <div className="text-xs lg:text-sm text-gray-300">
              Open to opportunities
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
