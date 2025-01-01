import React from 'react';
import { Trophy, Medal, Star, Sparkles, ExternalLink } from 'lucide-react';

const achievementData = [
  {
    id: 1,
    title: "Best Paper Award",
    event: "International Conference on Machine Learning (ICML) 2023",
    description: "Received the Best Paper Award for groundbreaking research in self-supervised learning techniques.",
    impact: "Research cited by 200+ papers within 6 months",
    icon: Trophy,
    link: "#",
    category: "research"
  },
  {
    id: 2,
    title: "Research Grant Recipient",
    event: "National Science Foundation",
    description: "Awarded $500,000 research grant for innovative work in computer vision applications.",
    impact: "Funding secured for 2-year research project",
    icon: Medal,
    category: "grant",
    link: "#"
  },
  {
    id: 3,
    title: "Academic Excellence",
    event: "Department of Computer Science",
    description: "Maintained 4.0 GPA throughout graduate studies while publishing 5 peer-reviewed papers.",
    impact: "Top 1% of graduating class",
    icon: Star,
    category: "academic",
    link: "#"
  },
  {
    id: 4,
    title: "Hackathon Winner",
    event: "Global AI Challenge 2023",
    description: "Led team to first place with an innovative AI-powered healthcare solution.",
    impact: "Selected from 500+ international teams",
    icon: Sparkles,
    category: "competition",
    link: "#"
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