// Since there's a syntax error in the React component rendering, let's show it as a code snippet first
// Once we confirm the syntax is correct, we can switch back to application/vnd.ant.react

import React from 'react';
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
   CalendarDays
} from 'lucide-react';

const ArticleCard = ({ article }) => {
  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-32 h-32 overflow-hidden rounded-lg">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-lg">
              {article.outlet}
            </span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              {article.date}
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300 mb-2">
            {article.title}
          </h3>
          
          <p className="text-gray-400 mb-4">{article.excerpt}</p>
          
          <div className="flex items-center gap-6">
            <a 
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Read Article
              <ExternalLink className="w-4 h-4" />
            </a>
            
            <div className="flex items-center gap-4 text-gray-400">
              <span className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                {article.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                {article.comments}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

const ArticlePreviewCard = ({ article, isExpanded, onToggle }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gray-100">
              {article.outlet}
            </h3>
            <p className="text-gray-400">
              {article.title}
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
          </div>
          <button
            onClick={onToggle}
            className="p-2 hover:bg-gray-700/50 rounded-full transition-colors"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
        </div>
        
        <div className={`space-y-4 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <img
            src="/api/placeholder/800/400"
            alt="Article preview"
            className="w-full h-48 object-cover rounded-lg"
          />
          
          <p className="text-gray-300">
            {article.description}
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              Read full article
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


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

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
        <Icon className="text-blue-400" size={24} />
      </div>
      <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-lg text-sm hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Portfolio = () => {


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
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "OpenCV", "NLTK", "Pandas", "NumPy"]
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

  const experiences = [
    {
      title: "Machine Learning Research Assistant",
      company: "XYZ University AI Lab",
      period: "2023 - Present",
      description: "Leading research in computer vision and deep learning. Developed novel architectures for image segmentation achieving 15% improvement in accuracy.",
      technologies: ["PyTorch", "TensorFlow", "Computer Vision"],
      icon: Brain
    },
    {
      title: "Software Engineering Intern",
      company: "Tech Corp",
      period: "Summer 2022",
      description: "Developed and deployed microservices for real-time data processing pipeline. Improved system throughput by 40% through optimization.",
      technologies: ["Python", "Docker", "AWS", "Kubernetes"],
      icon: Code
    },
    {
      title: "Undergraduate Research Assistant",
      company: "ABC University Robotics Lab",
      period: "2021 - 2022",
      description: "Implemented autonomous navigation algorithms for mobile robots. Published research paper at International Robotics Conference.",
      technologies: ["ROS", "C++", "Computer Vision", "Path Planning"],
      icon: Rocket
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
  const aboutDetails = [
    {
      icon: Microscope,
      title: "Research Focus",
      description: "Specializing in computer vision and deep learning architectures for real-world applications"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "M.S. in Computer Science at XYZ University, focusing on Artificial Intelligence"
    },
    {
      icon: Brain,
      title: "Interests",
      description: "Machine learning, robotics, and the intersection of AI with human-computer interaction"
    },
    {
      icon: Target,
      title: "Goals",
      description: "Developing AI solutions that make a meaningful impact on society and advance the field"
    }
  ];

  const articles = [
    {
      outlet: "TechCrunch",
      title: "Rising Star in AI Research: Breakthrough in Computer Vision",
      excerpt: "John Doe's innovative approach to neural networks is revolutionizing how machines interpret visual data...",
      date: "Dec 15, 2023",
      image: "/api/placeholder/400/400",
      url: "#",
      likes: "2.5K",
      comments: "128"
    },
    {
      outlet: "MIT Technology Review",
      title: "Next Generation of AI Researchers to Watch",
      excerpt: "Among the brightest minds shaping the future of artificial intelligence, John Doe stands out for his work on...",
      date: "Nov 28, 2023",
      image: "/api/placeholder/400/400",
      url: "#",
      likes: "1.8K",
      comments: "95"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "December 2023",
      credentialId: "AWS-123456",
      skills: ["Cloud Architecture", "AWS Services", "System Design"],
      badge: "/api/placeholder/80/80"
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "October 2023",
      credentialId: "TF-789012",
      skills: ["Deep Learning", "Neural Networks", "Computer Vision"],
      badge: "/api/placeholder/80/80"
    },
    {
      name: "Microsoft Azure AI Engineer",
      issuer: "Microsoft",
      date: "August 2023",
      credentialId: "AZ-345678",
      skills: ["Azure ML", "Cognitive Services", "AI Solutions"],
      badge: "/api/placeholder/80/80"
    }
  ];

  const blogPosts = [
    {
      title: "Understanding Transformer Architecture",
      date: "March 15, 2024",
      readTime: "8 min read",
      preview: "A deep dive into the architecture that revolutionized natural language processing and its practical applications.",
      tags: ["Machine Learning", "NLP", "Deep Learning"]
    },
    {
      title: "Optimizing Neural Networks",
      date: "February 28, 2024",
      readTime: "6 min read",
      preview: "Practical techniques for improving neural network performance and reducing training time.",
      tags: ["Neural Networks", "Optimization", "PyTorch"]
    },
    {
      title: "Getting Started with MLOps",
      date: "February 10, 2024",
      readTime: "10 min read",
      preview: "A comprehensive guide to implementing MLOps practices in your machine learning projects.",
      tags: ["MLOps", "DevOps", "CI/CD"]
    }
  ];

  const workshops = [
    {
      title: "Introduction to Deep Learning with PyTorch",
      event: "AI Conference 2024",
      date: "April 15, 2024",
      type: "Workshop",
      attendees: "150+",
      description: "A hands-on workshop covering the fundamentals of deep learning using PyTorch, including practical exercises and real-world applications.",
      resources: ["Slides", "Code", "Video"]
    },
    {
      title: "The Future of Computer Vision",
      event: "Tech Summit 2024",
      date: "March 1, 2024",
      type: "Keynote",
      attendees: "300+",
      description: "An exploration of emerging trends in computer vision and their potential impact on various industries.",
      resources: ["Slides", "Video"]
    },
    {
      title: "Building Scalable ML Systems",
      event: "Developer Conference 2024",
      date: "February 20, 2024",
      type: "Technical Talk",
      attendees: "200+",
      description: "Best practices and architectural patterns for building production-ready machine learning systems.",
      resources: ["Slides", "Code"]
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Best Paper Award",
      event: "International Conference on Machine Learning (ICML) 2023",
      description: "Received the Best Paper Award for groundbreaking research in self-supervised learning techniques.",
      impact: "Research cited by 200+ papers within 6 months",
      link: "#"
    },
    {
      icon: Medal,
      title: "Research Grant Recipient",
      event: "National Science Foundation",
      description: "Awarded $500,000 research grant for innovative work in computer vision applications.",
      impact: "Funding secured for 2-year research project",
      link: "#"
    },
    {
      icon: Star,
      title: "Academic Excellence",
      event: "Department of Computer Science",
      description: "Maintained 4.0 GPA throughout graduate studies while publishing 5 peer-reviewed papers.",
      impact: "Top 1% of graduating class",
      link: "#"
    },
    {
      icon: Sparkles,
      title: "Hackathon Winner",
      event: "Global AI Challenge 2023",
      description: "Led team to first place with an innovative AI-powered healthcare solution.",
      impact: "Selected from 500+ international teams",
      link: "#"
    }
  ];
  const skills = [
    {
      title: "Languages",
      icon: Code,
      skills: ["C/C++", "Python", "Java", "JavaScript"]
    },
    {
      title: "Frameworks",
      icon: Settings,
      skills: ["ReactJS", "NodeJS", "FastAPI", "NextJS"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Firebase"]
    },
    {
      title: "Cloud",
      icon: Cloud,
      skills: ["Azure", "AWS"]
    },
    {
      title: "ML/DL",
      icon: Cpu,
      skills: ["PyTorch", "TensorFlow", "Scikit-Learn"]
    },
    {
      title: "Robotics",
      icon: Monitor,
      skills: ["ROS", "Raspberry Pi", "Arduino", "OpenCV"]
    }
  ];

  const publications = [
    {
      title: "Novel Approach to Self-Supervised Learning in Computer Vision",
      authors: "Doe, J., Smith, A., Johnson, B.",
      conference: "International Conference on Machine Learning (ICML)",
      year: "2024",
      impact: "Citation count: 45",
      abstract: "We present a new self-supervised learning framework that achieves state-of-the-art performance on various computer vision tasks while requiring significantly less computational resources.",
      links: [
        { type: "Paper", url: "#" },
        { type: "Code", url: "#" },
        { type: "Dataset", url: "#" }
      ]
    },
    {
      title: "Efficient Neural Architecture Search for Real-time Applications",
      authors: "Doe, J., Williams, R., Brown, M.",
      conference: "Neural Information Processing Systems (NeurIPS)",
      year: "2023",
      impact: "Citation count: 78",
      abstract: "This paper introduces a novel neural architecture search method that optimizes both model performance and inference time, making it particularly suitable for real-time applications.",
      links: [
        { type: "Paper", url: "#" },
        { type: "Code", url: "#" }
      ]
    },
    {
      title: "Improving Robustness in Deep Learning Models",
      authors: "Doe, J., Anderson, C.",
      conference: "Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: "2023",
      impact: "Citation count: 92",
      abstract: "We propose a new training methodology that significantly improves the robustness of deep learning models against adversarial attacks while maintaining high accuracy on clean data.",
      links: [
        { type: "Paper", url: "#" },
        { type: "Code", url: "#" },
        { type: "Demo", url: "#" }
      ]
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-100">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      
      {/* Hero Section */}
     
    <header className="relative overflow-hidden min-h-screen flex items-center">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Profile Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-blue-400 font-medium">Hi there, I'm</h4>
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                John Doe
              </h1>
              <p className="text-lg text-gray-400">Computer Science Graduate Student</p>
            </div>

            <p className="text-gray-300 text-base leading-relaxed">
              Passionate about artificial intelligence and its applications in solving real-world problems. 
              Currently researching deep learning approaches for computer vision at XYZ University.
            </p>

            <div className="flex flex-wrap gap-3">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a 
                href="#resume" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700 hover:border-blue-500 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="#" 
                  className="p-2 bg-gray-800/50 rounded-lg hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-gray-800/50 rounded-lg hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-gray-800/50 rounded-lg hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50">
                <div className="text-xl font-bold text-blue-400 mb-1">3+</div>
                <div className="text-xs text-gray-400">Years Research</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50">
                <div className="text-xl font-bold text-purple-400 mb-1">15+</div>
                <div className="text-xs text-gray-400">Publications</div>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50">
                <div className="text-xl font-bold text-blue-400 mb-1">500+</div>
                <div className="text-xs text-gray-400">Citations</div>
              </div>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="relative">
            <div className="relative group">
              {/* Background Effects */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              
              {/* Image Container */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border-2 border-gray-700/50 group-hover:border-blue-500/50 transition duration-300">
                  <img 
                    src="/api/placeholder/400/500"
                    alt="Profile Picture"
                    className="w-full h-[400px] object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-4 -right-4 p-3 bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-gray-300">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievements */}
            <div className="absolute -right-8 top-1/4 transform rotate-6">
              <div className="bg-gray-800/90 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50">
                <FileText className="w-5 h-5 text-blue-400 mb-1" />
                <p className="text-xs text-gray-300">Latest Publication</p>
                <p className="text-xs text-gray-400">ICML 2024</p>
              </div>
            </div>
            
            <div className="absolute -left-8 bottom-1/4 transform -rotate-6">
              <div className="bg-gray-800/90 backdrop-blur-sm p-3 rounded-xl border border-gray-700/50">
                <ExternalLink className="w-5 h-5 text-purple-400 mb-1" />
                <p className="text-xs text-gray-300">Featured Project</p>
                <p className="text-xs text-gray-400">Neural Networks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        
       
        
        {/* Blog Posts Section */}
        <section>
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Clock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {post.preview}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    Read More
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Experience Section */}
         <section className="relative py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-2 bg-blue-500/10 rounded-xl">
            <Briefcase className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Experience
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>

        {/* Skills Section */}
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

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((project) => (
              <div key={project} className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 z-10" />
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Project Preview"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="relative z-20 p-6 -mt-8">
                  <h3 className="text-xl font-semibold mb-2">Neural Style Transfer</h3>
                  <p className="text-gray-400 mb-4">
                    Deep learning model for artistic style transfer using PyTorch and advanced CNN architectures.
                  </p>
                  <div className="flex gap-3">
                    <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors duration-300">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors duration-300">
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Workshops & Talks Section */}
        <section>
          <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Workshops & Talks
          </h2>
          <div className="space-y-6">
            {workshops.map((workshop, index) => (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">{workshop.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {workshop.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Users size={16} />
                        {workshop.attendees} attendees
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                    {workshop.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{workshop.description}</p>
                <div className="flex flex-wrap gap-3">
                  {workshop.resources.map((resource, resourceIndex) => (
                    <a
                      key={resourceIndex}
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      {resource}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
          
        {/* Publications Section - Add this before the Contact section */}
      <section>
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Publications
        </h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
                    {pub.title}
                  </h3>
                  <p className="text-gray-400">
                    {pub.authors}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-300">
                    <span className="flex items-center gap-2">
                      <BookOpen size={16} />
                      {pub.conference}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar size={16} />
                      {pub.year}
                    </span>
                    <span className="text-blue-400">
                      {pub.impact}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                {pub.abstract}
              </p>
              <div className="flex flex-wrap gap-3">
                {pub.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    {link.type}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="relative">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Award className="w-10 h-10 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="pl-24">
                <div className="text-sm text-gray-400 mb-2">
                  Credential ID: {cert.credentialId}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm"
                    >
                      <Check size={12} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full" />
          <div className="absolute right-0 top-0 bg-purple-500/5 blur-[100px] rounded-full h-[300px] w-[300px]" />
        </div>
        
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Notable Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-blue-400 text-sm mt-1">{achievement.event}</p>
                    <p className="text-gray-300 mt-3">{achievement.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-gray-400 bg-blue-500/10 px-3 py-1 rounded-full">
                        {achievement.impact}
                      </span>
                      <a 
                        href={achievement.link}
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        Learn more
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full" />
          <div className="absolute right-0 top-0 bg-purple-500/10 blur-[100px] rounded-full h-[300px] w-[300px]" />
        </div>
        
        <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
          
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <FileText className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  Download CV
                </h2>
              </div>
              
              <p className="text-gray-300 max-w-2xl">
                Get a comprehensive overview of my experience, skills, and achievements. 
                My CV includes detailed information about my research work, publications, 
                and technical expertise.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock size={16} />
                  <span>Last updated: December 2023</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <FileText size={16} />
                  <span>PDF Format • 2 Pages</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
              >
                <Download size={20} />
                Download PDF
              </a>
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-colors duration-300"
              >
                <ExternalLink size={20} />
                View Online
              </a>
            </div>
          </div>
          
          <div className="px-8 md:px-12 pb-8 md:pb-12 pt-0 md:pt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 mt-8 border-t border-gray-700/50">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Download size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-100">Quick Download</h3>
                  <p className="text-sm text-gray-400 mt-1">One-click download in PDF format</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <ArrowRight size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-100">Always Updated</h3>
                  <p className="text-sm text-gray-400 mt-1">Latest version with recent achievements</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <FileText size={20} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-100">ATS Friendly</h3>
                  <p className="text-sm text-gray-400 mt-1">Optimized for applicant tracking systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      <section className="relative py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Featured In
        </h2>
        
        <div className="space-y-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
    
        {/* Contact Section */}
        <section className="relative">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full" />
        <div className="absolute right-0 top-0 bg-purple-500/5 blur-[100px] rounded-full h-[300px] w-[300px]" />
      </div>

      <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        Get in Touch
      </h2>

      <div className="relative grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-100 mb-4">Let's Connect</h3>
            <p className="text-gray-400">Feel free to reach out for collaborations, research opportunities, or just to say hello!</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-all duration-300">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:john.doe@email.com" className="text-gray-200 hover:text-blue-400 transition-colors duration-300">
                  john.doe@email.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-all duration-300">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+15551234567" className="text-gray-200 hover:text-blue-400 transition-colors duration-300">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-all duration-300">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-gray-200">San Francisco, CA</p>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <a href="#" className="p-3 bg-gray-700/50 rounded-xl hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 bg-gray-700/50 rounded-xl hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-gray-100"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-gray-100"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-gray-100"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
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