import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: 'Lovely Professional University',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      location: 'Punjab, India',
      period: 'August 2023 - Present',
      grade: '',
    },
    {
      institution: 'Government Girls Higher Secondary School',
      degree: 'Intermediate',
      location: 'Kerala, India',
      period: 'April 2020 - March 2022',
      grade: 'Percentage: 91%',
    },
    {
      institution: "St. Mary's Girls High School",
      degree: 'Matriculation',
      location: 'Kerala, India',
      period: 'April 2019 - March 2020',
      grade: 'Percentage: 95%',
    },
  ];

  return (
    <>
      <section id="training" className="section-shell band-dark !pt-24 !pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="section-title">
              Technical <span className="text-pink-300">Training</span>
            </h2>

            <div className="glass-card p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <h3 className="text-2xl font-bold text-white">
                  CSE Pathshala - Data Structures & Algorithms using Python
                </h3>
                <span className="text-sm text-zinc-400 whitespace-nowrap">June-July 2025</span>
              </div>

              <a
                href="https://github.com/vyshnavin079/contact-management-system.git"
                target="_blank"
                rel="noopener noreferrer"
                className="purple-link inline-block text-sm mb-4"
              >
                View Certificate
              </a>

              <ul className="list-disc list-inside space-y-2 muted-text">
                <li>
                  Completed a 35+ hour structured live training program on Data Structures and Algorithms
                </li>
                <li>Built a Personal Contact Management System using Python and OOP</li>
                <li>Used lists, dictionaries, and sets for efficient data handling</li>
                <li>Gained practical experience in Python, OOP, and problem-solving</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section-shell band-dark !pt-12 !pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="section-title">
              <span className="text-pink-300">Education</span>
            </h2>

            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap size={32} className="text-pink-200" />
                <h3 className="text-3xl font-bold">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="glass-card p-6"
                  >
                    <h4 className="text-xl font-bold mb-2">{edu.institution}</h4>
                    <p className="muted-text mb-2">{edu.degree}</p>
                    <div className="flex justify-between items-center text-sm text-zinc-400">
                      <span>{edu.location}</span>
                      <span>{edu.grade}</span>
                    </div>
                    <p className="text-sm text-zinc-500 mt-2">{edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 glass-card p-8 bg-gradient-to-r from-pink-500/10 to-transparent">
              <h3 className="text-2xl font-bold mb-4 text-center">Continuous Learning</h3>
              <p className="muted-text text-center max-w-3xl mx-auto leading-relaxed">
                Committed to continuous learning through consistent practice, hands-on projects,
                and real-world problem solving.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
