import { ExternalLink, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Goal Tracker Chatbot',
      date: 'March 2025',
      description:
        'Developed an interactive chatbot to assist users in tracking and managing daily goals, improving productivity and task consistency through conversational AI.',
      tech: ['Python', 'Flask', 'REST API', 'JavaScript', 'Gemini AI'],
      highlights: [
        'Conversational logic for goal creation and updates',
        'Real-time tracking with personalized feedback',
        'Improved user engagement during testing',
      ],
      link: 'https://github.com/vyshnavin079',
      image: '/chatbot.webp',
    },
    {
      title: 'AI-Powered Directory Management',
      date: 'April 2025',
      description:
        'Built an intelligent file management system to automatically organize and categorize files based on type and content, enhancing directory structure and accessibility.',
      tech: ['Java', 'File I/O', 'Java NIO', 'Data Structures'],
      highlights: [
        'Automatic file classification and organization',
        'Dynamic folder structuring',
        'Efficient error handling and management',
      ],
      link: 'https://github.com/vyshnavin079',
      image: '/directory.png',
    },
    {
      title: 'Personal Contact Management System',
      date: 'July 2025',
      description:
        'Created a console-based application to efficiently manage contacts with features for adding, viewing, searching, updating, and deleting entries.',
      tech: ['Python', 'OOP', 'Data Structures'],
      highlights: [
        'Validation logic to prevent duplicates',
        'Menu-driven interface',
        'Efficient data handling',
      ],
      link: 'https://github.com/vyshnavin079',
      image: '/contact.png',
    },
  ];

  return (
    <section id="projects" className="section-shell band-light">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="section-title">
            Featured <span className="text-pink-200">Projects</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card overflow-hidden hover:scale-[1.01] group"
              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-pink-200 transition-colors hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-zinc-400 mb-4">
                    <Calendar size={16} />
                    <span className="text-sm">{project.date}</span>
                  </div>

                  <p className="muted-text mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-zinc-400">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm muted-text flex items-start"
                        >
                          <span className="mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="glass-pill text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-3 mt-4">
                    <a href={project.link} target="_blank">
                      <button className="px-3 py-1 bg-zinc-800 rounded hover:bg-zinc-700 text-sm">
                        GitHub
                      </button>
                    </a>

                    <button className="px-3 py-1 bg-pink-500 rounded hover:bg-pink-400 text-sm">
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;