import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  ExternalLink, 
  Download,
  FileText,
  Users,
  Link2,
  GitBranch,
  Tag,
  ArrowUpRight,
  ChevronDown,
  ChevronUp
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
    title: "Novel Approach to Self-Supervised Learning in Computer Vision",
    authors: [
      { name: "John Doe", isMe: true },
      { name: "Alice Smith", isMe: false },
      { name: "Bob Johnson", isMe: false }
    ],
    venue: "International Conference on Machine Learning (ICML)",
    year: "2024",
    type: "conference",
    abstract: "We present a new self-supervised learning framework that achieves state-of-the-art performance on various computer vision tasks while requiring significantly less computational resources.",
    citations: 45,
    code: "https://github.com/username/project",
    paper: "https://arxiv.org/abs/xxxx.xxxxx",
    demo: "https://demo.project.com",
    dataset: "https://dataset.project.com",
    tags: ["Computer Vision", "Self-Supervised Learning", "Deep Learning"],
    metrics: [
      { label: "Accuracy", value: "98.5%" },
      { label: "Training Time", value: "-40%" },
      { label: "Model Size", value: "25MB" }
    ]
  },
  {
    id: 2,
    title: "Efficient Neural Architecture Search for Real-time Applications",
    authors: [
      { name: "John Doe", isMe: true },
      { name: "Carol Williams", isMe: false }
    ],
    venue: "Neural Information Processing Systems (NeurIPS)",
    year: "2023",
    type: "conference",
    abstract: "This paper introduces a novel neural architecture search method that optimizes both model performance and inference time, making it particularly suitable for real-time applications.",
    citations: 78,
    code: "https://github.com/username/nas-project",
    paper: "https://arxiv.org/abs/yyyy.yyyyy",
    tags: ["Neural Architecture Search", "Real-time AI", "Optimization"],
    metrics: [
      { label: "Latency", value: "5ms" },
      { label: "Parameters", value: "5M" }
    ]
  },
  {
    id: 3,
    title: "Improving Robustness in Deep Learning Models",
    authors: [
      { name: "Alice Anderson", isMe: false },
      { name: "John Doe", isMe: true }
    ],
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
    year: "2023",
    type: "journal",
    abstract: "We propose a new training methodology that significantly improves the robustness of deep learning models against adversarial attacks while maintaining high accuracy on clean data.",
    citations: 92,
    paper: "https://doi.org/xxx.xxxx",
    tags: ["Adversarial Learning", "Model Robustness", "Deep Learning"],
    metrics: [
      { label: "Robustness", value: "+65%" },
      { label: "Clean Accuracy", value: "96.8%" }
    ]
  }
];

const PublicationMetrics = ({ metrics }) => (
  <div className="flex flex-wrap gap-3 mt-3">
    {metrics.map((metric, index) => (
      <div 
        key={index}
        className="px-3 py-1.5 bg-blue-500/10 rounded-lg flex items-center gap-2"
      >
        <span className="text-sm text-gray-300">{metric.label}:</span>
        <span className="text-sm font-medium text-blue-400">{metric.value}</span>
      </div>
    ))}
  </div>
);

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
  const [isExpanded, setIsExpanded] = useState(false);
  const typeColor = PUBLICATION_TYPES[publication.type].color;

  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1 flex-1">
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

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-gray-700/50 rounded-full transition-colors"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
        </div>

        {/* Venue */}
        <div className="flex items-center gap-2 text-gray-300">
          <BookOpen className="w-4 h-4" />
          <span>{publication.venue}</span>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-4 pt-4 border-t border-gray-700/50">
            <p className="text-gray-300">
              {publication.abstract}
            </p>

            {publication.metrics && (
              <PublicationMetrics metrics={publication.metrics} />
            )}

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

            <PublicationLinks publication={publication} />
          </div>
        )}
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