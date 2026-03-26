import React, { useState } from 'react';
import { Github, ExternalLink, Terminal, Brain, Globe, Rocket, Youtube } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const projects = [
  {
    id: 1,
    title: "RunAgent",
    description: "Agentic ecosystem that allows developers to build Python AI agents with frameworks like LangGraph, CrewAI, Letta, and LlamaIndex, and access them from any language with stateful self-learning capabilities. (300+ GitHub Stars)",
    image: "https://images.unsplash.com/photo-1667372459567-3853510dd5ce?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "ml",
    technologies: ["Python", "LangGraph", "CrewAI", "Letta", "LlamaIndex"],
    links: { github: "https://github.com/runagent-dev/runagent" }
  },
  {
    id: 2,
    title: "Infrastructure Automation Engineer -- K3s on AWS",
    description: "Designed and automated a production-grade Kubernetes (k3s) cluster deployment on AWS using Pulumi (Infrastructure as Code), Ansible (configuration management), and GitHub Actions (CI/CD). Implemented a secure VPC architecture with public/private subnets and a self-hosted runner for automated node provisioning.",
    image: "https://images.unsplash.com/photo-1667372459567-3853510dd5ce?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "ml",
    technologies: ["K3s", "AWS", "Pulumi", "Ansible", "GitHub Actions", "Docker", "VPC"],
    links: { github: "https://github.com/nihalbaig0/Infrastructure-Automation-Engineer-K3s-on-AWS.git" }
  },
  {
    id: 3,
    title: "Weather Data Pipeline",
    description: "Built an end-to-end data pipeline using Apache Airflow, dbt, PostgreSQL, and Apache Superset to ingest live weather data from the Weatherstack API, transform it through staging and mart layers, and visualize trends on interactive dashboards, fully orchestrated via Docker Compose.",
    image: "https://images.unsplash.com/photo-1750163564812-c4b49e2788ec?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "ml",
    technologies: ["Apache Airflow", "dbt", "PostgreSQL", "Apache Superset", "Docker Compose", "Weatherstack API"],
    links: { github: "https://github.com/nihalbaig0/weather-data-pipeline" }
  },
  {
    id: 4,
    title: "Unisense",
    description: "Worked on deploying ASR and TTS models for Unisense (a sales voice agent), as part of Intelsense AI work. Reduced latency 3X by using Traefik as a load balancer and added streaming support. Used a fine-tuned Whisper model for ASR and XTTS as TTS.",
    image: "https://images.unsplash.com/photo-1643652631396-181154ca7d8a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "ml",
    technologies: ["Whisper", "FastAPI", "Traefik", "Redis"],
    links: { github: "" }
  },
  {
    id: 5,
    title: "MedPunctual",
    description: "Smart pillbox and health monitoring system using Azure Computer Vision and Azure IoT, enabling timely medication, vital signs tracking, and remote doctor monitoring.",
    image: "https://images.unsplash.com/photo-1758691462743-f9fc9e430d39?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "ml",
    technologies: ["Python", "Azure Computer Vision", "Azure IoT", "Embedded Systems"],
    links: { github: "https://github.com/nihalbaig0/MED-Punctual" }
  },
  {
    id: 6,
    title: "Orca: Underwater Autonomous Vehicle",
    description: "Built an autonomous underwater vehicle for the SAUVC competition, integrating vision-based navigation and control systems using ROS.",
    image: "https://images.unsplash.com/photo-1742353980377-b8e42932c590?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "robotics",
    technologies: ["Python", "ROS", "OpenCV", "Arduino", "C++"],
    links: { youtube: "https://youtu.be/uTWk7Z62jHs" }
  },
  {
    id: 7,
    title: "Bangla Document Layout Segmentation",
    description: "Developed a LayoutLM-based approach for segmenting layouts from Bengali documents, including text, paragraphs, images, and tables.",
    image: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "ml",
    technologies: ["Python", "PyTorch", "LayoutLM", "OpenCV"],
    links: { github: "https://github.com/nihalbaig0/Badlad" }
  },
  {
    id: 8,
    title: "Marine Debris Detector",
    description: "Deep learning-based web app to detect marine debris from videos and images, allowing customization of YOLO-R model parameters and dashboard statistics.",
    image: "https://images.unsplash.com/photo-1759240168026-70f691bd0707?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "ml",
    technologies: ["Python", "YOLO-R", "Streamlit", "OpenCV"],
    links: { github: "https://github.com/nihalbaig0/Marine-Debris-Tracker" }
  },
  {
    id: 9,
    title: "Hotel Booking Frontend",
    description: "Developed a responsive web frontend for hotel booking, featuring dynamic search, filtering, and booking interfaces for users.",
    image: "https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    links: { github: "https://github.com/nihalbaig0/Hotel-Booking-Frontend" }
  },
  {
    id: 10,
    title: "AutoMama: First Bangladeshi Autonomous Robot",
    description: "First Bangladeshi autonomous vehicle achieving Level 2 autonomy, developed by the SUST Synerbotics team.",
    image: "https://images.unsplash.com/photo-1584847641814-6530edfab791?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "robotics",
    technologies: ["Python", "ROS", "OpenCV", "Arduino", "C++"],
    links: { youtube: "https://www.youtube.com/watch?v=2jCTuZDS7PI" }
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
  const revealRef = useScrollReveal();

  const filteredProjects = projects.filter(
    project => activeCategory === "all" || project.category === activeCategory
  );
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <div className="relative" ref={revealRef}>
      <h2 className="section-heading mb-12 reveal">
        Featured Projects
      </h2>

      <div className="flex flex-wrap gap-3 mb-12 reveal reveal-delay-1">
        {categories.map(category => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                  : "bg-slate-800/60 text-slate-400 border border-slate-700/50 hover:border-teal-500/30 hover:text-teal-400"
              }`}
            >
              <Icon className="w-4 h-4" />
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal reveal-delay-2">
        {visibleProjects.map(project => (
          <div
            key={project.id}
            className="group relative glass-card overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-slate-900 z-10" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="relative z-20 p-6 -mt-8">
              <h3 className="text-xl font-semibold mb-2 text-slate-100 group-hover:text-teal-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="accent-chip text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 transition-colors duration-300 text-sm"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 transition-colors duration-300 text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                )}
                {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 transition-colors duration-300 text-sm"
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
        <div className="flex justify-center mt-12 reveal">
          <button
            onClick={() => setShowAll(!showAll)}
            className="accent-button"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default FilteredProjects;
