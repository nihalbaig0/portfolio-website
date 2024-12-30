const SectionHeader = ({ icon: Icon, title, subtitle }) => (
    <div className="flex items-center gap-4 mb-4">
      <div className="p-2 bg-blue-500/10 rounded-xl">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <div>
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          {title}
        </h2>
        {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}
      </div>
    </div>
  );