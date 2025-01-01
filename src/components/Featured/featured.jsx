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
      outlet: "TechCrunch",
      title: "Rising Star in AI Research: Breakthrough in Computer Vision",
      excerpt: "An innovative approach to neural networks is revolutionizing how machines interpret visual data, with potential applications across industries from healthcare to autonomous vehicles.",
      date: "Dec 15, 2023",
      image: "/api/placeholder/400/400",
      url: "#",
      likes: "2.5K",
      comments: "128",
      icon: Newspaper
    },
    {
      id: 2,
      type: 'article',
      outlet: "MIT Technology Review",
      title: "Next Generation of AI Researchers to Watch",
      excerpt: "Among the brightest minds shaping the future of artificial intelligence, this researcher stands out for their work on efficient neural architectures and real-world applications.",
      date: "Nov 28, 2023",
      image: "/api/placeholder/400/400",
      url: "#",
      likes: "1.8K",
      comments: "95",
      icon: Newspaper
    }
  ],
  podcasts: [
    {
      id: 3,
      type: 'podcast',
      outlet: "AI Research Weekly",
      title: "Discussing the Future of Computer Vision",
      excerpt: "A deep dive into the latest developments in computer vision technology and its potential impact on various industries.",
      date: "Jan 10, 2024",
      duration: "45 mins",
      url: "#",
      icon: Radio
    }
  ],
  interviews: [
    {
      id: 4,
      type: 'video',
      outlet: "Tech Insights",
      title: "Building AI Systems for Real-World Applications",
      excerpt: "An in-depth discussion about the challenges and opportunities in deploying AI systems in production environments.",
      date: "Dec 5, 2023",
      duration: "28 mins",
      url: "#",
      thumbnail: "/api/placeholder/400/300",
      icon: Video
    }
  ],
  mentions: [
    {
      id: 5,
      type: 'mention',
      outlet: "Forbes",
      title: "30 Under 30 - AI & Machine Learning",
      excerpt: "Recognition for outstanding contributions to the field of artificial intelligence and machine learning.",
      date: "Jan 2024",
      url: "#",
      icon: Award
    }
  ]
};

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
        
        {item.type === 'video' && (
          <div className="flex-shrink-0 w-40 h-32 relative overflow-hidden rounded-lg">
            <img 
              src={item.thumbnail} 
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Video className="w-8 h-8 text-white" />
            </div>
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
            {item.duration && (
              <>
                <span>•</span>
                <span>{item.duration}</span>
              </>
            )}
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
            
            {item.type === 'article' && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Featured = () => {
  return (
    <section className="relative py-20">
      {/* Background Effects */}
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
          {/* Articles */}
          {featuredContent.articles.map(article => (
            <FeaturedCard key={article.id} item={article} />
          ))}
          
          {/* Podcasts */}
          {featuredContent.podcasts.map(podcast => (
            <FeaturedCard key={podcast.id} item={podcast} />
          ))}
          
          {/* Interviews */}
          {featuredContent.interviews.map(interview => (
            <FeaturedCard key={interview.id} item={interview} />
          ))}
          
          {/* Mentions */}
          {featuredContent.mentions.map(mention => (
            <FeaturedCard key={mention.id} item={mention} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;