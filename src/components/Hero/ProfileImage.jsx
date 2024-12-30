const ProfileImage = () => (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
      <div className="relative">
        <div className="rounded-2xl overflow-hidden border-2 border-gray-700/50 group-hover:border-blue-500/50 transition duration-300">
          <img 
            src="/api/placeholder/400/500"
            alt="Profile Picture"
            className="w-full h-[400px] object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 p-3 bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700/50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-gray-300">Available for opportunities</span>
          </div>
        </div>
      </div>
    </div>
  );