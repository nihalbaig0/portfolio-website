import React from 'react';
import { 
  BookOpen, 
  Calendar, 
  ExternalLink, 
  FileText,
  Users,
  GitBranch,
  Tag,
  ArrowUpRight,
  Database
} from 'lucide-react';

// Publication types and their associated colors
const PUBLICATION_TYPES = {
  'conference': { label: 'Conference Paper', color: 'blue' },
  'journal': { label: 'Journal Article', color: 'purple' },
  'workshop': { label: 'Workshop Paper', color: 'green' },
  'preprint': { label: 'Preprint', color: 'orange' }
};

// Sample publications data
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors duration-300"
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
  const typeColor = PUBLICATION_TYPES[publication.type].color;

  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm">
            <span className={`px-2 py-1 bg-${typeColor}-500/10 text-${typeColor}-400 rounded-lg`}>
              {PUBLICATION_TYPES[publication.type].label}
            </span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center gap-1 text-gray-400">
              <Calendar className="w-4 h-4" />
              {publication.year}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
            {publication.title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
            {publication.authors.map((author, index) => (
              <React.Fragment key={index}>
                <span className={author.isMe ? "text-blue-400 font-medium" : ""}>
                  {author.name}
                </span>
                {index < publication.authors.length - 1 && <span>•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Venue */}
        <div className="flex items-center gap-2 text-gray-300">
          <BookOpen className="w-4 h-4" />
          <span>{publication.venue}</span>
        </div>

        {/* Links */}
        <PublicationLinks publication={publication} />

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {publication.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm"
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

  return (
    <section className="relative py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Publications
          </h2>
          
          {/* Publication Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50">
              <div className="text-2xl font-bold text-blue-400 mb-1">{totalPublications}</div>
              <div className="text-sm text-gray-400">Publications</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50">
              <div className="text-2xl font-bold text-purple-400 mb-1">{totalCitations}</div>
              <div className="text-sm text-gray-400">Citations</div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {publicationsData.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;