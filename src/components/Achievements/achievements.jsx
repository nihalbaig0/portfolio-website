import React from 'react';
import { Trophy, Medal, Star, Sparkles, ExternalLink, Anchor, Car } from 'lucide-react';

const achievementData = [
  {
    id: 1,
    title: "Prefinalist | Singapore AUV Challenge",
    event: "Singapore AUV Challenge 2024",
    description: "Advanced to the prefinal stage with the Orca AUV featuring vision-based navigation and control systems.",
    impact: "",
    icon: Trophy,
    link: "https://sauvc.org/",
    category: "competition"
  },
  {
    id: 2,
    title: "Finalist | Hult Prize Campus Round",
    event: "Hult Prize 2024",
    description: "As part of Team Nebula Pulse, developed an IoT-based Pill Dispenser (MedPunctual) using Azure Computer Vision for pill detection and timely medication delivery.",
    impact: "",
    icon: Medal,
    category: "competition",
    link: "https://www.facebook.com/share/p/UwZaBEXCNwRDLWG3/"
  },
  {
    id: 3,
    title: "Honourable Mention (Top 8) | AI for Bangla 2.0",
    event: "AI for Bangla 2.0",
    description: "As part of Team SIGN_SUST, developed a complete pipeline for detecting Bengali Sign Language, encompassing the entire workflow from data annotation to deployment.",
    impact: "",
    icon: Star,
    category: "academic",
    link: "https://drive.google.com/file/d/1Ygq_FRvmM-p80Pwry2p7xh5TmvmEmOuc/view"
  },
  {
    id: 4,
    title: "4th Position | DLSprint 2.0",
    event: "BUET CSE Fest 2023",
    description: "Achieved 4th position in the Deep Learning Sprint competition focused on Bengali Document Layout Analysis.",
    impact: "",
    icon: Medal,
    category: "competition",
    link: "https://www.kaggle.com/competitions/dlsprint2/discussion/433389"
  },
  {
    id: 5,
    title: "Best Paper Award",
    event: "6th International Conference on Electrical Information and Communication Technology (EICT) 2023",
    description: "Received the Best Paper Award for 'A SAR-Based Approach to Recognize Text in Syloti Nagri', addressing complex character shapes and enabling digitization of historical texts.",
    impact: "",
    icon: Trophy,
    category: "research",
    link: "https://www.researchgate.net/publication/378193712_A_SAR-Based_Approach_to_Recognize_Text_in_Syloti_Nagri"
  }
];

const AchievementCard = ({ achievement }) => {
  const { title, event, description, impact, icon: Icon, link } = achievement;
  
  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-blue-400 text-sm mt-1">{event}</p>
          <p className="text-gray-300 mt-3">{description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-gray-400 bg-blue-500/10 px-3 py-1 rounded-full">
              {impact}
            </span>
            <a 
              href={link}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
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
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full" />
        <div className="absolute right-0 top-0 bg-purple-500/5 blur-[100px] rounded-full h-[300px] w-[300px]" />
      </div>
      
      <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Notable Achievements
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {achievementData.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </section>
  );
};

export default NotableAchievements;