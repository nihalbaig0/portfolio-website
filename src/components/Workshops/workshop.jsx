import React, { useState } from 'react';
import { Calendar, Users, Monitor, Presentation, Video, Filter, Mic } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const workshopsData = [
  {
    id: 1,
    title: "Introduction to Azure IoT",
    event: "Global Azure Bangladesh",
    date: "April 15, 2024",
    type: "workshop",
    attendees: "15+",
    description: "Conducted the Introduction to Azure IoT session at Global Azure Bangladesh, where I taught IoT concepts using a Raspberry Pi simulator in Azure.",
    resources: [
      { type: "Video", icon: Video, url: "https://www.youtube.com/watch?v=fKYSOvpInFo&t=2996s" }
    ],
    tags: ["Deep Learning", "PyTorch", "Neural Networks"]
  },
  {
    id: 2,
    title: "Object Detection with Azure Custom Vision",
    event: "Microsoft Learn Student Ambassador",
    date: "March 1, 2024",
    type: "keynote",
    attendees: "300+",
    description: "Conducted a session on Object Detection with Azure Custom Vision as a Microsoft Learn Student Ambassador (MLSA).",
    resources: [
      { type: "Video", icon: Video, url: "https://www.facebook.com/events/2161602314002191?active_tab=about" }
    ],
    tags: ["Computer Vision", "AI", "Future Tech"]
  },
  {
    id: 3,
    title: "Introduction to GitHub Codespace for Machine Learning",
    event: "Microsoft Learn Student Ambassador",
    date: "February 20, 2024",
    type: "talk",
    attendees: "200+",
    description: "Conducted a session on Introduction to GitHub Codespaces for Machine Learning as a Microsoft Learn Student Ambassador (MLSA), demonstrating how to use GitHub Codespaces for various machine learning tasks..",
    resources: [
      { type: "Video", icon: Video, url: "https://www.facebook.com/events/1182648232398042/?active_tab=discussion" }
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

const TYPE_STYLES = {
  workshop: 'bg-teal-500/10 text-teal-400',
  keynote: 'bg-cyan-500/10 text-cyan-400',
  talk: 'bg-emerald-500/10 text-emerald-400',
};

const WorkshopsAndTalks = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const revealRef = useScrollReveal();

  const filteredEvents = workshopsData.filter(
    event => activeCategory === "all" || event.type === activeCategory
  );

  return (
    <div className="relative" ref={revealRef}>
      <h2 className="section-heading mb-12 reveal">
        Workshops & Talks
      </h2>

      <div className="flex flex-wrap gap-3 mb-12 reveal reveal-delay-1">
        {categories.map(category => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                  : "bg-slate-800/60 text-slate-400 border border-slate-700/50 hover:border-teal-500/30 hover:text-teal-400"
              }`}
            >
              <Icon className="w-4 h-4" />
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-6 reveal reveal-delay-2">
        {filteredEvents.map(event => (
          <div key={event.id} className="group glass-card p-6">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-slate-100 group-hover:text-teal-400 transition-colors duration-300">
                  {event.title}
                </h3>
                <div className="text-teal-400/80 mt-1">{event.event}</div>
                <div className="flex flex-wrap items-center gap-4 text-slate-400 mt-2 text-sm">
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
              <span className={`px-3 py-1 rounded-full text-sm ${TYPE_STYLES[event.type] || 'bg-slate-700/50 text-slate-400'}`}>
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </span>
            </div>

            <p className="text-slate-300 mb-4">{event.description}</p>

            <div className="flex flex-wrap gap-4">
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, index) => (
                  <span key={index} className="accent-chip text-xs">{tag}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 ml-auto">
                {event.resources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 transition-colors duration-300 text-sm"
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
  );
};

export default WorkshopsAndTalks;
