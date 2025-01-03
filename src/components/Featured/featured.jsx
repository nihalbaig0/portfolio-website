import React from 'react';
import { 
  CalendarDays, 
  ExternalLink, 
  Heart, 
  MessageSquare, 
  Award,
  Newspaper,
  Radio,
  Video,
  Link2
} from 'lucide-react';

const featuredContent = {
  articles: [
    {
      id: 1,
      type: 'article',
      outlet: "Prothom Alo",
      title: "First Autonomous Car Development Breakthrough",
      excerpt: "A groundbreaking achievement in autonomous vehicle technology marks a significant milestone in Bangladesh's tech innovation landscape.",
      date: "2024",
      image: "/api/placeholder/400/400",
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

// Rest of the component code remains the same
const FeaturedCard = ({ item }) => {
  const Icon = item.icon;
  
  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex items-start gap-6">
        {item.type === 'article' && (
          <div className="flex-shrink-0 w-32 h-32 overflow-hidden rounded-lg">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <div className="p-1.5 bg-blue-500/10 rounded-lg">
              <Icon className="w-4 h-4 text-blue-400" />
            </div>
            <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-lg">
              {item.outlet}
            </span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              {item.date}
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300 mb-2">
            {item.title}
          </h3>
          
          <p className="text-gray-400 mb-4">{item.excerpt}</p>
          
          <div className="flex items-center gap-6">
            <a 
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Read More
              <ExternalLink className="w-4 h-4" />
            </a>
            
            <div className="flex items-center gap-4 text-gray-400">
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
  return (
    <section className="relative py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-2 bg-blue-500/10 rounded-xl">
            <Link2 className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Featured In
          </h2>
        </div>

        <div className="space-y-6">
          {featuredContent.articles.map(article => (
            <FeaturedCard key={article.id} item={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;