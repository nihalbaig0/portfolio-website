import React, { useState } from 'react';
import { Calendar, Users, ExternalLink, Monitor, Presentation, Video, FileText, Download, Filter, Mic } from 'lucide-react';

const workshopsData = [
  {
    id: 1,
    title: "Introduction to Deep Learning with PyTorch",
    event: "AI Conference 2024",
    date: "April 15, 2024",
    type: "workshop",
    attendees: "150+",
    description: "A hands-on workshop covering the fundamentals of deep learning using PyTorch, including practical exercises and real-world applications.",
    resources: [
      { type: "Slides", icon: Presentation, url: "#" },
      { type: "Code", icon: FileText, url: "#" },
      { type: "Video", icon: Video, url: "#" }
    ],
    tags: ["Deep Learning", "PyTorch", "Neural Networks"]
  },
  {
    id: 2,
    title: "The Future of Computer Vision",
    event: "Tech Summit 2024",
    date: "March 1, 2024",
    type: "keynote",
    attendees: "300+",
    description: "An exploration of emerging trends in computer vision and their potential impact on various industries.",
    resources: [
      { type: "Slides", icon: Presentation, url: "#" },
      { type: "Video", icon: Video, url: "#" }
    ],
    tags: ["Computer Vision", "AI", "Future Tech"]
  },
  {
    id: 3,
    title: "Building Scalable ML Systems",
    event: "Developer Conference 2024",
    date: "February 20, 2024",
    type: "talk",
    attendees: "200+",
    description: "Best practices and architectural patterns for building production-ready machine learning systems.",
    resources: [
      { type: "Slides", icon: Presentation, url: "#" },
      { type: "Code", icon: FileText, url: "#" }
    ],
    tags: ["MLOps", "System Design", "Best Practices"]
  }
];

const categories = [
  { id: "all", label: "All Events", icon: Filter },
  { id: "workshop", label: "Workshops", icon: Monitor },
  { id: "talk", label: "Talks", icon: Mic },
  { id: "keynote", label: "Keynotes", icon: Presentation }
];

const WorkshopsAndTalks = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEvents = workshopsData.filter(
    event => activeCategory === "all" || event.type === activeCategory
  );

  return (
    <section className="relative py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Workshops & Talks
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800/50 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {filteredEvents.map(event => (
            <div 
              key={event.id}
              className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <div className="text-blue-400 mt-1">{event.event}</div>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 mt-2">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {event.attendees} attendees
                    </span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  event.type === 'workshop' ? 'bg-blue-500/10 text-blue-400' :
                  event.type === 'keynote' ? 'bg-purple-500/10 text-purple-400' :
                  'bg-green-500/10 text-green-400'
                }`}>
                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                </span>
              </div>

              <p className="text-gray-300 mb-4">{event.description}</p>

              <div className="flex flex-wrap gap-4">
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 ml-auto">
                  {event.resources.map((resource, index) => {
                    const Icon = resource.icon;
                    return (
                      <a
                        key={index}
                        href={resource.url}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors duration-300"
                      >
                        <Icon className="w-4 h-4" />
                        {resource.type}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkshopsAndTalks;