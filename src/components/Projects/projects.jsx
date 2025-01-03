import React, { useState } from 'react';
import { Github, ExternalLink, Terminal, Brain, Globe, Rocket, Youtube } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Pointer Visualizer",
    description: "A merge of Online Judge and Algorithm Visualizer to help beginners learn algorithms interactively.",
    image: "/api/placeholder/600/400",
    category: "web",
    technologies: ["React", "JavaScript", "Data Structures"],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    id: 2,
    title: "Hotel Booking App",
    description: "Web application for hotel room bookings with user accounts and admin management features.",
    image: "/api/placeholder/600/400",
    category: "web",
    technologies: ["PostgreSQL", "React", "Node.js"],
    links: {
      github: "#"
    }
  },
  {
    id: 3,
    title: "Dynamic LFR Simulator",
    description: "Desktop application for simulating Line Follower Robot with custom track drawing capabilities.",
    image: "/api/placeholder/600/400",
    category: "robotics",
    technologies: ["Python", "OpenCV", "Robotics"],
    links: {
      github: "#"
    }
  },
  {
    id: 4,
    title: "Marine Debris Detector",
    description: "Deep Learning web app for detecting marine debris with customizable YOLO-R parameters and statistics dashboard.",
    image: "/api/placeholder/600/400",
    category: "ml",
    technologies: ["PyTorch", "YOLO-R", "Computer Vision"],
    links: {
      github: "#"
    }
  },
  {
    id: 5,
    title: "Tello Drone",
    description: "Autonomous face-detecting drone that follows people using computer vision.",
    image: "/api/placeholder/600/400",
    category: "robotics",
    technologies: ["OpenCV", "Python", "Drone Control"],
    links: {
      github: "#"
    }
  },
  {
    id: 6,
    title: "Bangla Document Layout Segmentation",
    description: "LayoutLM-based approach for segmenting layouts in Bengali documents.",
    image: "/api/placeholder/600/400",
    category: "ml",
    technologies: ["LayoutLM", "PyTorch", "NLP"],
    links: {
      github: "#"
    }
  },
  {
    id: 7,
    title: "KrishiBot",
    description: "Autonomous farming robot using Lidar for navigation and fruit harvesting in Gazebo simulation.",
    image: "/api/placeholder/600/400",
    category: "robotics",
    technologies: ["ROS", "Gazebo", "MoveIt"],
    links: {
      github: "#"
    }
  },
  {
    id: 8,
    title: "Smile Door",
    description: "Interactive door system using Raspberry Pi for smile detection and Arduino for control.",
    image: "/api/placeholder/600/400",
    category: "robotics",
    technologies: ["Raspberry Pi", "Arduino", "OpenCV"],
    links: {
      github: "#"
    }
  },
  {
    id: 9,
    title: "AutoMama",
    description: "First Bangladeshi autonomous vehicle with perception and control systems.",
    image: "/api/placeholder/600/400",
    category: "robotics",
    technologies: ["OpenCV", "Arduino", "Control Systems"],
    links: {
      github: "#"
    }
  },
  {
    id: 10,
    title: "Alpaca Bangla Dataset Finetune",
    description: "Translated and cleaned Alpaca dataset for Bangla language model training using Unsloth.",
    image: "/api/placeholder/600/400",
    category: "ml",
    technologies: ["Argilla", "Unsloth", "NLP"],
    links: {
      github: "#",
      youtube: "#"
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
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(
    project => activeCategory === "all" || project.category === activeCategory
  );

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Featured Projects
        </h2>

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map(project => (
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
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                  {project.links.youtube && (
                    <a
                      href={project.links.youtube}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors duration-300"
                    >
                      <Youtube size={16} />
                      <span>Video</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 4 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-300"
            >
              {showAll ? "Show Less" : "See More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilteredProjects;