import React from 'react';
import { Globe, Award, BarChart3 } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const LanguagesSection = () => {
  const revealRef = useScrollReveal();

  const languages = [
    {
      name: "English",
      level: "Professional Working Proficiency",
      ielts: {
        overall: 7.5,
        reading: 9.0,
        listening: 8.0,
        writing: 6.5,
        speaking: 6.5
      }
    }
  ];

  return (
    <div className="relative" ref={revealRef}>
      <div className="flex items-center gap-4 mb-12 reveal">
        <div className="p-2.5 bg-teal-500/10 rounded-xl">
          <Globe className="w-6 h-6 text-teal-400" />
        </div>
        <h2 className="section-heading">Languages & Tests</h2>
      </div>

      {languages.map((lang, index) => (
        <div key={index} className="group glass-card p-8 rounded-2xl reveal reveal-delay-1">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-100 group-hover:text-teal-400 transition-colors duration-300">
                {lang.name}
              </h3>
              <p className="text-slate-400 mt-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-400/60" />
                {lang.level}
              </p>
            </div>
          </div>

          {lang.ielts && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-teal-400" />
                <span className="text-slate-300 font-semibold">IELTS Test Results</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-slate-900/40 border border-slate-700/30 p-4 rounded-xl">
                  <div className="text-sm text-slate-400 mb-2">Overall Band</div>
                  <div className="text-3xl font-bold text-teal-400">{lang.ielts.overall}</div>
                </div>
                <div className="bg-slate-900/40 border border-slate-700/30 p-4 rounded-xl">
                  <div className="text-sm text-slate-400 mb-2">Reading</div>
                  <div className="text-3xl font-bold text-teal-400">{lang.ielts.reading}</div>
                </div>
                <div className="bg-slate-900/40 border border-slate-700/30 p-4 rounded-xl">
                  <div className="text-sm text-slate-400 mb-2">Listening</div>
                  <div className="text-3xl font-bold text-teal-400">{lang.ielts.listening}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900/40 border border-slate-700/30 p-4 rounded-xl">
                  <div className="text-sm text-slate-400 mb-2">Writing</div>
                  <div className="text-3xl font-bold text-teal-400">{lang.ielts.writing}</div>
                </div>
                <div className="bg-slate-900/40 border border-slate-700/30 p-4 rounded-xl">
                  <div className="text-sm text-slate-400 mb-2">Speaking</div>
                  <div className="text-3xl font-bold text-teal-400">{lang.ielts.speaking}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LanguagesSection;
