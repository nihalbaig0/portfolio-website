import React from 'react';
import Image from 'next/image';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Download
} from 'lucide-react';

// StatBox and SocialLink components remain the same
const StatBox = ({ value, label }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50">
    <div className="text-xl font-bold text-blue-400 mb-1">{value}</div>
    <div className="text-xs text-gray-400">{label}</div>
  </div>
);

const SocialLink = ({ href, icon: Icon }) => (
  <a 
    href={href} 
    className="p-2 bg-gray-800/50 rounded-lg hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all duration-300"
  >
    <Icon className="w-4 h-4" />
  </a>
);

const Hero = () => {
  const stats = [
    { value: "2", label: "Years Research Assistant" },
    { value: "2", label: "Publications" },
    { value: "1", label: "Year Professional Experience" }
  ];

  const socialLinks = [
    { href: "https://github.com/nihalbaig0", icon: Github },
    { href: "https://www.linkedin.com/in/mirza-nihal-baig-0361971a0/", icon: Linkedin },
    { href: "mailto:nihalmd1@gmail.com", icon: Mail }
  ];

  return (
    <header className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Effects remain the same */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Profile Info remains the same */}
          <div className="space-y-6">
            {/* Previous content remains unchanged */}
            <div className="space-y-3">
              <h4 className="text-blue-400 font-medium">Hi there, I'm</h4>
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Miza Nihal Baig
              </h1>
              <p className="text-lg text-gray-400">
                Machine Learning Engineer
              </p>
              <p className="text-lg text-gray-400">
                Computer Science and Engineering Graduate Student
              </p>
            </div>

            {/* Rest of the left column content remains the same */}
            {/* ... */}

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, index) => (
                <StatBox key={index} {...stat} />
              ))}
            </div>
          </div>

          {/* Right Column - Optimized Profile Image */}
          <div className="relative flex justify-center items-center h-full">
            <div className="relative group w-[32rem]">
              {/* Animated background pattern remains the same */}
              <div className="absolute inset-0 -m-8 bg-gray-900 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.02] animate-[pulse_4s_ease-in-out_infinite]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900 to-gray-900" />
              </div>
              
              {/* Gradient border effect remains the same */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative rounded-2xl overflow-hidden">
                <Image 
                  src="/portfolio_optimized.jpg"  // Move image to public folder
                  alt="Mirza Nihal Baig - Profile Picture"
                  width={1024}  // Original image width
                  height={1024} // Original image height
                  priority={true} // Load immediately as it's above the fold
                  quality={85}   // Slightly higher quality for profile photo
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Add your base64 blur image
                  className="relative w-full h-auto transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;