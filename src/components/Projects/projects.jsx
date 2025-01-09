import React, { useState } from 'react';
import { Github, ExternalLink, Terminal, Brain, Globe, Rocket, Youtube } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Pointer Visualizer",
    description: "A merge of Online Judge and Algorithm Visualizer to help beginners learn algorithms interactively.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuB-H4Y-v8eh_eXjSUt6NJOzkHeqMP85A63g&s",
    category: "web",
    technologies: [],
    links: {
      github: "https://github.com/nihalbaig0/Pointer-Visualization/tree/master",
      //demo: "#"
    }
  },
  {
    id: 2,
    title: "Hotel Booking App",
    description: "Web application for hotel room bookings with user accounts and admin management features.",
    image: "https://github.com/nihalbaig0/Hotel-Booking-Frontend/raw/main/images/signin.png",
    category: "web",
    technologies: ["PostgreSQL", "React", "Node.js"],
    links: {
      github: "https://github.com/nihalbaig0/Hotel-Booking-Frontend"
    }
  },
  {
    id: 3,
    title: "Dynamic LFR Simulator",
    description: "Desktop application for simulating Line Follower Robot with custom track drawing capabilities.",
    image: "https://i.ytimg.com/vi/k8Gxd0i_qPE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBM4fWfGnXHFsdttecQQWHcURrZ9g",
    category: "robotics",
    technologies: ["JavaFX", "CSS", "Robotics"],
    links: {
      github: "https://github.com/nihalbaig0/Dynamic-LFR-Software/tree/master"
    }
  },
  {
    id: 4,
    title: "Marine Debris Detector",
    description: "Deep Learning web app for detecting marine debris with customizable YOLO-R parameters and statistics dashboard.",
    image: "https://github.com/nihalbaig0/Marine-Debris-Tracker/raw/main/main_dashboard.JPG",
    category: "ml",
    technologies: ["PyTorch", "YOLO-R", "Computer Vision"],
    links: {
      github: "https://github.com/nihalbaig0/Marine-Debris-Tracker"
    }
  },
  {
    id: 5,
    title: "Tello Drone",
    description: "Autonomous face-detecting drone that follows people using computer vision.",
    image: "data:image/jpeg;base64,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",
    category: "robotics",
    technologies: ["OpenCV", "Python", "Drone Control"],
    links: {
      demo: "https://youtu.be/n29c2C3CbgY"
    }
  },
  {
    id: 6,
    title: "Bangla Document Layout Segmentation",
    description: "LayoutLM-based approach for segmenting layouts in Bengali documents.",
    image: "https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F10747121%2F54232aef9b0ceab41a33f8113cd0600e%2F__results___71_0.png?generation=1687185171344197&alt=media",
    category: "ml",
    technologies: ["LayoutLM", "PyTorch", "NLP"],
    links: {
      github: "https://github.com/nihalbaig0/Badlad/tree/main"
    }
  },
  {
    id: 7,
    title: "KrishiBot",
    description: "Autonomous farming robot using Lidar for navigation and fruit harvesting in Gazebo simulation.",
    image: "https://github.com/nihalbaig0/KB_task_2b/raw/main/eyantra.PNG",
    category: "robotics",
    technologies: ["ROS", "Gazebo", "MoveIt"],
    links: {
      github: "https://github.com/nihalbaig0/KB_task_2b/tree/main"
    }
  },
  {
    id: 8,
    title: "Smile Door",
    description: "Interactive door system using Raspberry Pi for smile detection and Arduino for control.",
    image: "https://github.com/nihalbaig0/Smile-Door/raw/main/smiledoor.png",
    category: "robotics",
    technologies: ["Raspberry Pi", "Arduino", "OpenCV"],
    links: {
      github: "https://github.com/nihalbaig0/Smile-Door",
      demo: "https://youtu.be/4RrMKNeumP0"
    }
  },
  {
    id: 9,
    title: "AutoMama",
    description: "First Bangladeshi autonomous vehicle with perception and control systems.",
    image: "https://images.prothomalo.com/prothomalo-bangla%2F2024-10-27%2F2lw95umg%2FIMG20241018154228977.jpg?rect=87%2C0%2C810%2C540&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0",
    category: "robotics",
    technologies: ["OpenCV", "Arduino", "Control Systems"],
    links: {
      demo: "https://www.youtube.com/watch?v=2jCTuZDS7PI&t=3s"
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