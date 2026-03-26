import React from 'react';
import {
  BookOpen,
  Calendar,
  ExternalLink,
  FileText,
  GitBranch,
  Tag,
  ArrowUpRight,
  Database
} from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const PUBLICATION_TYPES = {
  'conference': { label: 'Conference Paper', classes: 'bg-teal-500/10 text-teal-400' },
  'journal': { label: 'Journal Article', classes: 'bg-cyan-500/10 text-cyan-400' },
  'workshop': { label: 'Workshop Paper', classes: 'bg-emerald-500/10 text-emerald-400' },
  'preprint': { label: 'Preprint', classes: 'bg-amber-500/10 text-amber-400' }
};

const publicationsData = [
  {
    id: 1,
    title: "A Scalable Modular Architecture for Multimodal Control of an Electric Vehicle Platform",
    authors: [
      { name: "Baig, M. N.", isMe: true },
      { name: "et al.", isMe: false }
    ],
    venue: "2026 5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE)",
    year: "2026",
    type: "conference",
    abstract: "Presents a scalable modular architecture enabling multimodal control integration for electric vehicle platforms.",
    citations: 0,
    paper: "https://ieeexplore.ieee.org/document/11429293/",
    tags: ["Multimodal Control", "Electric Vehicle", "Modular Architecture", "Systems Engineering"]
  },
  {
    id: 2,
    title: "A Scalable Multi-Thruster ROV Platform With Modular Sensing and Low-Latency Control for Underwater Surveillance",
    authors: [
      { name: "Baig, M. N.", isMe: true },
      { name: "et al.", isMe: false }
    ],
    venue: "2026 5th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE)",
    year: "2026",
    type: "conference",
    abstract: "Introduces a scalable ROV platform featuring multi-thruster design, modular sensing, and low-latency control systems for underwater surveillance applications.",
    citations: 0,
    paper: "https://ieeexplore.ieee.org/document/11429321/",
    tags: ["ROV", "Underwater Surveillance", "Low-Latency Control", "Modular Sensing"]
  },
  {
    id: 3,
    title: "G-RAG: Knowledge Expansion in Material Science",
    authors: [
      { name: "Radeen Mostafa", isMe: false },
      { name: "Mirza Nihal Baig", isMe: true },
      { name: "Mashaekh Tausif Ehsan", isMe: false },
      { name: "Jakir Hasan", isMe: false }
    ],
    venue: "Proceedings of the Muslims in ML Workshop, NeurIPS 2024",
    year: "2024",
    type: "workshop",
    abstract: "Introduced G-RAG, a graph-based RAG system to improve retrieval accuracy and contextual understanding in Material Science documents.",
    citations: 0,
    paper: "https://openreview.net/forum?id=dQZ9zwWI64",
    tags: ["RAG", "Material Science", "Graph-based Systems", "LLM"]
  },
  {
    id: 4,
    title: "A SAR-Based Approach to Recognize Text in Syloti Nagri",
    authors: [
      { name: "Mirza Nihal Baig", isMe: true },
      { name: "Nowshin Alam Owishi", isMe: false },
      { name: "Mohammad Shahidur Rahman", isMe: false }
    ],
    venue: "6th International Conference on Electrical Information and Communication Technology (EICT), 2023",
    year: "2023",
    type: "conference",
    abstract: "Developed a SAR-based OCR system for Sylheti Nagri script, addressing complex character shapes and enabling digitization of historical texts.",
    citations: 0,
    paper: "https://www.researchgate.net/publication/378193712_A_SAR-Based_Approach_to_Recognize_Text_in_Syloti_Nagri",
    tags: ["OCR", "Bengali Script", "Computer Vision", "NLP"]
  },
];

const PublicationLinks = ({ publication }) => {
  const links = [
    { type: 'paper', icon: FileText, url: publication.paper, label: 'Paper' },
    { type: 'code', icon: GitBranch, url: publication.code, label: 'Code' },
    { type: 'demo', icon: ArrowUpRight, url: publication.demo, label: 'Demo' },
    { type: 'dataset', icon: Database, url: publication.dataset, label: 'Dataset' }
  ].filter(link => publication[link.type]);

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 transition-colors duration-300 text-sm"
          >
            <Icon size={16} />
            <span>{link.label}</span>
          </a>
        );
      })}
    </div>
  );
};

const PublicationCard = ({ publication }) => {
  const typeInfo = PUBLICATION_TYPES[publication.type];

  return (
    <div className="group glass-card p-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <span className={`px-2.5 py-1 rounded-lg ${typeInfo.classes}`}>
              {typeInfo.label}
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Calendar className="w-4 h-4" />
              {publication.year}
            </span>
          </div>

          <h3 className="text-xl font-semibold text-slate-100 group-hover:text-teal-400 transition-colors duration-300">
            {publication.title}
          </h3>

          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
            {publication.authors.map((author, index) => (
              <React.Fragment key={index}>
                <span className={author.isMe ? "text-teal-400 font-medium" : ""}>
                  {author.name}
                </span>
                {index < publication.authors.length - 1 && <span className="text-slate-600">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 text-slate-300 text-sm">
          <BookOpen className="w-4 h-4 text-teal-400/60" />
          <span>{publication.venue}</span>
        </div>

        <PublicationLinks publication={publication} />

        <div className="flex flex-wrap gap-2">
          {publication.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2 py-1 bg-slate-700/40 text-slate-300 rounded-lg text-xs"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Publications = () => {
  const totalCitations = 9;
  const totalPublications = publicationsData.length;
  const revealRef = useScrollReveal();

  return (
    <div className="relative" ref={revealRef}>
      <div className="mb-12">
        <h2 className="section-heading reveal">Publications</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 reveal reveal-delay-1">
          <div className="glass-card p-4">
            <div className="text-2xl font-bold text-teal-400 mb-1">{totalPublications}</div>
            <div className="text-sm text-slate-400">Publications</div>
          </div>
          <div className="glass-card p-4">
            <div className="text-2xl font-bold text-cyan-400 mb-1">{totalCitations}</div>
            <div className="text-sm text-slate-400">Citations</div>
          </div>
        </div>
      </div>

      <div className="space-y-6 reveal reveal-delay-2">
        {publicationsData.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
    </div>
  );
};

export default Publications;
