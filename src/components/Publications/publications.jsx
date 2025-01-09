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
    title: "G-RAG: Knowledge Expansion in Material Science",
    authors: [
      { name: "Radeen Mostafa", isMe: false },
      { name: "Mirza Nihal Baig", isMe: true },
      { name: "Mashaekh Tausif Ehsan", isMe: false },
      { name: " Jakir Hasan", isMe: false }
    ],
    venue: "NeuriPS Muslim in ML Workshop",
    year: "2024",
    type: "workshop",
    abstract: "We present a new self-supervised learning framework that achieves state-of-the-art performance on various computer vision tasks while requiring significantly less computational resources.",
    citations: 0,
    //code: "https://github.com/username/project",
    paper: "https://openreview.net/forum?id=dQZ9zwWI64",
    //demo: "https://demo.project.com",
    //dataset: "https://dataset.project.com",
    tags: ["Computer Vision", "Self-Supervised Learning", "Deep Learning"]
  },
  {
    id: 2,
    title: "A SAR-Based Approach to Recognize Text in Syloti Nagri",
    authors: [
      { name: "Mirza Nihal Baig", isMe: true },
      { name: "Nowshin Alam Owishi", isMe: false },
      { name: "Mohammad Shahidur Rahman", isMe: false }
    ],
    venue: "2023 6th International Conference on Electrical Information and Communication Technology (EICT)",
    year: "2023",
    type: "conference",
    abstract: "This paper introduces a novel neural architecture search method that optimizes both model performance and inference time, making it particularly suitable for real-time applications.",
    citations: 0,
    code: "https://github.com/nihalbaig0/Nagri-OCR/tree/main",
    paper: "https://ieeexplore.ieee.org/document/10427969",
    tags: ["Neural Architecture Search", "Real-time AI", "Optimization"]
  },
  // {
  //   id: 3,
  //   title: "Improving Robustness in Deep Learning Models",
  //   authors: [
  //     { name: "Alice Anderson", isMe: false },
  //     { name: "John Doe", isMe: true }
  //   ],
  //   venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
  //   year: "2023",
  //   type: "journal",
  //   abstract: "We propose a new training methodology that significantly improves the robustness of deep learning models against adversarial attacks while maintaining high accuracy on clean data.",
  //   citations: 92,
  //   paper: "https://doi.org/xxx.xxxx",
  //   tags: ["Adversarial Learning", "Model Robustness", "Deep Learning"]
  // }
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
  const totalCitations = publicationsData.reduce((sum, pub) => sum + pub.citations, 0);
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