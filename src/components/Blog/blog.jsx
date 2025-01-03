import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  ExternalLink, 
  Tag, 
  BookOpen, 
  Bookmark,
  ThumbsUp,
  MessageSquare,
  Share2,
  Search,
  Filter
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Stream Data to Azure IoT Hub from Raspberry Pi",
    date: "Feb 25, 2024",
    readTime: "8 min read",
    preview: "This is a Basic IoT Project where I have used used my Raspberry Pi to stream data to Microsoft Azure. It will be helpful for beginners who want to know about IoT and Azure.",
    image: "/api/placeholder/800/400",
    tags: ["Azure", "Raspberry Pi"],
    category: "robotics",
    likes: 4,
    comments: 0,
    saved: false,
    url: "https://dev.to/nihalbaig0/stream-data-to-azure-iot-hub-from-raspberry-pi-1ed3"
  },
  {
    id: 2,
    title: "Fastest way to set up SSH and VNC Server in Raspberry Pi without Monitor ( Headless mode)",
    date: "June 6, 2022",
    readTime: "6 min read",
    preview: "Setting up raspberry pi without a monitor is a hassle for most of us. You have to manually set up the ssh config and find out the IP address of Pi using Third-Party Software. But Raspberry pi imager has a secret settings menu that can make the process really easy.",
    image: "/api/placeholder/800/400",
    tags: ["Raspberry Pi", "SSH", "Linux"],
    category: "robotics",
    likes: 11,
    comments: 0,
    saved: false,
    url: "https://medium.com/@nihalmd1/fastest-way-to-set-up-ssh-and-vnc-server-in-raspberry-pi-without-monitor-headless-mode-d4f516689046"
  },
  // {
  //   id: 3,
  //   title: "Building Scalable MLOps Pipelines",
  //   date: "February 10, 2024",
  //   readTime: "10 min read",
  //   preview: "A comprehensive guide to implementing MLOps practices in your machine learning projects using modern tools and techniques.",
  //   image: "/api/placeholder/800/400",
  //   tags: ["MLOps", "DevOps", "CI/CD"],
  //   category: "mlops",
  //   likes: 189,
  //   comments: 34,
  //   saved: false,
  //   url: "/blog/building-scalable-mlops-pipelines"
  // },
  // {
  //   id: 4,
  //   title: "React Performance Optimization Techniques",
  //   date: "January 25, 2024",
  //   readTime: "7 min read",
  //   preview: "Advanced strategies for optimizing React applications, including code splitting, memoization, and state management.",
  //   image: "/api/placeholder/800/400",
  //   tags: ["React", "JavaScript", "Performance"],
  //   category: "web-development",
  //   likes: 210,
  //   comments: 28,
  //   saved: false,
  //   url: "/blog/react-performance-optimization"
  // }
];

const categories = [
  { id: "all", label: "All Posts" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "deep-learning", label: "Deep Learning" },
  { id: "mlops", label: "MLOps" },
  { id: "web-development", label: "Web Development" },
  { id: "robotics", label: "Robotics" }
];

const BlogCard = ({ post, onSave }) => {
  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <a href={post.url} className="block h-full">
          <img 
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
        </a>
        
        {/* Tags Overlay */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-500/10 backdrop-blur-sm text-blue-400 rounded-lg text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
        </div>

        {/* Title and Preview */}
        <a href={post.url} className="block group">
          <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
            {post.title}
          </h3>
          <p className="text-gray-400 mb-6">
            {post.preview}
          </p>
        </a>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <ThumbsUp className="w-4 h-4" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300">
              <MessageSquare className="w-4 h-4" />
              <span>{post.comments}</span>
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onSave(post.id)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                post.saved 
                  ? 'bg-blue-500/20 text-blue-400' 
                  : 'text-gray-400 hover:text-blue-400'
              }`}
            >
              <Bookmark className="w-4 h-4" />
            </button>
            <a 
              href={post.url}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Read More
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogPosts = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState(blogPosts);

  // Filter posts based on category and search query
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Handle post saving
  const handleSave = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, saved: !post.saved } : post
    ));
  };

  return (
    <section className="relative py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Latest Blog Posts
            </h2>
            <p className="text-gray-400">Thoughts, tutorials, and insights</p>
          </div>
          
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 px-4 py-2 pl-10 bg-gray-800/50 border border-gray-700/50 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-gray-100"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Filter className="w-4 h-4 text-gray-400" />
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-800/50 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map(post => (
            <BlogCard 
              key={post.id} 
              post={post}
              onSave={handleSave}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No posts found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filter to find what you're looking for
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPosts;