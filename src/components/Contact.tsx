import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'vvyshnavi168@gmail.com',
      link: 'mailto:vvyshnavi168@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91-9072974408',
      link: 'tel:+919072974408',
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'vyshnavi-n',
      link: 'https://www.linkedin.com/in/vyshnavi-n/',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'vyshnavin079',
      link: 'https://github.com/vyshnavin079',
    },
  ];

  return (
    <section id="contact" className="section-shell band-dark">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="section-title text-center">
            Get In <span className="text-pink-300">Touch</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xl muted-text mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex items-center justify-center gap-2 text-zinc-400">
                <MapPin size={20} />
                <span>Punjab, India</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card p-6 hover:scale-105 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-pink-200 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-zinc-400 mb-1">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="mailto:vvyshnavi168@gmail.com"
                className="inline-block px-8 py-4 bg-pink-300 text-black font-semibold rounded-lg hover:bg-pink-200 transition-all hover:scale-105"
              >
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-pink-400/20 text-center text-zinc-400">
        <p>© 2025 Vyshnavi N. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;
