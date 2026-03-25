import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationSection = () => {
  const education = {
    school: "Shahjalal University of Science and Technology",
    degree: "B.Sc. in Computer Science and Engineering",
    location: "Sylhet, Bangladesh",
    period: "Jan 2019 - June 2024",
    gpa: "3.37/4.00",
    thesis: "BDRS: Bangladeshi Road Segmentation Dataset",
  };

  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-2 bg-blue-500/10 rounded-xl">
            <GraduationCap className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Education
          </h2>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-100">
                {education.degree}
              </h3>
              <p className="text-gray-300">
                <span className="text-gray-100 font-medium">{education.school}</span> &mdash; {education.location}
              </p>
            </div>

            <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-xl text-sm inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {education.period}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900/30 border border-gray-700/50 rounded-xl p-4">
              <div className="text-sm text-gray-400 mb-2">GPA</div>
              <div className="text-lg font-semibold text-gray-100">{education.gpa}</div>
            </div>

            <div className="bg-gray-900/30 border border-gray-700/50 rounded-xl p-4">
              <div className="text-sm text-gray-400 mb-2">Thesis</div>
              <div className="text-gray-100">{education.thesis}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

