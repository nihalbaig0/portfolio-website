import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const EducationSection = () => {
  const revealRef = useScrollReveal();

  const education = {
    school: "Shahjalal University of Science and Technology",
    degree: "B.Sc. in Computer Science and Engineering",
    location: "Sylhet, Bangladesh",
    period: "Jan 2019 - June 2024",
    gpa: "3.37/4.00",
    thesis: "BDRS: Bangladeshi Road Segmentation Dataset",
  };

  return (
    <div className="relative" ref={revealRef}>
      <div className="flex items-center gap-4 mb-10 reveal">
        <div className="p-2.5 bg-teal-500/10 rounded-xl">
          <GraduationCap className="w-6 h-6 text-teal-400" />
        </div>
        <h2 className="section-heading">Education</h2>
      </div>

      <div className="glass-card p-8 rounded-2xl reveal reveal-delay-1">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-slate-100">
              {education.degree}
            </h3>
            <p className="text-slate-300">
              <span className="text-slate-100 font-medium">{education.school}</span> &mdash; {education.location}
            </p>
          </div>

          <span className="accent-chip inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm">
            <Calendar className="w-4 h-4" />
            {education.period}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/40 border border-slate-700/30 rounded-xl p-4">
            <div className="text-sm text-slate-400 mb-2">GPA</div>
            <div className="text-lg font-semibold text-slate-100">{education.gpa}</div>
          </div>
          <div className="bg-slate-900/40 border border-slate-700/30 rounded-xl p-4">
            <div className="text-sm text-slate-400 mb-2">Thesis</div>
            <div className="text-slate-100">{education.thesis}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
