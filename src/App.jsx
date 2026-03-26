import React from 'react';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import EducationSection from './components/Education/education';
import ExperienceSection from './components/Experience/experience';
import Skills from './components/Skills/skills';
import NotableAchievements from './components/Achievements/achievements';
import FilteredProjects from './components/Projects/projects';
import Publications from './components/Publications/publications';
import Certifications from './components/Certification/certification';
import LanguagesSection from './components/Languages/languages';
import LeadershipSection from './components/Leadership/leadership';
import BlogPosts from './components/Blog/blog';
import WorkshopsAndTalks from './components/Workshops/workshop';
import Featured from './components/Featured/featured';
import Contact from './components/Contact/contact';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 noise-overlay">
      <div className="fixed inset-0 bg-dot-grid bg-dot-grid pointer-events-none -z-10" />

      <Navbar />
      <Hero />

      <main className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        <section id="education"><EducationSection /></section>
        <section id="experience"><ExperienceSection /></section>
        <section id="skills"><Skills /></section>
        <section id="achievements"><NotableAchievements /></section>
        <section id="projects"><FilteredProjects /></section>
        <section id="publications"><Publications /></section>
        <section id="certifications"><Certifications /></section>
        <section id="languages"><LanguagesSection /></section>
        <section id="leadership"><LeadershipSection /></section>
        <section id="blog"><BlogPosts /></section>
        <section id="workshops"><WorkshopsAndTalks /></section>
        <section id="featured"><Featured /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="border-t border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <p className="text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Mirza Nihal Baig. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
