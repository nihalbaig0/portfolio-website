const BlogCard = ({ post }) => (
    <div className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <Calendar size={16} />
          <span>{post.date}</span>
          <span>•</span>
          <Clock size={16} />
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-gray-400 mb-4">{post.preview}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag, tagIndex) => (
            <span key={tagIndex} className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm">
              {tag}
            </span>
          ))}
        </div>
        <a href="#" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300">
          Read More
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
  