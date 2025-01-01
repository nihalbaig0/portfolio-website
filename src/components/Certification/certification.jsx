import React from 'react';
import { Award, Calendar, Check, ExternalLink, FileText } from 'lucide-react';

// Certification card subcomponent
const CertificationCard = ({ certification }) => {
  const { name, issuer, date, credentialId, skills, verificationUrl } = certification;
  
  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0">
          <div className="w-20 h-20 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
            <Award className="w-10 h-10 text-blue-400" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-400 text-sm mt-1">{issuer}</p>
          <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>
      </div>
      
      <div className="pl-24">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-gray-400">
            Credential ID: {credentialId}
          </div>
          {verificationUrl && (
            <a 
              href={verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Verify
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm"
            >
              <Check className="w-3 h-3" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Certifications data
const certificationData = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect - Professional",
    issuer: "Amazon Web Services",
    date: "December 2023",
    credentialId: "AWS-123456",
    verificationUrl: "#",
    skills: [
      "Cloud Architecture",
      "AWS Services",
      "System Design",
      "Security",
      "Cost Optimization"
    ]
  },
  {
    id: 2,
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "October 2023",
    credentialId: "TF-789012",
    verificationUrl: "#",
    skills: [
      "Deep Learning",
      "Neural Networks",
      "Computer Vision",
      "TensorFlow",
      "Model Deployment"
    ]
  },
  {
    id: 3,
    name: "Microsoft Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "August 2023",
    credentialId: "AZ-345678",
    verificationUrl: "#",
    skills: [
      "Azure ML",
      "Cognitive Services",
      "AI Solutions",
      "MLOps",
      "Natural Language Processing"
    ]
  },
  {
    id: 4,
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "July 2023",
    credentialId: "DL-901234",
    verificationUrl: "#",
    skills: [
      "CNN",
      "RNN",
      "Sequence Models",
      "Optimization",
      "Machine Learning"
    ]
  }
];

// Main Certifications component
const Certifications = () => {
  return (
    <section className="relative py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="p-2 bg-blue-500/10 rounded-xl">
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationData.map(certification => (
            <CertificationCard 
              key={certification.id} 
              certification={certification} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;