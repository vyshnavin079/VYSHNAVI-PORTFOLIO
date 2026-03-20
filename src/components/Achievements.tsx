import { Trophy, Code, Target, Award, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Code size={32} />,
      title: 'DSA Problems',
      description: 'Solved on LeetCode',

      link: 'https://leetcode.com/u/Vyshnavi__n/',
    },
    {
      icon: <Target size={32} />,
      title: 'DSA Problems',
      description: 'Solved on GeeksforGeeks',
      link: 'https://www.geeksforgeeks.org/profile/vvyshnavi0987',
    },
    {
      icon: <Trophy size={32} />,
      title: 'Code-A-Haunt',
      description: 'Hackathon Participant',
      metric: '2024',
      link: 'https://drive.google.com/file/d/1_ytRZiZ8B9jAvWGDFAK3d8n-ZjzeCy-5/view?usp=sharing',
    },
  ];

  const certificates = [
    {
      title: 'NPTEL Cloud Computing',
      date: 'October 2025',
      link: 'https://drive.google.com/file/d/1OWjdPWXFudSdzOjpPc0CZY27nMN8Sqnr/view?usp=sharing',
      icon: <Award size={20} />,
    },
    {
      title: 'CSE Pathshala Python Using Data Structures & Algorithms',
      date: 'August 2025',
      link: 'https://drive.google.com/file/d/1YptJ97VPw38nW8vjsuyzJmn9Zw99gprO/view?usp=sharing',
      icon: <Award size={20} />,
    },
    {
      title: 'Coursera Computer Communications Specialization',
      date: 'December 2024',
      link: 'https://drive.google.com/file/d/1LvPKAtdLwZbwc_Y2G_JSyVBrdi6n-rRn/view?usp=sharing',
      icon: <Award size={20} />,
    },
    {
      title: 'Coursera The Bits and Bytes of Computer Networking',
      date: 'September 2024',
      link: 'https://drive.google.com/file/d/1VPLesYdhCQujlGDsvLNSp9XlQMNPUP7Y/view?usp=sharing',
      icon: <Award size={20} />,
    },
    {
      title: 'FreeCodeCamp Responsive Web Design',
      date: 'October 2023',
      link: 'https://drive.google.com/file/d/12RgIX-ds9mDwzCYHe8C6PunHDPAGQNFL/view?usp=sharing',
      icon: <Award size={20} />,
    },
  ];

  return (
    <section id="achievements" className="section-shell band-rose">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="section-title">
            <span className="text-pink-100">Achievements</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/25 to-rose-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-60"></div>
                <div className="relative glass-card p-8 text-center hover:scale-105">
                  <div className="flex justify-center mb-4 text-pink-200 group-hover:scale-110 transition-transform">
                    {achievement.icon}
                  </div>
                  <div className="text-4xl font-bold mb-2">{achievement.metric}</div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-zinc-400">{achievement.description}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Certificates</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 group flex items-between justify-between hover:scale-[1.01]"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-pink-200 group-hover:scale-110 transition-transform">
                        {cert.icon}
                      </span>
                      <h4 className="font-semibold text-white">{cert.title}</h4>
                    </div>
                    <p className="text-sm text-zinc-400">{cert.date}</p>
                  </div>
                  <div className="text-zinc-400 group-hover:text-pink-200 transition-colors ml-4">
                    <ExternalLink size={18} />
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
