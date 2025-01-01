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

// Data
const professionalExperience = [
  {
    title: "Machine Learning Engineer & Researcher",
    company: "Intelsense AI",
    period: "2024 - Present",
    description: "Working on Deploying ASR, LLM and Computer Vision Models.",
    technologies: ["LLM", "Speech", "Computer Vision"],
    icon: Brain
  },
  {
    title: "Deep Learning Engineer",
    company: "Re:cruit",
    period: "2024",
    description: "Developed and deployed object detection model for real-time data processing pipeline on edge devices.",
    technologies: ["Tensorflow", "Tflite", "Flutter", "Docker"],
    icon: Code
  },
  {
    title: "Robotics Engineer",
    company: "Boltu Robotics",
    period: "2021",
    description: "Developed object detection models for autonomous vehicles, focusing on real-time accuracy and performance. Built and optimized an automated model training pipeline using AWS SageMaker, streamlining the process of training, evaluating, and deploying models at scale.",
    technologies: ["Python", "AWS Sagemaker", "Jetson Xavier", "Pytorch"],
    icon: Rocket
  },
  {
    title: "Research Assistant",
    company: "Shahjalal University of Science and Technology",
    period: "2020 - 2021",
    description: "Worked as a Research Assistant with Professor Mohammad Shahidur Rahman at Shahjalal University of Science and Technology, focusing on research in Object Detection, Instance Segmentation, and Speech-to-Speech translation.",
    technologies: ["Computer Vision", "ASR", "OCR", "LLM"],
    icon: School
  }
];

const voluntaryExperience = [
  {
    title: "Microsoft Learn Student Ambassador",
    organization: "Microsoft",
    period: "2023 - Present",
    icon: Users,
    description: "Empowering students with technology skills through workshops and events. Organized 10+ technical workshops reaching 500+ students.",
    achievements: [
      "Gold status achievement for community impact",
      "Led Azure cloud computing workshops",
      "Mentored 20+ student developers"
    ]
  },
  {
    title: "Director of Robotics",
    organization: "University Robotics Club",
    period: "2022 - 2023",
    icon: Rocket,
    description: "Led a team of 30 students in robotics projects and competitions. Managed budget and coordinated with faculty advisors.",
    achievements: [
      "Won first place in national robotics competition",
      "Secured $10,000 in sponsorships",
      "Organized 2 successful robotics hackathons"
    ]
  },
  {
    title: "Section Leader",
    organization: "Stanford University",
    period: "2022 - 2023",
    icon: School,
    description: "Teaching assistant for CS106A Programming Methodology. Conducted weekly sessions and provided one-on-one mentoring.",
    achievements: [
      "Mentored 50+ students per quarter",
      "Achieved 4.8/5.0 student satisfaction rating",
      "Developed supplementary learning materials"
    ]
  }
];

// Individual Experience Card Component
const ExperienceCard = ({ experience }) => {
  const { title, company, period, description, technologies, icon: Icon } = experience;
  
  return (
    <div className="group relative">
      {/* Connector Line */}
      <div className="absolute left-8 top-8 -bottom-8 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent last:hidden" />
      
      {/* Card */}
      <div className="relative ml-16 transition-all duration-300">
        {/* Timeline Icon */}
        <div className="absolute -left-20 top-4 bg-gray-900 rounded-full p-2 border-2 border-blue-500 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
                {title}
              </h3>
              <div className="flex items-center gap-2 text-gray-400">
                <Building2 className="w-4 h-4" />
                <span>{company}</span>
              </div>
            </div>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {period}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-300 mb-4">{description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-lg text-sm hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 flex items-center gap-1"
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

// Volunteer Experience Card Component
const VolunteerCard = ({ experience }) => {
  const { title, organization, period, description, achievements, icon: Icon } = experience;
  
  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-all duration-300">
          <Icon className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex items-center gap-2 text-gray-400 mt-1">
            <Building2 className="w-4 h-4" />
            <span>{organization}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {period}
            </span>
          </div>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="space-y-2">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex items-center gap-2 text-gray-400"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>{achievement}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Experience Section Component
const ExperienceSection = () => {
  return (
    <section className="relative py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Professional Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-2 bg-blue-500/10 rounded-xl">
              <Briefcase className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-12">
            {professionalExperience.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </div>
        </div>

        {/* Volunteer Experience */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-2 bg-blue-500/10 rounded-xl">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Volunteer Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {voluntaryExperience.map((experience, index) => (
              <VolunteerCard key={index} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;