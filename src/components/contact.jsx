import React, { useState } from "react";
import toast from "react-hot-toast";

export function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // ====== Handle Form Submit ======
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields!");
      return;
    }

    const mailBody = {
      from: formData.email,
      to: "sidhupardeep618@yahoo.com",
      subject: `New Contact Message: ${formData.subject || "No Subject"}`,
      text: `
        From: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>📩 New Contact Message</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Subject:</strong> ${formData.subject || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p style="background:#f9f9f9; padding:10px; border-radius:5px;">${formData.message}</p>
        </div>
      `,
    };

    await toast.promise(
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/sendmail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mailBody),
      }).then(async (res) => {
        const data = await res.json();
        if (!data.success) throw new Error("Failed to send message");
        return data;
      }),
      {
        loading: "Sending message...",
        success: "Message sent successfully!",
        error: "Failed to send message. Try again later.",
      },
      {
        style: {
          background: "#1e1e2f",
          color: "#fff",
          border: "1px solid rgba(168,85,247,0.4)",
          fontSize: "13px",
          borderRadius: "8px",
        },
        success: {
          iconTheme: { primary: "#A855F7", secondary: "#fff" },
        },
      }
    );

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  // ====== Contact Info and Social Links ======
  const contactInfo = [
    {
      title: "Email",
      value: "sidhupardeep618@yahoo.com",
      link: "mailto:sidhupardeep618@yahoo.com",
      delay: "0ms",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Phone",
      value: "+91 8284012817",
      link: "tel:+918284012817",
      delay: "100ms",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0120 16v3a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      title: "Location",
      value: "Abohar, Punjab, India",
      link: null,
      delay: "200ms",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
          <circle cx="12" cy="11" r="3" stroke="currentColor" strokeWidth={2} />
        </svg>
      ),
    },
    {
      title: "Education",
      value: "BCA (2022 - 2025)",
      link: null,
      delay: "300ms",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pardeep-singh-85848a2b1",
      color: "hover:text-blue-400",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.76C14.4 7.17 20 6.98 20 11.23V19z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "http://github.com/pardeepsidhu",
      color: "hover:text-purple-400",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .3C5.4.3 0 5.8 0 12.5c0 5.4 3.4 10 8.2 11.6.6.1.8-.3.8-.6v-2.2C5.7 22 5 19.7 5 19.7c-.5-1.4-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.1 2.8 1.5.1-.8.4-1.4.8-1.8-2.7-.3-5.6-1.3-5.6-5.9 0-1.3.5-2.4 1.3-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a12 12 0 016 0c2.3-1.6 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.6 8.2-6.2 8.2-11.6C24 5.8 18.6.3 12 .3z" />
        </svg>
      ),
    },
    {
      name: "Resume",
      url:`${process.env.NEXT_PUBLIC_RESUME_URL}` ,
      color: "hover:text-green-400",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM8 4h5v4h5v12H8z" />
        </svg>
      ),
    },
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

      <div className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-10 py-6">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT BOX */}
          <div className="space-y-3 border border-white/10 p-5 rounded-xl sm:space-y-4 animate-fade-in">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  Contact{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                    Me
                  </span>
                </h2>
                <div className="flex gap-2.5">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
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
              <p className="text-xs text-gray-400 mb-3">
                Let’s discuss your project and bring your ideas to life
              </p>
            </div>

            <div className="space-y-2">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="group border border-white/10 rounded-lg p-2.5 bg-gradient-to-r from-white/5 to-transparent hover:from-purple-600/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer animate-slide-up"
                  style={{ animationDelay: info.delay }}
                  onClick={() => info.link && window.open(info.link, "_blank")}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-md bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/30 transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500">{info.title}</p>
                      <p className="text-sm text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT BOX */}
          <div className="border border-white/10 rounded-xl p-5 sm:p-6 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm animate-fade-in">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4">
              Send Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Pardeep Singh"
                className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white text-[11px] placeholder-gray-500 focus:border-purple-500/40 focus:outline-none"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white text-[11px] placeholder-gray-500 focus:border-purple-500/40 focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Project Discussion"
                className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white text-[11px] placeholder-gray-500 focus:border-purple-500/40 focus:outline-none"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
              <textarea
                placeholder="Tell me about your project..."
                rows="4"
                className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white text-[11px] placeholder-gray-500 focus:border-purple-500/40 focus:outline-none resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-[11px] font-semibold rounded-md hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-md shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105"
              >
                Send Message
              </button>
            </form>
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
