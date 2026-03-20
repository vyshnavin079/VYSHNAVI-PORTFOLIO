import { Code2, Database, Wrench, Brain, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} />,
      skills: ['C++', 'C', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks',
      icon: <Database size={24} />,
      skills: ['Node.js', 'Flask', 'React'],
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench size={24} />,
      skills: ['VS Code', 'Git', 'GitHub', 'Linux', 'MySQL'],
    },
    {
      title: 'Core Skills',
      icon: <Brain size={24} />,
      skills: ['Data Structures', 'Algorithms', 'Problem Solving'],
    },
    {
      title: 'Soft Skills',
      icon: <Users size={24} />,
      skills: ['Team Collaboration', 'Proactive Thinking', 'Adaptability'],
    },
  ];

  return (
    <section id="skills" className="section-shell band-mid">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="section-title">
            Skills & <span className="text-pink-300">Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-card p-8 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-pink-200 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="glass-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
