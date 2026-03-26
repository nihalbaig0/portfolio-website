import React from 'react';
import {
  Brain,
  Code,
  Rocket,
  Users,
  School,
  Building2,
  Briefcase,
  Calendar,
} from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const professionalExperience = [
  {
    title: "Chief Technical Officer",
    company: "SigmoiX AI (Remote, United States)",
    period: "Aug 2025 - Present",
    description: "Leading production ML and LLM systems, RAG pipelines, real-time AI, and scalable cloud and self-hosted deployments.",
    technologies: ["LLMs", "RAG", "Production ML", "Cloud Deployments", "Self-hosted"],
    icon: Briefcase
  },
  {
    title: "MLOps Engineer",
    company: "Magicmind AI (Remote, United States)",
    period: "May 2025 - Dec 2025",
    description: "Building a microservice-based agentic product infrastructure using NATS and Redis Streams for distributed communication and real-time data flow. Developing CI/CD pipelines for scalable deployment and continuous monitoring of AI agents.",
    technologies: ["NATS", "Redis Streams", "CI/CD", "Microservices", "Docker", "Kubernetes"],
    icon: Brain
  },
  {
    title: "Machine Learning Engineer & Researcher",
    company: "Intelsense AI (Dhaka, Bangladesh)",
    period: "Sep 2024 - Sep 2025",
    description: "Designing and deploying production-ready AI models, developing scalable MLOps and data pipelines for Large Language Models (LLMs).",
    technologies: ["LLMs", "MLOps", "Data Pipelines", "Production ML", "Python"],
    icon: Code
  },
  {
    title: "Deep Learning Engineer",
    company: "Re:cruit (Sylhet, Bangladesh)",
    period: "Mar 2024 - Jun 2024",
    description: "Developed and deployed real-time object detection models optimized for edge devices, improving performance and accuracy.",
    technologies: ["YOLOv8", "PyTorch", "Edge Deployment", "OpenCV"],
    icon: Code
  },
  {
    title: "University Research Assistant",
    company: "SUST (Sylhet, Bangladesh)",
    period: "Jun 2022 - Oct 2024",
    description: "Conducted research in Object Detection, Instance Segmentation, and Speech-to-Speech Translation. Mentored students and contributed to the SUST CSE Archive of Research (SCAR).",
    technologies: ["Computer Vision", "ASR", "OCR", "Python", "PyTorch"],
    icon: School
  },
  {
    title: "Robotics Engineer",
    company: "Boltu Robotics (Seattle, United States)",
    period: "Apr 2021 - Jun 2021",
    description: "Developed object detection models for autonomous vehicles and implemented automated training pipelines using AWS SageMaker.",
    technologies: ["Python", "AWS SageMaker", "PyTorch", "Jetson Xavier"],
    icon: Rocket
  }
];

const voluntaryExperience = [
  {
    title: "Microsoft Learn Student Ambassador",
    organization: "Microsoft",
    period: "2022 - 2023",
    icon: Users,
    description: "Conducted workshops on Azure IoT, GitHub Codespaces, and Computer Vision; co-organized Open Source Summit Bangladesh: SUST.",
    achievements: [
      "Led hands-on Azure IoT & Computer Vision workshops",
      "Organized GitHub Codespaces learning sessions",
      "Co-organized Open Source Summit Bangladesh: SUST"
    ]
  },
  {
    title: "Section Leader",
    organization: "Stanford University (Code in Place)",
    period: "2022",
    icon: School,
    description: "Mentored students in Stanford's global intro-to-coding course.",
    achievements: [
      "Provided one-on-one coding support",
      "Guided students through weekly assignments"
    ]
  },
  {
    title: "Director of Robotics",
    organization: "RoboSUST",
    period: "2023 - 2024",
    icon: Rocket,
    description: "Led technical teams on robotics projects, developed workshop curricula, and organized competitions.",
    achievements: [
      "Led technical teams on robotics projects",
      "Developed workshop curricula and training materials",
      "Organized robotics competitions"
    ]
  }
];

const ExperienceCard = ({ experience, index }) => {
  const { title, company, period, description, technologies, icon: Icon } = experience;

  return (
    <div className={`group relative reveal reveal-delay-${Math.min(index + 1, 4)}`}>
      <div className="absolute left-8 top-8 -bottom-8 w-px bg-gradient-to-b from-teal-500/40 via-teal-500/10 to-transparent last:hidden" />

      <div className="relative ml-16 transition-all duration-300">
        <div className="absolute -left-20 top-4 bg-slate-950 rounded-full p-2 border-2 border-teal-500/50 group-hover:border-teal-400 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6 text-teal-400" />
        </div>

        <div className="glass-card p-6">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-slate-100 group-hover:text-teal-400 transition-colors duration-300">
                {title}
              </h3>
              <div className="flex items-center gap-2 text-slate-400">
                <Building2 className="w-4 h-4" />
                <span>{company}</span>
              </div>
            </div>
            <span className="accent-chip flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {period}
            </span>
          </div>

          <p className="text-slate-300 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-slate-700/40 text-slate-300 rounded-lg text-sm
                           hover:bg-teal-500/10 hover:text-teal-400 transition-all duration-300
                           flex items-center gap-1"
              >
                <Code className="w-3 h-3" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const VolunteerCard = ({ experience }) => {
  const { title, organization, period, description, achievements, icon: Icon } = experience;

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
          <div className="flex items-center gap-2 text-slate-400 mt-1">
            <Building2 className="w-4 h-4" />
            <span>{organization}</span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {period}
            </span>
          </div>
        </div>
      </div>

      <p className="text-slate-300 mb-4">{description}</p>

      <div className="space-y-2">
        {achievements.map((achievement, index) => (
          <div key={index} className="flex items-center gap-2 text-slate-400">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />
            <span>{achievement}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const revealRef = useScrollReveal();

  return (
    <div className="relative" ref={revealRef}>
      {/* Professional Experience */}
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-12 reveal">
          <div className="p-2.5 bg-teal-500/10 rounded-xl">
            <Briefcase className="w-6 h-6 text-teal-400" />
          </div>
          <h2 className="section-heading">Professional Experience</h2>
        </div>

        <div className="space-y-12">
          {professionalExperience.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>

      {/* Volunteer Experience */}
      <div>
        <div className="flex items-center gap-4 mb-12 reveal">
          <div className="p-2.5 bg-teal-500/10 rounded-xl">
            <Users className="w-6 h-6 text-teal-400" />
          </div>
          <h2 className="section-heading">Volunteer Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal reveal-delay-1">
          {voluntaryExperience.map((experience, index) => (
            <VolunteerCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
