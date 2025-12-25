import { ExternalLink } from "lucide-react";
import React, { useState } from "react";

// Professional Projects Section
export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      name: "Yudo Examen",
      tagline: "AI Powered Online Exam Platform",
      link:`https://yudo-examen.vercel.app`,
      description: "Comprehensive online examination platform with AI-powered test generation, multi-format question support, and intelligent content discovery.",
      highlights: [
        "AI-powered automatic question generation with descriptions & solutions",
        "Multi-format support: Text, Images, YouTube videos, Short videos & Code",
        "Auto-detect and suggest multiple images per question",
        "Code execution support for 7+ languages (JS, TS, Python, Java, C++, Rust, Swift)",
        "Two databases supported (PostgreSQL , MongoDB)",
        "Thumbnail, tags, category management with credits system",
        "Professional responsive UI with Ace Code Editor",
        "OAuth authentication with NodeMailer integration"
      ],
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Ace Code Editor"],
      backend: ["Nest.js", "TypeScript", "PostgreSQL", "Prisma"],
      services: ["OAuth", "NodeMailer", "JWT", "Gemini AI", "YouTube API", "Google Custom Search", "Code Runner API"],
      icon: <img width={30} src="/examen.webp" />
    },
    {
      name: "Yudo Scheduler",
      link:`https://yudo-scheduler.vercel.app`,
      tagline: "Professional Task & Time Management Solution",
      description: "Streamline your workflow with comprehensive task management, time tracking, automated timesheets, analytics, and smart notifications.",
      highlights: [
        "Advanced task management with priority levels & categorization",
        "Real-time time tracking with productivity analytics",
        "Automated timesheet generation and reporting",
        "Interactive analytics dashboard powered by Plotly.js",
        "Smart notifications via Telegram Bot & Email",
        "Email login with quick link authentication",
        "Professional dashboard with insights & metrics",
        "Workflow optimization and reminder system"
      ],
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Plotly.js"],
      backend: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      services: ["JWT", "Telegram Bot API", "NodeMailer", "Node Scheduler"],
      icon: <img width={30} src="/scheduler.png" />
    }
  ];

  const current = projects[activeProject];

  return (
    <section className="w-full h-full relative overflow-hidden flex items-center">
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

      <div className="relative z-10 container mx-auto px-2 sm:px-6 md:px-8 lg:px-12 h-full flex flex-col justify-center pt-3 sm:pt-6 pb-6 gap-4 sm:gap-6">

        {/* Header with Project Selector */}
        <div className="flex flex-row items-end justify-between gap-3 sm:gap-4 animate-fade-in">
          <div>
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-2 sm:mb-3">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs text-gray-300 font-medium tracking-wide">
                Featured Work
              </span>
            </div> */}

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              My{' '}
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>

          {/* Project Tabs */}
          <div className="flex gap-2">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`
                  flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300
                  ${activeProject === index
                    ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/30'
                    : 'text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:border-purple-500/40'
                  }
                `}
              >
                <span className="text-base sm:text-lg">{project.icon}</span>
                <span className="hidden sm:inline">{project.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Project Content */}
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-4 sm:gap-6 animate-slide-up">

          {/* LEFT - Project Details */}
          <div className="space-y-3 sm:space-y-4">
            <div>
              <div className="flex items-center gap-3 mb-2 sm:mb-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-xl sm:text-2xl border border-purple-500/30">
                  {current.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                    {current.name}
                    <a
                      href={current.link} // 🔗 replace with your real link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      <ExternalLink className="text-purple-400" />

                    </a>
                  </h3>

                  <p className="text-xs sm:text-sm text-purple-400 font-medium">
                    {current.tagline}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                {current.description}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-2">
              <h4 className="text-sm sm:text-base font-semibold text-white mb-3">Key Highlights</h4>
              <div className="grid gap-2">
                {current.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="group flex items-start gap-2 p-2 sm:p-3 rounded-lg border border-white/10 bg-gradient-to-r from-white/5 to-transparent hover:from-purple-600/20 hover:to-purple-600/5 hover:border-purple-500/40 transition-all duration-300"
                  >
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-purple-500/30 transition-colors duration-300">
                      <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-xs text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT - Tech Stack */}
          <div className="space-y-3 sm:space-y-4">

            {/* Frontend Technologies */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-white">Frontend Stack</h4>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {current.frontend.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-2.5 py-1 text-[9px] sm:text-[10px] rounded-md bg-white/5 text-gray-300 border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-white">Backend Stack</h4>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {current.backend.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-2.5 py-1 text-[9px] sm:text-[10px] rounded-md bg-white/5 text-gray-300 border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Services & APIs */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-white">Services & APIs</h4>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {current.services.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-2.5 py-1 text-[9px] sm:text-[10px] rounded-md bg-white/5 text-gray-300 border border-white/10 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
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

// export default ProjectsSection;