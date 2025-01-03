import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = {
    email: "nihalmd1@gmail.com",
    phone: "",
    location: "Dhaka, Bangladesh",
    socials: [
      { icon: Github, link: "#", label: "GitHub" },
      { icon: Linkedin, link: "#", label: "LinkedIn" }
    ]
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-100 mb-4">Let's Connect</h3>
        <p className="text-gray-400">
          Feel free to reach out for collaborations, research opportunities, or just to say hello!
        </p>
      </div>

      <div className="space-y-6">
        <ContactItem
          icon={Mail}
          label="Email"
          value={contactDetails.email}
          href={`mailto:${contactDetails.email}`}
        />
        
        <ContactItem
          icon={Phone}
          label="Phone"
          value={contactDetails.phone}
          href={`tel:${contactDetails.phone}`}
        />
        
        <ContactItem
          icon={MapPin}
          label="Location"
          value={contactDetails.location}
        />

        <div className="flex gap-4 pt-6">
          {contactDetails.socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                className="p-3 bg-gray-700/50 rounded-xl hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all duration-300"
                aria-label={social.label}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon: Icon, label, value, href }) => (
  <div className="flex items-center gap-4 group">
    <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-all duration-300">
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      {href ? (
        <a
          href={href}
          className="text-gray-200 hover:text-blue-400 transition-colors duration-300"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-200">{value}</p>
      )}
    </div>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />

        <FormField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
        />

        <FormField
          label="Message"
          type="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

const FormField = ({ label, type, name, value, onChange, placeholder, required }) => (
  <div>
    <label htmlFor={name} className="block text-sm text-gray-400 mb-2">
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        rows={4}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-gray-100"
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-gray-100"
      />
    )}
  </div>
);

const Contact = () => {
  return (
    <section className="relative py-20" id="contact">
      {/* Background gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full" />
        <div className="absolute right-0 top-0 bg-purple-500/5 blur-[100px] rounded-full h-[300px] w-[300px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;