import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Download,
  ExternalLink,
  FileText
} from 'lucide-react';

// Stats Component
const StatBox = ({ value, label }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50">
    <div className="text-xl font-bold text-blue-400 mb-1">{value}</div>
    <div className="text-xs text-gray-400">{label}</div>
  </div>
);

// Social Link Component
const SocialLink = ({ href, icon: Icon }) => (
  <a 
    href={href} 
    className="p-2 bg-gray-800/50 rounded-lg hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all duration-300"
  >
    <Icon className="w-4 h-4" />
  </a>
);

// Achievement Card Component
const AchievementCard = ({ icon: Icon, title, subtitle }) => (
  <div className="bg-gray-800/90 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50">
    <Icon className="w-5 h-5 text-blue-400 mb-1" />
    <p className="text-xs text-gray-300">{title}</p>
    <p className="text-xs text-gray-400">{subtitle}</p>
  </div>
);

const Hero = () => {
  const stats = [
    { value: "3+", label: "Years Research" },
    { value: "15+", label: "Publications" },
    { value: "500+", label: "Citations" }
  ];

  const socialLinks = [
    { href: "#", icon: Github },
    { href: "#", icon: Linkedin },
    { href: "#", icon: Mail }
  ];

  const achievements = [
    { 
      icon: FileText, 
      title: "Latest Publication", 
      subtitle: "ICML 2024" 
    },
    { 
      icon: ExternalLink, 
      title: "Featured Project", 
      subtitle: "Neural Networks" 
    }
  ];

  return (
    <header className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Profile Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-blue-400 font-medium">Hi there, I'm</h4>
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Miza Nihal Baig
              </h1>
              <p className="text-lg text-gray-400">
                Computer Science and Engineering Graduate Student
              </p>
            </div>

            <p className="text-gray-300 text-base leading-relaxed">
              Passionate about artificial intelligence and its applications in solving real-world problems. 
              Currently working on AI, Robotics, MLOPS and Cloud.
            </p>

            <div className="flex flex-wrap gap-3">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a 
                href="#resume" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} {...link} />
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, index) => (
                <StatBox key={index} {...stat} />
              ))}
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative">
            <div className="relative group">
              {/* Background Effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              
              {/* Image Container */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border-2 border-gray-700/50 group-hover:border-blue-500/50 transition duration-300">
                  <img 
                    src="/api/placeholder/400/500"
                    alt="Profile Picture"
                    className="w-full h-[400px] object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Availability Badge */}
                <div className="absolute -bottom-4 -right-4 p-3 bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-gray-300">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievement Cards */}
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`absolute ${index === 0 ? '-right-8 top-1/4 rotate-6' : '-left-8 bottom-1/4 -rotate-6'}`}
              >
                <AchievementCard {...achievement} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;