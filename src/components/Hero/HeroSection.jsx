const HeroSection = () => (
    <header className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
  
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="text-blue-400 font-medium">Hi there, I'm</h4>
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                John Doe
              </h1>
              <p className="text-lg text-gray-400">Computer Science Graduate Student</p>
            </div>
            {/* Rest of the hero content */}
            <HeroStats />
          </div>
          <ProfileImage />
        </div>
      </div>
    </header>
  );