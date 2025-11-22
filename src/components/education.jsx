import React, { useState } from "react";

// Professional Education Section
export function EducationSection() {
  const [expandedSem, setExpandedSem] = useState(null);

  const semesters = [
    {
      sem: "Semester 1",
      cgpa: "6.3",
      subjects: [
        { code: "BCAP1101", name: "Problem Solving using C", type: "Theory", im: 34, em: 31, grade: "B" },
        { code: "BCAP1102", name: "Information Technology & Office Automation", type: "Theory", im: 35, em: 24, grade: "C" },
        { code: "BCAP1103", name: "Digital Electronics", type: "Theory", im: 35, em: 29, grade: "B" },
        { code: "BCAP1104", name: "Software Lab I (Problem Solving using C)", type: "Practical", im: 52, em: 34, grade: "A" },
        { code: "BCAP1105", name: "Software Lab II (IT & Office Automation)", type: "Practical", im: 54, em: 33, grade: "A" },
        { code: "BHUM0101", name: "Communicative English", type: "Theory", im: 33, em: 15, grade: "D" },
        { code: "BHUM0103", name: "Human Values & Professional Ethics", type: "Theory", im: 33, em: 21, grade: "C" }
      ]
    },
    {
      sem: "Semester 2",
      cgpa: "6.5",
      subjects: [
        { code: "BCAP1206", name: "Object Oriented Programming Using C++", type: "Theory", im: 34, em: 42, grade: "B+" },
        { code: "BCAP1207", name: "Computer Organization & Architecture", type: "Theory", im: 33, em: 27, grade: "C" },
        { code: "BCAP1208", name: "Internet & its Applications", type: "Theory", im: 37, em: 25, grade: "B" },
        { code: "BCAP1209", name: "Multimedia and its Applications", type: "Theory", im: 37, em: 19, grade: "C" },
        { code: "BCAP1210", name: "Software Lab-III (OOP Using C++)", type: "Practical", im: 54, em: 35, grade: "A" },
        { code: "BCAP1211", name: "Software Lab-IV (Internet & Its Applications)", type: "Practical", im: 56, em: 37, grade: "A+" },
        { code: "BMAT0204", name: "Fundamentals of Mathematics", type: "Theory", im: 37, em: 25, grade: "B" }
      ]
    },
    {
      sem: "Semester 3",
      cgpa: "7.0",
      subjects: [
        { code: "BCAP1312", name: "Data Structures", type: "Theory", im: 37, em: 37, grade: "B+" },
        { code: "BCAP1313", name: "Programming in Java", type: "Theory", im: 36, em: 37, grade: "B+" },
        { code: "BCAP1314", name: "Discrete Structures", type: "Theory", im: 37, em: 16, grade: "C" },
        { code: "BCAP1315", name: "Software Lab-V (Data Structures)", type: "Practical", im: 58, em: 38, grade: "A+" },
        { code: "BCAP1316", name: "Software Lab-VI (Programming in Java)", type: "Practical", im: 55, em: 38, grade: "A+" },
        { code: "BHUM0106", name: "Technical English", type: "Theory", im: 38, em: 26, grade: "B" },
        { code: "BCAP1356", name: "Introduction to Microprocessors", type: "Theory", im: 38, em: 20, grade: "C" }
      ]
    },
    {
      sem: "Semester 4",
      cgpa: "7.2",
      subjects: [
        { code: "BCAP1417", name: "Operating System", type: "Theory", im: 36, em: 33, grade: "B" },
        { code: "BCAP1418", name: "Android Application Development", type: "Theory", im: 35, em: 21, grade: "C" },
        { code: "BCAP1419", name: "Database Management System", type: "Theory", im: 35, em: 31, grade: "B" },
        { code: "BCAP1420", name: "Software Lab-VII (Android Development)", type: "Practical", im: 55, em: 35, grade: "A" },
        { code: "BCAP1421", name: "Software Lab-VIII (DBMS)", type: "Practical", im: 55, em: 35, grade: "A" },
        { code: "BCAP1458", name: "Software Engineering", type: "Theory", im: 36, em: 28, grade: "B" },
        { code: "BCIE0F91", name: "Environmental Technology & Safety", type: "Theory", im: 35, em: 25, grade: "C" },
        { code: "BMNCC0052", name: "The Maharaja of People", type: "Theory", im: 94, em: "-", grade: "A+" }
      ]
    },
    {
      sem: "Semester 5",
      cgpa: "6.8",
      subjects: [
        { code: "BCAP1522", name: "Linux Administration", type: "Theory", im: 34, em: 28, grade: "B" },
        { code: "BCAP1523", name: "Programming in ASP.Net", type: "Theory", im: 34, em: 31, grade: "B" },
        { code: "BCAP1524", name: "Computer Networks", type: "Theory", im: 35, em: 26, grade: "B" },
        { code: "BCAP1525", name: "Software Lab-IX (Linux Administration)", type: "Practical", im: 54, em: 32, grade: "A" },
        { code: "BCAP1526", name: "Software Lab-X (ASP.Net)", type: "Practical", im: 55, em: 33, grade: "A" },
        { code: "BCAP1561", name: "Artificial Intelligence", type: "Theory", im: 35, em: 30, grade: "B" },
        { code: "BCSE0F94", name: "Operating Systems", type: "Theory", im: 35, em: 20, grade: "C" }
      ]
    },
    {
      sem: "Semester 6",
      cgpa: "7.5",
      subjects: [
        { code: "BCSE0F97", name: "Internet Web Development", type: "Theory", im: 36, em: 43, grade: "B+" },
        { code: "BCAP1627", name: "Computer Graphics", type: "Theory", im: 34, em: 37, grade: "B+" },
        { code: "BCAP1628", name: "Emerging Trends in IT", type: "Theory", im: 35, em: 24, grade: "C" },
        { code: "BCAP1629", name: "Major Project", type: "Practical", im: 57, em: 38, grade: "A+" },
        { code: "BCAP1630", name: "Software Lab-XI (Computer Graphics)", type: "Practical", im: 54, em: 37, grade: "A+" },
        { code: "BESE0101", name: "Environmental Studies", type: "Theory", im: 35, em: 45, grade: "B+" },
        { code: "BCAP1662", name: "Big Data", type: "Theory", im: 34, em: 33, grade: "B" }
      ]
    }
  ];

  const getGradeColor = (grade) => {
    if (grade.includes('A')) return 'text-green-400';
    if (grade.includes('B')) return 'text-blue-400';
    if (grade.includes('C')) return 'text-yellow-400';
    return 'text-orange-400';
  };

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

      <div className="relative z-10 container mx-auto px-2 sm:px-6 md:px-8 lg:px-8 h-full overflow-y-auto py-3 sm:py-6 custom-scrollbar">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-4 sm:mb-6 animate-fade-in">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-2 sm:mb-3">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs text-gray-300 font-medium tracking-wide">
                Academic Journey
              </span>
            </div> */}
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              Education{' '}
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Background
              </span>
            </h2>
          </div>

          {/* Education Card */}
          <div className="border border-white/10 rounded-2xl p-4 sm:p-6 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm mb-4 animate-slide-up">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-purple-500/20 flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0">
                🎓
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-xs sm:text-sm text-purple-400 font-medium mb-1">
                  Abhishek Group of Institution
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  Maharaja Ranjit Singh Punjab Technical University, Bathinda
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                <p className="text-[10px] text-gray-500 mb-0.5">Duration</p>
                <p className="text-xs sm:text-sm font-semibold text-white">2022 - 2025</p>
              </div>
              <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                <p className="text-[10px] text-gray-500 mb-0.5">CGPA</p>
                <p className="text-xs sm:text-sm font-semibold text-purple-400">6.8 / 10.0</p>
              </div>
              <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                <p className="text-[10px] text-gray-500 mb-0.5">Type</p>
                <p className="text-xs sm:text-sm font-semibold text-white">Regular</p>
              </div>
              <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                <p className="text-[10px] text-gray-500 mb-0.5">Status</p>
                <p className="text-xs sm:text-sm font-semibold text-green-400">No Backlogs</p>
              </div>
            </div>
          </div>

          {/* Semesters Accordion */}
          <div className="space-y-2 sm:space-y-3">
            {semesters.map((semester, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-xl bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-purple-500/40 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => setExpandedSem(expandedSem === index ? null : index)}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm sm:text-base flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-white">{semester.sem}</h4>
                      <p className="text-[10px] sm:text-xs text-gray-400">CGPA: <span className="text-purple-400 font-medium">{semester.cgpa}</span></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-xs text-gray-500">{semester.subjects.length} Subjects</span>
                    <svg
                      className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${
                        expandedSem === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {expandedSem === index && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                    <div className="overflow-x-auto">
                      <table className="w-full text-[10px] sm:text-xs">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="text-left py-2 text-gray-400 font-medium">Code</th>
                            <th className="text-left py-2 text-gray-400 font-medium">Subject</th>
                            <th className="text-center py-2 text-gray-400 font-medium hidden sm:table-cell">Type</th>
                            <th className="text-center py-2 text-gray-400 font-medium">IM</th>
                            <th className="text-center py-2 text-gray-400 font-medium">EM</th>
                            <th className="text-center py-2 text-gray-400 font-medium">Grade</th>
                          </tr>
                        </thead>
                        <tbody>
                          {semester.subjects.map((subject, idx) => (
                            <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200">
                              <td className="py-2 text-gray-400">{subject.code}</td>
                              <td className="py-2 text-white">{subject.name}</td>
                              <td className="py-2 text-center text-gray-400 hidden sm:table-cell">{subject.type}</td>
                              <td className="py-2 text-center text-gray-300">{subject.im}</td>
                              <td className="py-2 text-center text-gray-300">{subject.em}</td>
                              <td className={`py-2 text-center font-semibold ${getGradeColor(subject.grade)}`}>
                                {subject.grade}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-4 px-4 py-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <p className="text-[10px] sm:text-xs text-gray-400">
              <span className="font-semibold text-purple-400">Note:</span> IM = Internal Marks, EM = External Marks. Result is provisional and subject to official verification.
            </p>
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

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
        }
      `}</style>
    </section>
  );
}

