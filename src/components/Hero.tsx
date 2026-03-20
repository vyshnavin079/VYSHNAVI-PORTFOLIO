import { Github, Linkedin, Mail, Phone, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="section-shell band-hero !py-20 flex items-center relative z-10 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="mb-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-[0.04em] mb-3 text-white">
                VYSHNAVI N
              </h1>
            </div>

            <p className="text-base md:text-lg text-zinc-300 mb-8 max-w-xl mx-auto md:mx-0 animate-fade-in-delay tracking-wide font-sans">
              Future Software Engineer <span className="text-pink-300 px-2">|</span> Building
              real-world applications and improving through hands-on experience.
            </p>
          </div>

          <div className="hidden md:flex justify-center animate-fade-in-delay">
            <div className="glass-card p-4 rounded-3xl">
              <img
                src="/vyshu-removebg-preview.png"
                alt="Vyshnavi N"
                className="w-56 h-56 object-cover rounded-2xl border border-pink-300/20"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-delay-2 mt-10">
          <a
            href="https://github.com/vyshnavin079"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 glass-card rounded-lg transition-all hover:scale-105"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/vyshnavi-n/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 glass-card rounded-lg transition-all hover:scale-105"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:vvyshnavi168@gmail.com"
            className="flex items-center gap-2 px-6 py-3 glass-card rounded-lg transition-all hover:scale-105"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a
            href="tel:+919072974408"
            className="flex items-center gap-2 px-6 py-3 glass-card rounded-lg transition-all hover:scale-105"
          >
            <Phone size={20} />
            <span>Contact</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 animate-fade-in-delay-3">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-pink-300 text-black font-semibold rounded-lg hover:bg-pink-200 transition-all hover:scale-105"
          >
            View My Work
          </button>
          <a
            href="/vyshnavi.ncv.pdf"
            download="Vyshnavi_N_CV.pdf"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border-2 border-pink-300/60 text-pink-100 font-semibold rounded-lg hover:bg-pink-200 hover:text-black transition-all hover:scale-105"
          >
            <Download size={20} />
            Download CV
          </a>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-pink-300/60 text-pink-100 font-semibold rounded-lg hover:bg-pink-200 hover:text-black transition-all hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
