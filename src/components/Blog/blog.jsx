import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  ExternalLink,
  BookOpen,
  Bookmark,
  ThumbsUp,
  MessageSquare,
  Search,
  Filter
} from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const blogPosts = [
  {
    id: 3,
    title: "Deploying Whisper model 5x-7x Cheaper than AWS on Vast.ai",
    date: "2025",
    readTime: "7 min read",
    preview: "A practical walkthrough on deploying Whisper on Vast.ai with significantly lower cost than AWS while maintaining strong inference performance for speech workloads.",
    image: "https://images.unsplash.com/photo-1643652631396-181154ca7d8a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Whisper", "Vast.ai", "MLOps", "Cost Optimization"],
    category: "mlops",
    likes: 0,
    comments: 0,
    saved: false,
    url: "https://substack.com/home/post/p-179915400"
  },
  {
    id: 1,
    title: "Stream Data to Azure IoT Hub from Raspberry Pi",
    date: "Feb 25, 2024",
    readTime: "8 min read",
    preview: "This is a Basic IoT Project where I have used used my Raspberry Pi to stream data to Microsoft Azure. It will be helpful for beginners who want to know about IoT and Azure.",
    image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsykj2zox5h7g1j09yy7d.jpg",
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
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*C4VAL8igHbXpdxapz45D9w.jpeg",
    tags: ["Raspberry Pi", "SSH", "Linux"],
    category: "robotics",
    likes: 11,
    comments: 0,
    saved: false,
    url: "https://medium.com/@nihalmd1/fastest-way-to-set-up-ssh-and-vnc-server-in-raspberry-pi-without-monitor-headless-mode-d4f516689046"
  },
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
    <div className="group glass-card overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <a href={post.url} target="_blank" rel="noopener noreferrer" className="block h-full">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
        </a>

        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-teal-500/10 backdrop-blur-sm text-teal-400 rounded-lg text-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
        </div>

        <a href={post.url} target="_blank" rel="noopener noreferrer" className="block group/title">
          <h3 className="text-xl font-semibold mb-3 text-slate-100 group-hover/title:text-teal-400 transition-colors duration-300">
            {post.title}
          </h3>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed">{post.preview}</p>
        </a>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-slate-400 text-sm">
              <ThumbsUp className="w-4 h-4" />
              {post.likes}
            </span>
            <span className="flex items-center gap-2 text-slate-400 text-sm">
              <MessageSquare className="w-4 h-4" />
              {post.comments}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSave(post.id)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                post.saved
                  ? 'bg-teal-500/20 text-teal-400'
                  : 'text-slate-400 hover:text-teal-400'
              }`}
            >
              <Bookmark className="w-4 h-4" />
            </button>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors duration-300 text-sm"
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
  const revealRef = useScrollReveal();

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSave = (postId) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, saved: !post.saved } : post
    ));
  };

  return (
    <div className="relative" ref={revealRef}>
      <div className="flex items-center justify-between mb-12 reveal">
        <div className="space-y-1">
          <h2 className="section-heading">Latest Blog Posts</h2>
          <p className="text-slate-400">Thoughts, tutorials, and insights</p>
        </div>

        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 px-4 py-2 pl-10 bg-slate-800/60 border border-slate-700/50 rounded-xl
                       focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30
                       transition-all duration-300 text-slate-100 text-sm placeholder:text-slate-500"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-8 reveal reveal-delay-1">
        <Filter className="w-4 h-4 text-slate-500" />
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                : "bg-slate-800/60 text-slate-400 border border-slate-700/50 hover:border-teal-500/30 hover:text-teal-400"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal reveal-delay-2">
        {filteredPosts.map(post => (
          <BlogCard key={post.id} post={post} onSave={handleSave} />
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12 reveal">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-slate-300 mb-2">No posts found</h3>
          <p className="text-slate-400">Try adjusting your search or filter to find what you're looking for</p>
        </div>
      )}
    </div>
  );
};

export default BlogPosts;
