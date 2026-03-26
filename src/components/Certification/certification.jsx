import React from 'react';
import { Award, Calendar, Check, ExternalLink, FileText } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const CertificationCard = ({ certification }) => {
  const { name, issuer, date, credentialId, skills, verificationUrl } = certification;

  return (
    <div className="group glass-card p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/15 transition-colors duration-300">
            <Award className="w-8 h-8 text-teal-400" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-100 group-hover:text-teal-400 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-slate-400 text-sm mt-1">{issuer}</p>
          <div className="flex items-center gap-2 text-sm text-slate-400 mt-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
        </div>
      </div>

      <div className="pl-20">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs text-slate-500 font-mono">
            {credentialId}
          </div>
          {verificationUrl && (
            <a
              href={verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-teal-400 hover:text-teal-300 transition-colors duration-300"
            >
              Verify
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 accent-chip text-xs"
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

const certificationData = [
  {
    id: 1,
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2023",
    credentialId: "56b05652-62c2-42d3-90b1-17e77f3cb19f",
    verificationUrl: "https://www.credly.com/badges/56b05652-62c2-42d3-90b1-17e77f3cb19f?source=linked_in_profile",
    skills: ["Azure Services", "Cloud Architecture", "System Design", "Security", "Cost Optimization"]
  },
  {
    id: 2,
    name: "NVIDIA: Fundamentals of Deep Learning (DLI Workshop)",
    issuer: "NVIDIA",
    date: "2023",
    credentialId: "eec5ed44eaf642aca886ed0edc5956cd",
    verificationUrl: "https://learn.nvidia.com/certificates?id=eec5ed44eaf642aca886ed0edc5956cd",
    skills: ["Deep Learning", "Neural Networks", "GPU Computing", "Optimization", "Machine Learning"]
  },
  {
    id: 3,
    name: "Linux Foundation: Kubernetes Fundamentals (LFS258)",
    issuer: "The Linux Foundation",
    date: "2023",
    credentialId: "mirza-nihal-baig-f9f59e1b-a2dd-4002-901c-77c102a04245",
    verificationUrl: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/7657fb91-0388-4685-9725-69f405868ea0-mirza-nihal-baig-f9f59e1b-a2dd-4002-901c-77c102a04245-certificate.pdf",
    skills: ["Kubernetes", "Container Orchestration", "DevOps", "Infrastructure", "Deployment"]
  },
  {
    id: 4,
    name: "Udacity: AI Product Manager Nanodegree",
    issuer: "Udacity",
    date: "2021",
    credentialId: "e7ffed672-8d81-11eb-9714-5305ea9924c1",
    verificationUrl: "https://www.udacity.com/certificate/e/7ffed672-8d81-11eb-9714-5305ea9924c1",
    skills: ["AI Strategy", "Product Management", "Deep Learning", "Computer Vision", "Model Deployment"]
  }
];

const Certifications = () => {
  const revealRef = useScrollReveal();

  return (
    <div className="relative" ref={revealRef}>
      <div className="flex items-center gap-4 mb-12 reveal">
        <div className="p-2.5 bg-teal-500/10 rounded-xl">
          <FileText className="w-6 h-6 text-teal-400" />
        </div>
        <h2 className="section-heading">Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal reveal-delay-1">
        {certificationData.map(certification => (
          <CertificationCard key={certification.id} certification={certification} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
