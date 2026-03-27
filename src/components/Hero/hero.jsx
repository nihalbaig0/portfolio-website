import React, { useEffect, useRef } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
} from 'lucide-react';

const StatBox = ({ value, label }) => (
  <div className="glass-card p-4 rounded-xl text-center">
    <div className="text-2xl font-bold text-teal-400 mb-1">{value}</div>
    <div className="text-xs text-slate-400">{label}</div>
  </div>
);

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    className="p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-400
               hover:text-teal-400 hover:border-teal-500/30 hover:bg-teal-500/5
               transition-all duration-300"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <Icon className="w-4 h-4" />
  </a>
);

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) el.classList.add('animate-fade-in');
  }, []);

  const stats = [
    { value: "2", label: "Years Research Assistant" },
    { value: "4", label: "Publications" },
    { value: "2", label: "Years Experience" },
  ];

  const socialLinks = [
    { href: "https://github.com/nihalbaig0", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/mirza-nihal-baig-0361971a0/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:nihalmd1@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <header id="hero" ref={sectionRef} className="relative overflow-hidden min-h-screen flex items-center pt-20 opacity-0">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-500/5 via-cyan-500/3 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500/8 rounded-full blur-[100px] animate-glow-pulse [animation-delay:2s]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-teal-400 font-medium tracking-wide text-sm uppercase">Hi there, I'm</p>
              <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-300 leading-tight">
                Mirza Nihal Baig
              </h1>
              <p className="text-xl text-slate-300 font-medium">
                Chief Technology Officer
              </p>
              <p className="text-lg text-slate-400">
                AI / MLOps &amp; Production ML Systems
              </p>
            </div>

            <p className="text-slate-400 text-base leading-relaxed max-w-lg">
              Passionate about artificial intelligence and its applications in solving real-world problems.
              Currently working on AI, Robotics, MLOPS and Cloud.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="accent-button"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/12qeI5TcsObYMJ2QecXTgGBGqwQsOTE1k/view?usp=sharing"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                           bg-slate-800/80 text-slate-300 border border-slate-700/50
                           hover:border-teal-500/30 hover:text-teal-400
                           transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} {...link} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              {stats.map((stat, index) => (
                <StatBox key={index} {...stat} />
              ))}
            </div>
          </div>

          {/* Right column - Profile image */}
          <div className="relative flex justify-center items-center h-full">
            <div className="relative group w-[28rem]">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-700" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 group-hover:border-teal-500/30 transition-all duration-500">
                <img
                  src="/headshot.png"
                  alt="Mirza Nihal Baig - Profile Picture"
                  className="relative w-full h-auto transition duration-500 group-hover:scale-[1.02]"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
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
