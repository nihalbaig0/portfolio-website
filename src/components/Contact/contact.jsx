import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const ContactInfo = () => {
  const contactDetails = {
    email: "nihalmd1@gmail.com",
    phoneDisplay: "+880-1854794578",
    phoneHref: "+8801854794578",
    location: "Dhaka, Bangladesh",
    socials: [
      { icon: Github, link: "https://github.com/nihalbaig0", label: "GitHub" },
      { icon: Linkedin, link: "https://www.linkedin.com/in/mirza-nihal-baig-0361971a0/", label: "LinkedIn" }
    ]
  };

  return (
    <div className="glass-card p-8 rounded-2xl">
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-slate-100 mb-4">Let's Connect</h3>
        <p className="text-slate-400">
          Feel free to reach out for collaborations, research opportunities, or just to say hello!
        </p>
      </div>

      <div className="space-y-6">
        <ContactItem icon={Mail} label="Email" value={contactDetails.email} href={`mailto:${contactDetails.email}`} />
        <ContactItem icon={Phone} label="Phone" value={contactDetails.phoneDisplay} href={`tel:${contactDetails.phoneHref}`} />
        <ContactItem icon={MapPin} label="Location" value={contactDetails.location} />

        <div className="flex gap-4 pt-6">
          {contactDetails.socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/60 border border-slate-700/50 rounded-xl
                           hover:border-teal-500/30 hover:bg-teal-500/5 text-slate-400 hover:text-teal-400
                           transition-all duration-300"
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
    <div className="p-3 bg-teal-500/10 rounded-xl group-hover:bg-teal-500/15 transition-all duration-300">
      <Icon className="w-6 h-6 text-teal-400" />
    </div>
    <div>
      <p className="text-sm text-slate-400">{label}</p>
      {href ? (
        <a href={href} className="text-slate-200 hover:text-teal-400 transition-colors duration-300">
          {value}
        </a>
      ) : (
        <p className="text-slate-200">{value}</p>
      )}
    </div>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        const parts = [
          data?.error,
          data?.details,
          data?.hint,
          data?.resendStatus != null ? `(Resend HTTP ${data.resendStatus})` : null,
        ].filter(Boolean);
        throw new Error(parts.length ? parts.join(' — ') : 'Could not send message right now.');
      }

      setFormData({ name: '', email: '', message: '' });
      setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' });
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong while sending your message.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = `w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl
                        focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/30
                        transition-all duration-300 text-slate-100 placeholder:text-slate-500`;

  return (
    <div className="glass-card p-8 rounded-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm text-slate-400 mb-2">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                 placeholder="Your name" required className={inputClasses} />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-slate-400 mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                 placeholder="your@email.com" required className={inputClasses} />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-slate-400 mb-2">Message</label>
          <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange}
                    placeholder="Your message..." required className={inputClasses} />
        </div>

        <button type="submit" disabled={isSubmitting} className="accent-button w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
          <Send className="w-5 h-5" />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {status.message && (
          <p className={`text-sm ${status.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`}>
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
};

const Contact = () => {
  const revealRef = useScrollReveal();

  return (
    <div className="relative" ref={revealRef}>
      <h2 className="section-heading mb-12 reveal">Get in Touch</h2>

      <div className="grid md:grid-cols-2 gap-8 reveal reveal-delay-1">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
