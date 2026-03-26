import React from 'react';
import {
  Code,
  Layers,
  Brain,
  Cloud,
  Terminal,
  Cpu
} from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const SkillCard = ({ category }) => {
  const { title, icon: Icon, skills, description } = category;

  return (
    <div className="group glass-card p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-teal-500/10 rounded-xl group-hover:bg-teal-500/15 transition-all duration-300">
          <Icon className="w-6 h-6 text-teal-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-100 group-hover:text-teal-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-slate-400 mt-1">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-3 py-2 bg-slate-700/30 rounded-lg transition-all duration-300
                       hover:bg-teal-500/10 group-hover:border-slate-600/50"
          >
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-teal-400" />
              <span className="text-sm text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                {skill}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const revealRef = useScrollReveal();

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      description: "Core languages for development",
      skills: ["Python", "C++", "C", "JavaScript", "SQL"]
    },
    {
      title: "ML/AI Frameworks",
      icon: Brain,
      description: "Machine learning technologies",
      skills: ["PyTorch", "TensorFlow", "YOLOv8", "OpenCV", "Transformers", "LlamaIndex", "Qdrant"]
    },
    {
      title: "MLOps & Tools",
      icon: Cloud,
      description: "ML operations and infrastructure",
      skills: ["DVC", "MLflow", "Apache Airflow", "Weights & Biases (WandB)", "AWS SageMaker", "Docker", "Kubernetes", "Git", "Streamlit", "Gradio"]
    },
    {
      title: "Robotics",
      icon: Layers,
      description: "Robotics and autonomous systems",
      skills: ["ROS2", "ROS", "Arduino", "Control Systems", "Kinematics"]
    },
    {
      title: "DevOps",
      icon: Terminal,
      description: "Infrastructure and monitoring",
      skills: ["Prometheus", "Grafana", "Pulumi", "Terraform", "OpenTelemetry"]
    }
  ];

  return (
    <div className="relative" ref={revealRef}>
      <div className="flex items-center gap-4 mb-4 reveal">
        <div className="p-2.5 bg-teal-500/10 rounded-xl">
          <Cpu className="w-6 h-6 text-teal-400" />
        </div>
        <h2 className="section-heading">Skills & Technologies</h2>
      </div>

      <p className="text-slate-400 mb-12 ml-14 reveal reveal-delay-1">Technologies and tools I've worked with</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal reveal-delay-2">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
