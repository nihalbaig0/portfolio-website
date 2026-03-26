import React from 'react';
import {
  CalendarDays,
  ExternalLink,
  Heart,
  MessageSquare,
  Newspaper,
  Link2
} from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const featuredContent = {
  articles: [
    {
      id: 1,
      type: 'article',
      outlet: "Prothom Alo",
      title: "First Autonomous Car Development Breakthrough",
      excerpt: "A groundbreaking achievement in autonomous vehicle technology marks a significant milestone in Bangladesh's tech innovation landscape.",
      date: "2024",
      image: "https://images.prothomalo.com/prothomalo-bangla%2F2024-10-27%2F2lw95umg%2FIMG20241018154228977.jpg?rect=87%2C0%2C810%2C540&auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0",
      url: "https://www.prothomalo.com/lifestyle/je3nc91c98",
      likes: "3.2K",
      comments: "245",
      icon: Newspaper
    },
    {
      id: 2,
      type: 'article',
      outlet: "Prothom Alo Bondhushova",
      title: "Innovation Workshop at Leading University",
      excerpt: "An engaging workshop session at Leading University, sharing insights on technology innovation and future developments in autonomous systems.",
      date: "2024",
      image: "/api/placeholder/400/400",
      url: "#",
      likes: "1.5K",
      comments: "156",
      icon: Newspaper
    }
  ]
};

const FeaturedCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div className="group glass-card p-6">
      <div className="flex items-start gap-6">
        {item.type === 'article' && (
          <div className="flex-shrink-0 w-32 h-32 overflow-hidden rounded-xl border border-slate-700/30">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
            <div className="p-1.5 bg-teal-500/10 rounded-lg">
              <Icon className="w-4 h-4 text-teal-400" />
            </div>
            <span className="accent-chip text-xs">{item.outlet}</span>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              {item.date}
            </div>
          </div>

          <h3 className="text-xl font-semibold text-slate-100 group-hover:text-teal-400 transition-colors duration-300 mb-2">
            {item.title}
          </h3>

          <p className="text-slate-400 mb-4 text-sm">{item.excerpt}</p>

          <div className="flex items-center gap-6">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors duration-300 text-sm"
            >
              Read More
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <span className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                {item.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare className="w-4 h-4" />
                {item.comments}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Featured = () => {
  const revealRef = useScrollReveal();

  return (
    <div className="relative" ref={revealRef}>
      <div className="flex items-center gap-4 mb-12 reveal">
        <div className="p-2.5 bg-teal-500/10 rounded-xl">
          <Link2 className="w-6 h-6 text-teal-400" />
        </div>
        <h2 className="section-heading">Featured In</h2>
      </div>

      <div className="space-y-6 reveal reveal-delay-1">
        {featuredContent.articles.map(article => (
          <FeaturedCard key={article.id} item={article} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
