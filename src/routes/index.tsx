import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Phone,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code2,
  Database,
  Globe,
  Server,
  Wrench,
  Brain,
  Sparkles,
  ArrowRight,
  MapPin,
  Send,
  Cpu,
  Layers,
  GitBranch,
} from "lucide-react";
import { Reveal } from "@/components/portfolio/Reveal";
import { Counter } from "@/components/portfolio/Counter";
import { Nav } from "@/components/portfolio/Nav";
import { useState } from "react";
import { de } from "date-fns/locale";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "C++", level: 75 },
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    items: [
      { name: "React.js", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3 / Tailwind CSS", level: 88 },
      { name: "React.js", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "Flask", level: 78 },
      { name: "REST API Design", level: 85 },
    ],
  },
  {
    title: "Database & ORM",
    icon: Database,
    items: [
      { name: "MongoDB", level: 82 },
      { name: "Mongoose", level: 78 },
      { name: "SQL", level: 78 },
      { name: "Database Design", level: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "Postman", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "JWT Authentication", level: 78 },
    ],
  },
  {
    title: "AI & Integrations",
    icon: Brain,
    items: [
      { name: "Google Gemini AI", level: 80 },
      { name: "OpenRouter AI", level: 78 },
      { name: "Axios / API Integration", level: 85 },
    ],
  },
  {
    title: "Core Concepts",
    icon: Sparkles,
    items: [
      { name: "Data Structures", level: 80 },
      { name: "OOP", level: 85 },
      { name: "Problem Solving", level: 88 },
      { name: "Responsive Design", level: 90 },
    ],
  },
];

const services = [
  {
    icon: Globe,
    title: "Frontend Web Development",
    desc: "Responsive and interactive UIs built with HTML, CSS, and React.js.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Flask-based REST API development for dynamic, data-driven apps.",
  },
  {
    icon: Layers,
    title: "API Integration",
    desc: "Connecting modern apps to third-party services and data sources.",
  },
  {
    icon: Cpu,
    title: "Python Application Development",
    desc: "Desktop apps and automation projects with clean Python code.",
  },
  {
    icon: Database,
    title: "Database Integration",
    desc: "SQL-based design and integration for scalable applications.",
  },
  {
    icon: GitBranch,
    title: "Git & GitHub Workflow",
    desc: "Version control, collaboration, and clean commit history.",
  },
];

const projects = [
  {
    title: "HireReady",
    tags: ["React.js", "Node.js", "MongoDB", "Google Gemini AI", "JWT Auth"],
    desc: "An AI-powered hiring preparation platform that parses resumes (PDF), generates personalized interview questions and feedback using Google Gemini AI, with secure user authentication.",
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
    emoji: "💼",
    demoLink:"https://hire-ready-eta.vercel.app",
  },
   {
    title: "AI Code Reviewer",
    tags: ["React.js", "Node.js", "Express", "OpenRouter AI"],
    desc: "An AI-powered code review tool that analyzes user-submitted code via OpenRouter's AI models and returns detailed suggestions with syntax-highlighted markdown output.",
    gradient: "from-cyan-500/30 via-blue-500/20 to-violet-500/30",
    emoji: "🧠",
    demoLink:"https://code-review-beta-beryl.vercel.app",
  },
  {
    title: "AlphaClothing",
    tags: ["React.js", "MongoDB", "Mongoose", "Axios", "React Router"],
    desc: "A clothing e-commerce web app built with React.js and MongoDB, featuring smooth navigation and dynamic product data via Axios.",
    gradient: "from-rose-500/30 via-pink-500/20 to-blue-500/30",
    emoji: "👕",
    demoLink:"https://alpha-clothing-ten.vercel.app",
  },
  {
    title: "Jarvis Voice Assistant",
    tags: ["Python", "Speech Recognition", "APIs"],
    desc: "A voice-controlled virtual assistant with speech recognition, text-to-speech, Google search, YouTube playback, news updates, and system control.",
    gradient: "from-violet-500/30 via-fuchsia-500/20 to-blue-500/30",
    emoji: "🎙️",
  },
  {
    title: "Google Translator Desktop App",
    tags: ["Python", "Tkinter", "Google API"],
    desc: "Desktop language translation app built with Python and Tkinter, integrating the Google Translate API for real-time multilingual translation.",
    gradient: "from-blue-500/30 via-cyan-500/20 to-violet-500/30",
    emoji: "🌐",
  },
  {
    title: "Movie Web App",
    tags: ["React.js", "REST API", "Tailwind"],
    desc: "A responsive movie discovery app built with React.js that dynamically fetches and displays movie info via external APIs.",
    gradient: "from-fuchsia-500/30 via-purple-500/20 to-blue-500/30",
    emoji: "🎬",
  }
];

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* floating orbs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-violet-600/30 blur-3xl animate-float" />
      <div className="pointer-events-none absolute top-40 -right-10 h-80 w-80 rounded-full bg-blue-600/30 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-violet-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </div>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Hi, I'm <span className="text-gradient animate-gradient">Nikhil Kumar Singh</span>
            </h1>
            <p className="mt-5 text-xl md:text-2xl text-muted-foreground">
              Aspiring Software Developer •{" "}
              <span className="text-foreground">Python & Web Developer</span>
            </p>
            <p className="mt-5 max-w-xl text-base text-muted-foreground leading-relaxed">
              Aspiring Software Developer passionate about building modern web applications,
              Python projects, and practical digital solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 font-medium text-white btn-glow hover:scale-[1.04] transition-transform"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-medium text-foreground hover:bg-white/10 transition-colors"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
              <a
                href="/nik_resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-violet-500/40 px-6 py-3 font-medium text-violet-200 hover:bg-violet-500/10 transition-colors"
              >
              <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5 text-muted-foreground">
              <a href="https://github.com/NikhilSingh3082004" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/nikhil-kumar-singh-2a5a61269" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:nikhilsingh118089@gmail.com" className="hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile */}
          <div className="flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: "150ms" }}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-violet-500 via-blue-500 to-fuchsia-500 blur-2xl opacity-60 animate-pulse-glow" />
              <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-full glow-border overflow-hidden bg-gradient-to-br from-violet-900 to-blue-900 grid place-items-center">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative text-center px-6">
                  <div className="text-7xl md:text-8xl font-bold text-gradient">NS</div>
                  <div className="mt-2 text-xs text-muted-foreground font-mono">profile.placeholder</div>
                </div>
              </div>
              {/* floating tech chips */}
              {/* floating tech chips */}
              <div className="absolute -top-3 -left-4 glass rounded-xl px-3 py-2 text-xs font-mono animate-float">
                {"</>"} React
              </div>
              <div className="absolute -bottom-3 -right-2 glass rounded-xl px-3 py-2 text-xs font-mono animate-float-slow">
                🐍 Python
              </div>
              <div className="absolute top-1/2 -right-6 glass rounded-xl px-3 py-2 text-xs font-mono animate-float">
                ⚡ Flask
              </div>
              <div className="absolute top-8 -right-10 glass rounded-xl px-3 py-2 text-xs font-mono animate-float-slow hidden sm:block">
                🟢 Node.js
              </div>
              <div className="absolute -top-6 right-1/3 glass rounded-xl px-3 py-2 text-xs font-mono animate-float hidden sm:block">
                🚂 Express
              </div>
              <div className="absolute bottom-10 -left-10 glass rounded-xl px-3 py-2 text-xs font-mono animate-float-slow hidden sm:block">
                🍃 MongoDB
              </div>
              <div className="absolute top-1/3 -left-12 glass rounded-xl px-3 py-2 text-xs font-mono animate-float hidden sm:block">
                🎨 Tailwind
              </div>
              <div className="absolute -bottom-8 left-1/4 glass rounded-xl px-3 py-2 text-xs font-mono animate-float-slow hidden md:block">
                🟠 HTML
              </div>
              <div className="absolute top-4 left-1/4 glass rounded-xl px-3 py-2 text-xs font-mono animate-float hidden md:block">
                🔵 CSS
              </div>
              <div className="absolute bottom-1/3 -right-4 glass rounded-xl px-3 py-2 text-xs font-mono animate-float-slow hidden md:block">
                🟡 JS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION HEADER ---------------- */
function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal>
      <div className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1 text-xs font-mono uppercase tracking-widest text-violet-200">
          {eyebrow}
        </div>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
          <span className="text-gradient">{title}</span>
        </h2>
      </div>
    </Reveal>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="About Me" title="Crafting code, building solutions" />

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="glass rounded-2xl p-8 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Nikhil Kumar Singh</span>,  a
                Computer Engineering student and an aspiring{" "}
                <span className="text-foreground font-semibold">Full Stack Developer</span>{" "}
                passionate about building modern web applications, working across the
                MERN stack, and solving real-world problems through clean, efficient code.
              </p>
              <p>
                I enjoy building responsive web applications, developing REST APIs
                with Node.js and Flask, and integrating databases like MongoDB.
                My focus stays on writing clean, maintainable, and user-friendly solutions
                while continuously exploring new technologies.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {["Python", "React.js", "Flask", "REST APIs", "SQL", "Git"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-violet-500/10 border border-violet-500/30 px-3 py-1 text-xs font-mono text-violet-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects Completed", value: 10, suffix: "+" },
                { label: "Technologies Learned", value: 18, suffix: "+" },
                //{ label: "GitHub Contributions", value: 240, suffix: "+" },
                //{ label: "Cups of Coffee", value: 999, suffix: "+" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-colors"
                >
                  <div className="text-4xl font-bold text-gradient">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EDUCATION ---------------- */
function Education() {
  const items = [
    {
      title: "Bachelor of Technology — Computer Engineering",
      place: "Marwadi University, Rajkot, Gujarat",
      time: "2022 – 2026",
    },
    {
      title: "Higher Secondary Education",
      place: "RNP Public School",
      time: "2020 – 2021",
    },
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Education" title="My academic journey" />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-blue-500/40 to-transparent md:-translate-x-1/2" />
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 100}>
              <div
                className={`relative mb-10 md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
                }`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                  <div className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all hover:-translate-y-1">
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-violet-300">
                      <GraduationCap className="h-3.5 w-3.5" /> {it.time}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold">{it.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{it.place}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
                <span className="absolute left-4 md:left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 ring-4 ring-background btn-glow" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */
function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Skills" title="My technical toolbox" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((g, i) => {
            const Icon = g.icon;
            return (
              <Reveal key={g.title} delay={i * 80}>
                <div className="group glass rounded-2xl p-6 h-full hover:-translate-y-1 transition-all hover:shadow-[0_20px_60px_-20px_rgba(124,58,237,0.5)]">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-blue-500/30 border border-violet-500/30 text-violet-200 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold">{g.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {g.items.map((s) => (
                      <div key={s.name}>
                        <div className="flex justify-between text-xs text-muted-foreground mb-1">
                          <span>{s.name}</span>
                          <span className="font-mono">{s.level}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-1000"
                            style={{ width: `${s.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Services" title="What I can build for you" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 70}>
                <div className="group relative glass rounded-2xl p-7 h-full overflow-hidden hover:-translate-y-1 transition-all">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-violet-500/10 via-transparent to-blue-500/10" />
                  <div className="relative">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-white btn-glow">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Projects" title="Selected work" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="group glass rounded-2xl overflow-hidden h-full flex flex-col hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_30px_80px_-20px_rgba(124,58,237,0.5)]">
                <div className={`relative h-44 bg-gradient-to-br ${p.gradient} grid place-items-center overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <span className="relative text-6xl">{p.emoji}</span>
                  <span className="absolute top-3 right-3 text-[10px] font-mono text-white/70">
                    /project/0{i + 1}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-violet-500/10 border border-violet-500/30 px-2.5 py-0.5 text-[11px] font-mono text-violet-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2">
                    <a
                      href="https://github.com/NikhilSingh3082004"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg glass px-3 py-2 text-xs font-medium hover:bg-white/10 transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                    <a
                      href={p.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 px-3 py-2 text-xs font-medium text-white hover:scale-[1.03] transition-transform"
                    >
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
function Experience() {
  const items = [
    {
      title: "Fresher Software Developer",
      desc: "Building hands-on experience through academic and personal projects, focused on shipping practical, user-friendly solutions.",
    },
    {
      title: "Web & Python Practitioner",
      desc: "Working with Python, React.js, Flask, REST APIs, and SQL to design responsive applications end-to-end.",
    },
    {
      title: "Continuous Learner",
      desc: "Strong focus on problem-solving, clean code, and continuously expanding the technical toolbox.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Experience" title="Learning journey" />

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 120}>
              <div className="glass rounded-2xl p-6 h-full hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[120px] font-bold leading-none text-white/[0.03] select-none">
                  0{i + 1}
                </div>
                <div className="relative">
                  <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-blue-500/30 border border-violet-500/30 text-violet-200">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-semibold text-lg">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle eyebrow="Contact" title="Let's build something great" />

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Reveal>
            <div className="glass rounded-2xl p-8 space-y-5">
              <h3 className="text-2xl font-semibold">Get in touch</h3>
              <p className="text-muted-foreground text-sm">
                Have a project in mind or want to collaborate? Send a message and I'll get back as
                soon as I can.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href="mailto:nikhilsingh118089@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-violet-500/20 border border-violet-500/30 text-violet-200 group-hover:scale-110 transition-transform">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="text-sm group-hover:text-violet-200 transition-colors break-all">
                    nikhilsingh118089@gmail.com
                  </span>
                </a>
                <a href="tel:+919608238071" className="flex items-center gap-3 group">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-200 group-hover:scale-110 transition-transform">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="text-sm group-hover:text-blue-200 transition-colors">
                    +91 9608238071
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-fuchsia-500/20 border border-fuchsia-500/30 text-fuchsia-200">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-muted-foreground">Rajkot, Gujarat, India</span>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <a
                  href="https://www.linkedin.com/in/nikhil-kumar-singh-2a5a61269"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-xl glass hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/NikhilSingh3082004"
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-xl glass hover:bg-white/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 3500);
                (e.target as HTMLFormElement).reset();
              }}
              className="glass rounded-2xl p-8 space-y-4"
            >
              <Field label="Your Name" name="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="jane@example.com" />
              <Field label="Subject" name="subject" placeholder="Project inquiry" />
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-violet-400/60 focus:bg-white/[0.08] transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 px-6 py-3 font-medium text-white btn-glow hover:scale-[1.02] transition-transform"
              >
                {sent ? "Message Sent ✓" : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}
      </label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-violet-400/60 focus:bg-white/[0.08] transition-all"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 mt-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 btn-glow">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="text-gradient text-lg">Nikhil.dev</span>
          </a>
          <ul className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground">About</a></li>
            <li><a href="#projects" className="hover:text-foreground">Projects</a></li>
            <li><a href="#services" className="hover:text-foreground">Services</a></li>
            <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
          </ul>
          <div className="flex items-center gap-3 text-muted-foreground">
            <a href="https://github.com/NikhilSingh3082004" target="_blank" rel="noreferrer" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/in/nikhil-kumar-singh-2a5a61269" target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
            <a href="mailto:nikhilsingh118089@gmail.com" className="hover:text-foreground"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nikhil Kumar Singh · Built with passion and code ⚡
        </div>
      </div>
    </footer>
  );
}
