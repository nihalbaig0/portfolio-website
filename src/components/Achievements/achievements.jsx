import React from 'react';
import { Trophy, Medal, Star, ExternalLink } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const achievementData = [
  {
    id: 1,
    title: "Prefinalist | Singapore AUV Challenge",
    event: "Singapore AUV Challenge 2024",
    description: "Advanced to the prefinal stage with the Orca AUV featuring vision-based navigation and control systems.",
    impact: "Prefinal Stage",
    icon: Trophy,
    link: "https://sauvc.org/",
    category: "competition"
  },
  {
    id: 2,
    title: "Finalist | Hult Prize Campus Round",
    event: "Feb 2024",
    description: "Developed an IoT-based pill dispenser using Azure Computer Vision as part of Team Nebula Pulse.",
    impact: "Finalist",
    icon: Medal,
    category: "competition",
    link: "https://www.facebook.com/share/p/UwZaBEXCNwRDLWG3/"
  },
  {
    id: 3,
    title: "Honourable Mention (Top 8) | AI for Bangla 2.0",
    event: "AI for Bangla 2.0",
    description: "As part of Team SIGN_SUST, developed a complete pipeline for detecting Bengali Sign Language, encompassing the entire workflow from data annotation to deployment.",
    impact: "Top 8",
    icon: Star,
    category: "academic",
    link: "https://drive.google.com/file/d/1Ygq_FRvmM-p80Pwry2p7xh5TmvmEmOuc/view"
  },
  {
    id: 4,
    title: "4th Position | DLSprint 2.0",
    event: "2023",
    description: "DLSprint 2.0 is a Deep Learning competition focused on Bengali Document Layout Analysis. Secured 4th position.",
    impact: "Top 4",
    icon: Medal,
    category: "competition",
    link: "https://www.kaggle.com/competitions/dlsprint2/discussion/433389"
  },
  {
    id: 5,
    title: "Best Paper Award",
    event: "Dec 2023 | EICT 2023",
    description: "Received the Best Paper Award for 'A SAR-Based Approach to Recognize Text in Syloti Nagri', addressing complex character shapes and enabling digitization of historical texts.",
    impact: "Best Paper",
    icon: Trophy,
    category: "research",
    link: "https://www.researchgate.net/publication/378193712_A_SAR-Based_Approach_to_Recognize_Text_in_Syloti_Nagri"
  }
];

const AchievementCard = ({ achievement }) => {
  const { title, event, description, impact, icon: Icon, link } = achievement;

  return (
    <div className="group glass-card p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/15 transition-colors duration-300">
            <Icon className="w-6 h-6 text-teal-400" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-slate-100 group-hover:text-teal-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-teal-400/80 text-sm mt-1">{event}</p>
          <p className="text-slate-300 mt-3">{description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-slate-400 bg-teal-500/10 px-3 py-1 rounded-full">
              {impact}
            </span>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors duration-300 text-sm"
            >
              Learn more
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const NotableAchievements = () => {
  const revealRef = useScrollReveal();

  return (
    <div className="relative" ref={revealRef}>
      <h2 className="section-heading mb-12 reveal">
        Notable Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal reveal-delay-1">
        {achievementData.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
};

export default NotableAchievements;
