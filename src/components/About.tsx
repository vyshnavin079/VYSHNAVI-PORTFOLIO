const About = () => {
  return (
    <section id="about" className="section-shell band-dark">
      <div className="max-w-7xl mx-auto">
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="section-title">
            About <span className="text-pink-300">Me</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-8 space-y-6">
              <p className="text-lg muted-text leading-relaxed">
                I'm a Computer Science student at{' '}
                <span className="text-white font-semibold">Lovely Professional University</span>,
                focused on solving practical problems through structured thinking and clean
                implementation. I build projects that improve usability, automate repetitive tasks,
                and reflect strong fundamentals in data structures and core programming concepts.
              </p>
              <p className="text-lg muted-text leading-relaxed">
                I spend time improving my skills through regular coding practice, project-based
                learning, and feedback-driven iteration. My goal is to keep building reliable
                software while continuously improving the way I design, debug, and deliver
                solutions.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
