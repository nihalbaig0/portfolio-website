import React from 'react';
import { Users, Briefcase, BookOpen, Trophy } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

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
    <div className="group glass-card p-6">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/15 transition-colors duration-300">
            <Icon className="w-6 h-6 text-teal-400" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-100 group-hover:text-teal-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-slate-400 mt-1">
            <Briefcase className="w-4 h-4" />
            <span>{organization}</span>
            <span className="text-slate-600">|</span>
            <span>{period}</span>
          </div>
        </div>
      </div>

      <p className="text-slate-300 mb-4">{description}</p>

      <div className="space-y-2">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-start gap-2 text-slate-400">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
            <span>{achievement}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const LeadershipSection = () => {
  const revealRef = useScrollReveal();

  return (
    <div className="relative" ref={revealRef}>
      <div className="flex items-center gap-4 mb-12 reveal">
        <div className="p-2.5 bg-teal-500/10 rounded-xl">
          <Users className="w-6 h-6 text-teal-400" />
        </div>
        <h2 className="section-heading">Leadership & Activities</h2>
      </div>

      <div className="grid grid-cols-1 gap-6 reveal reveal-delay-1">
        {leadershipData.map((leadership) => (
          <LeadershipCard key={leadership.id} leadership={leadership} />
        ))}
      </div>
    </div>
  );
};

export default LeadershipSection;
