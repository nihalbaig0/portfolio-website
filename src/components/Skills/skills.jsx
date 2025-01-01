import React from 'react';
import { 
  Code, 
  Layers, 
  Brain, 
  Cloud, 
  Database, 
  Terminal,
  Cpu
} from 'lucide-react';

// Individual skill category card component
const SkillCard = ({ category }) => {
  const { title, icon: Icon, skills, description } = category;
  
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-all duration-300">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{description}</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative px-3 py-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-700/70 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <div className="relative flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-400" />
                <span className="text-sm text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Skills section component
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      description: "Core languages for development",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "Go", "Rust", "SQL"]
    },
    {
      title: "Web Technologies",
      icon: Layers,
      description: "Frontend & backend frameworks",
      skills: ["React", "Next.js", "Node.js", "Express", "Django", "FastAPI", "GraphQL", "REST"]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      description: "AI & ML technologies",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "OpenCV", "JAX", "Pandas", "NumPy"]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      description: "Infrastructure & deployment",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux", "Git"]
    },
    {
      title: "Databases",
      icon: Database,
      description: "Data storage solutions",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "MySQL", "DynamoDB", "Neo4j", "Cassandra"]
    },
    {
      title: "Tools & Others",
      icon: Terminal,
      description: "Development tools & utilities",
      skills: ["VS Code", "Git", "Postman", "Jupyter", "Docker", "Jenkins", "Jira", "Figma"]
    }
  ];

  return (
    <section className="relative py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-blue-500/10 rounded-xl">
            <Cpu className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Skills & Technologies
          </h2>
        </div>
        
        <p className="text-gray-400 mb-12 ml-12">Technologies and tools I've worked with</p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;