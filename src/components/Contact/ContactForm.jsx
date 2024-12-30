const ContactForm = () => (
    <form className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Name</label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-gray-100"
          placeholder="Your name"
        />
      </div>
      {/* Other form fields */}
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  );