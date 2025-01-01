import React, { useState } from 'react';
import { Github, ExternalLink, Terminal, Brain, Globe, Rocket } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Neural Style Transfer",
    description: "Deep learning model for artistic style transfer using PyTorch and advanced CNN architectures.",
    image: "/api/placeholder/600/400",
    category: "ml",
    technologies: ["PyTorch", "CNN", "Python", "CUDA"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    id: 2,
    title: "Autonomous Drone Navigation",
    description: "ROS-based autonomous navigation system for drones using computer vision and sensor fusion.",
    image: "/api/placeholder/600/400",
    category: "robotics",
    technologies: ["ROS", "Python", "OpenCV", "SLAM"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    id: 3,
    title: "AI-Powered Portfolio",
    description: "Modern web application built with Next.js and TailwindCSS, featuring AI-powered content generation.",
    image: "/api/placeholder/600/400",
    category: "web",
    technologies: ["Next.js", "React", "TailwindCSS", "OpenAI"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    id: 4,
    title: "Real-time Object Detection",
    description: "Edge-optimized computer vision system for real-time object detection on embedded devices.",
    image: "/api/placeholder/600/400",
    category: "ml",
    technologies: ["TensorFlow Lite", "Python", "Raspberry Pi"],
    links: {
      github: "#",
      demo: "#"
    }
  }
];

const categories = [
  { id: "all", label: "All Projects", icon: Terminal },
  { id: "web", label: "Web Development", icon: Globe },
  { id: "ml", label: "Machine Learning", icon: Brain },
  { id: "robotics", label: "Robotics", icon: Rocket }
];

const FilteredProjects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    project => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section className="relative py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Featured Projects
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800/50 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 z-10" />
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="relative z-20 p-6 -mt-8">
                <h3 className="text-xl font-semibold mb-2 text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.links.github}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.links.demo}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilteredProjects;