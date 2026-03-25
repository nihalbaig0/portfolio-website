import React from 'react';
import { Users, Briefcase, BookOpen, Trophy } from 'lucide-react';

const leadershipData = [
  {
    id: 1,
    title: "Microsoft Learn Student Ambassador",
    organization: "Microsoft",
    period: "2022 - 2023",
    icon: Users,
    description: "Conducted workshops on Azure IoT, GitHub Codespaces, and Computer Vision; co-organized Open Source Summit Bangladesh: SUST.",
    achievements: [
      "Conducted hands-on Azure IoT & Computer Vision workshops",
      "Led GitHub Codespaces training sessions",
      "Co-organized Open Source Summit Bangladesh: SUST"
    ]
  },
  {
    id: 2,
    title: "Section Leader",
    organization: "Stanford University - Code in Place",
    period: "2022",
    icon: BookOpen,
    description: "Mentored students in Stanford's global intro-to-coding course.",
    achievements: [
      "Provided one-on-one coding support",
      "Mentored students through weekly course sessions"
    ]
  },
  {
    id: 3,
    title: "Director of Robotics",
    organization: "RoboSUST",
    period: "2023 - 2024",
    icon: Trophy,
    description: "Led technical teams on robotics projects, developed workshop curricula, and organized competitions.",
    achievements: [
      "Led technical teams on robotics projects",
      "Developed workshop curricula for students",
      "Organized robotics competitions"
    ]
  }
];

const LeadershipCard = ({ leadership }) => {
  const { title, organization, period, description, achievements, icon: Icon } = leadership;
  
  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-gray-400 mt-1">
            <Briefcase className="w-4 h-4" />
            <span>{organization}</span>
            <span>•</span>
            <span>{period}</span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="space-y-2">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start gap-2 text-gray-400">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
            <span>{achievement}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const LeadershipSection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-2 bg-blue-500/10 rounded-xl">
            <Users className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Leadership & Activities
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {leadershipData.map((leadership) => (
            <LeadershipCard key={leadership.id} leadership={leadership} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
