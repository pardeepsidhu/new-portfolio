"use client";
import { ContactSection } from "@/components/contact";
import { EducationSection } from "@/components/education";
import ExperienceSection from "@/components/experince";
import { AboutMeSection } from "@/components/first";
import { ProjectsSection } from "@/components/projects";
import SplashCursor from "@/components/SplashCursor";
import React, { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState("about");
  const [showDropdown, setShowDropdown] = useState(false);

  const tabs = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start bg-black text-white overflow-x-hidden overflow-y-auto">
      {/* Backgrounds */}
      <SplashCursor />
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

      {/* Tabs */}
      <div className="fixed top-3 z-50 flex justify-center w-full px-3">
        {/* Mobile Dropdown */}
        <div className="relative w-full sm:hidden z-50">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full bg-black/70 border border-white/20 backdrop-blur-xl text-white font-semibold py-2 px-4 rounded-sm text-sm flex justify-between items-center shadow-lg transition hover:bg-white/10"
          >
            {tabs.find((t) => t.id === activeTab)?.label}
            <span
              className={`ml-2 text-xs transform transition-transform duration-300 ${
                showDropdown ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>

          <div
            className={`fixed left-0 mx-3 right-0 mt-2 bg-black/90 border border-white/20 rounded-sm shadow-xl overflow-hidden backdrop-blur-md transition-all duration-300 ease-out ${
              showDropdown
                ? "opacity-100 translate-y-0 visible"
                : "opacity-0 -translate-y-3 invisible"
            }`}
          >
            {tabs.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => {
                  setActiveTab(id);
                  setShowDropdown(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm font-medium transition ${
                  activeTab === id
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:bg-purple-500/20 hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 bg-black/60 backdrop-blur-xl p-2 sm:p-3 rounded-sm border border-white/20 mx-2">
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-sm font-semibold transition duration-300 cursor-pointer ${
                activeTab === id
                  ? "bg-purple-600 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-purple-500/20"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="h-8 sm:h-16" />
      {/* Tab Content */}
      <div className="w-full mt-6 sm:mt-8 md:mt-4 px-3 sm:px-6 z-20 text-white font-semibold text-sm sm:text-base md:text-lg select-none">
        {activeTab === "about" && <AboutMeSection />}
        {activeTab === "experience" && <ExperienceSection />}
        {activeTab === "contact" && <ContactSection />}
        {activeTab === "education" && <EducationSection />}
        {activeTab === "projects" && <ProjectsSection/>}
      </div>

      {/* Animation Styles */}
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
          0%,
          100% {
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
