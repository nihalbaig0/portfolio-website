// Since there's a syntax error in the React component rendering, let's show it as a code snippet first
// Once we confirm the syntax is correct, we can switch back to application/vnd.ant.react

import React from 'react';
import FilteredProjects from './components/Projects/projects';
import Skills from './components/Skills/skills';
import ExperienceSection from './components/Experience/experience';
import WorkshopsAndTalks from './components/Workshops/workshop';
import NotableAchievements from './components/Achievements/achievements';
import Publications from './components/Publications/publications';
import Certifications from './components/Certification/certification';
import BlogPosts from './components/Blog/blog';
import Hero from './components/Hero/hero';
import Featured from './components/Featured/featured';
import Contact from './components/Contact/contact';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Rocket,
  Code,
  Monitor,
  Settings,
  Cpu,
  Calendar,
  Clock,
  Users,
  Database,
  Cloud,
  BookOpen,
  Microscope,
  GraduationCap,
  Brain,
  Target,
  Award,
  Check,
  Trophy,
  Medal,
  Star,
  Sparkles,
  FileText,
  Download,
  ArrowRight,
  Heart,
  School,
  Send,
  MessageSquare,
  Building2,
  Briefcase,
  Layers,
  Terminal,
  Server,
  Box,
   CalendarDays,
   Globe
} from 'lucide-react';



const Portfolio = () => {



  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-100">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      
      <Hero />
  
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        
       
      <BlogPosts />

        
        {/* Experience Section */}  
        <ExperienceSection />

          
          <Skills />


          {/* Projects Section */}
        <FilteredProjects />
        
        <WorkshopsAndTalks />

        <NotableAchievements />

        <Publications />

        <Certifications />
  
        <Featured />

        <Contact />


     
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-center text-gray-500">
            © 2024 John Doe. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;