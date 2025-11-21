import React, { useState } from "react";

// Professional Contact Section
export function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "sidhupardeep618@yahoo.com",
      link: "mailto:sidhupardeep618@yahoo.com",
      delay: "0ms"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+91 8284012817",
      link: "tel:+918284012817",
      delay: "100ms"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "Abohar, Punjab, India",
      link: null,
      delay: "200ms"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      title: "Education",
      value: "BCA (2022 - 2025)",
      link: null,
      delay: "300ms"
    }
  ];

  const socialLinks = [
  {
    name: "LinkedIn",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    url: "https://www.linkedin.com/in/pardeep-singh-85848a2b1",
    color: "hover:text-blue-400"
  },
  {
    name: "GitHub",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    url: "http://github.com/pardeepsidhu",
    color: "hover:text-purple-400"
  },
  {
    name: "Resume",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.104.896 2 2 2h12a2 2 0 0 0 2-2V8l-6-6zm1 7H8V7h7v2zm-7 2h10v2H8v-2zm0 4h10v2H8v-2z"/>
      </svg>
    ),
    url: "/Pardeep_Singh_Resume.pdf", // Replace with actual file path or hosted resume URL
    color: "hover:text-green-400"
  }
];


  return (
    <section className="w-full min-h-[75vh] relative overflow-hidden flex items-center">
      <div aria-hidden className="absolute inset-0 bg-black" />

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

      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-10 py-4">
        <div className="w-full grid lg:grid-cols-2 gap-4 lg:gap-6">
          
          {/* LEFT - Contact Info */}
          <div className="space-y-3 sm:space-y-4 animate-fade-in">
            <div>
             
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1.5">
                Contact{' '}
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
              <p className="text-[11px] sm:text-xs text-gray-400 mb-3">
                Let's discuss your project and bring your ideas to life
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-2">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group border border-white/10 rounded-lg p-2.5 bg-gradient-to-r from-white/5 to-transparent hover:from-purple-600/20 hover:to-purple-600/5 hover:border-purple-500/40 transition-all duration-300 cursor-pointer animate-slide-up"
                  style={{ animationDelay: info.delay }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => info.link && window.open(info.link, '_blank')}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/30 group-hover:scale-105 transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] text-gray-500">{info.title}</p>
                      <p className="text-[11px] sm:text-xs md:text-sm text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-1">
              {/* <p className="text-[10px] text-gray-400 mb-2">Connect with me</p> */}
              <div className="flex gap-2.5">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT - Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="border border-white/10 rounded-xl p-3 sm:p-4 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3">Send Message</h3>
              
              <div className="space-y-2.5">
                <div>
                  <label className="block text-[10px] text-gray-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="Pardeep Singh"
                    className="w-full px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-white text-[11px] placeholder-gray-500 focus:border-purple-500/40 focus:outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-gray-400 mb-1">Your Email</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-white text-[11px] placeholder-gray-500 focus:border-purple-500/40 focus:outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-gray-400 mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Discussion"
                    className="w-full px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-white text-[11px] placeholder-gray-500 focus:border-purple-500/40 focus:outline-none"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-gray-400 mb-1">Message</label>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows="3"
                    className="w-full px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-white text-[11px] placeholder-gray-500 focus:border-purple-500/40 focus:outline-none resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-[11px] font-semibold rounded-md hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-md shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105"
                >
                  Send Message
                </button>
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
