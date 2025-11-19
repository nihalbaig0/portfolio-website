import React from 'react';
import { Globe, Award, BarChart3 } from 'lucide-react';

const LanguagesSection = () => {
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
    <section className="relative py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-2 bg-blue-500/10 rounded-xl">
            <Globe className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Languages & Tests
          </h2>
        </div>

        {languages.map((lang, index) => (
          <div key={index} className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
                  {lang.name}
                </h3>
                <p className="text-gray-400 mt-2 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  {lang.level}
                </p>
              </div>
            </div>

            {lang.ielts && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300 font-semibold">IELTS Test Results</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-2">Overall Band</div>
                    <div className="text-3xl font-bold text-blue-400">{lang.ielts.overall}</div>
                  </div>
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-2">Reading</div>
                    <div className="text-3xl font-bold text-blue-400">{lang.ielts.reading}</div>
                  </div>
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-2">Listening</div>
                    <div className="text-3xl font-bold text-blue-400">{lang.ielts.listening}</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-2">Writing</div>
                    <div className="text-3xl font-bold text-blue-400">{lang.ielts.writing}</div>
                  </div>
                  <div className="bg-gray-700/50 p-4 rounded-lg">
                    <div className="text-sm text-gray-400 mb-2">Speaking</div>
                    <div className="text-3xl font-bold text-blue-400">{lang.ielts.speaking}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguagesSection;
