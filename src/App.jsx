import { useEffect, useRef, useState } from "react";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const links = {
  github: "#",
  linkedin: "#",
  resume: "#",
};

const projects = [
  {
    title: "M1llion Fitness",
    description:
      "Landing page for a fitness brand with coaching sections, Instagram embed, and polished responsive layout.",
    tags: ["React", "Tailwind", "Formspree"],
    live: "#",
    repo: "#",
  },
  {
    title: "Restaurant Page",
    description:
      "Multi-section UI project showcasing layout, navigation, and reusable components.",
    tags: ["JavaScript", "CSS", "UI"],
    live: "#",
    repo: "#",
  },
  {
    title: "Networking Labs",
    description:
      "Course projects demonstrating IPv4/IPv6 concepts and practical configuration work.",
    tags: ["Networking", "IPv4", "IPv6"],
    live: "#",
    repo: "#",
  },
];

const skillChips = [
  "React",
  "Tailwind",
  "JavaScript",
  "HTML/CSS",
  "Responsive UI",
  "Accessibility",
  "Git/GitHub",
  "Vite",
  "APIs",
  "SQL (coursework)",
  "Figma",
];

function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="max-w-3xl">
      {kicker ? (
        <p className="text-xs uppercase tracking-widest text-slate-400">{kicker}</p>
      ) : null}
      <h2 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-slate-50">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 text-slate-300 leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}

function PillLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10 transition ${focusRing}`}
    >
      {children}
    </a>
  );
}

export default function App() {
  const year = new Date().getFullYear();
  const [mobileOpen, setMobileOpen] = useState(false);

  const mobileNavRef = useRef(null);
  const mobileBtnRef = useRef(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const onPointerDown = (e) => {
      const nav = mobileNavRef.current;
      const btn = mobileBtnRef.current;
      if (!nav || !btn) return;
      if (!nav.contains(e.target) && !btn.contains(e.target)) setMobileOpen(false);
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Skip link */}
      <a
        href="#main"
        className={`sr-only focus:not-sr-only fixed top-3 left-3 z-[9999] bg-slate-950 border border-white/15 rounded-xl px-4 py-2 shadow ${focusRing}`}
      >
        Skip to content
      </a>

      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <a
            href="#top"
            className={`font-black tracking-tight text-slate-50 hover:text-white ${focusRing}`}
          >
            Sergio Padilla<span className="text-slate-400">.dev</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <a href="#projects" className={`hover:text-white transition ${focusRing}`}>
              Projects
            </a>
            <a href="#skills" className={`hover:text-white transition ${focusRing}`}>
              Skills
            </a>
            <a href="#about" className={`hover:text-white transition ${focusRing}`}>
              About
            </a>
            <a href="#contact" className={`hover:text-white transition ${focusRing}`}>
              Contact
            </a>
          </nav>

          {/* Mobile button */}
          <button
            ref={mobileBtnRef}
            type="button"
            className={`md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm font-medium text-slate-100 hover:bg-white/10 transition ${focusRing}`}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            Menu
          </button>
        </div>

        {/* Mobile nav */}
        <nav
          id="mobile-nav"
          ref={mobileNavRef}
          className={`md:hidden border-t border-white/10 bg-slate-950 ${mobileOpen ? "block" : "hidden"}`}
        >
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2 text-sm font-medium">
            <a href="#projects" onClick={closeMobile} className={`py-2 ${focusRing}`}>
              Projects
            </a>
            <a href="#skills" onClick={closeMobile} className={`py-2 ${focusRing}`}>
              Skills
            </a>
            <a href="#about" onClick={closeMobile} className={`py-2 ${focusRing}`}>
              About
            </a>
            <a href="#contact" onClick={closeMobile} className={`py-2 ${focusRing}`}>
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        {/* HERO — unique layout */}
        <section id="top" className="scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4 pt-14 pb-10 md:pt-20 md:pb-16">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-950 to-indigo-950/40">
              {/* subtle glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />

              <div className="grid gap-10 lg:grid-cols-[260px_1fr] p-6 sm:p-10">
                {/* Left “Command Center” */}
                <aside className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-widest text-slate-300">
                    Availability
                  </p>
                  <p className="mt-2 text-sm text-slate-200">
                    Open to Front-End roles
                  </p>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl border border-white/10 bg-slate-950/40 p-3">
                      <p className="text-xs text-slate-400">Primary stack</p>
                      <p className="mt-1 text-sm text-slate-100">React • Tailwind • Vite</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-950/40 p-3">
                      <p className="text-xs text-slate-400">Strength</p>
                      <p className="mt-1 text-sm text-slate-100">UI polish + shipping</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-950/40 p-3">
                      <p className="text-xs text-slate-400">Background</p>
                      <p className="mt-1 text-sm text-slate-100">Fitness Coach → Developer</p>
                    </div>
                  </div>
                </aside>

                {/* Main hero copy */}
                <div className="text-center lg:text-left">
                  <p className="text-sm font-semibold text-slate-300">
                    Web Developer • Fitness Coach • Builder
                  </p>

                  <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
                    I craft{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
                      fast, clean
                    </span>{" "}
                    front-ends that feel premium.
                  </h1>

                  <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    I build React + Tailwind projects with real-world features—responsive layouts,
                    accessible UI, and integrations. I care about speed, detail, and shipping.
                  </p>

                  <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <a
                      href="#projects"
                      className={`inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-100 transition ${focusRing}`}
                    >
                      See my work
                    </a>
                    <a
                      href="#contact"
                      className={`inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white hover:bg-white/10 transition ${focusRing}`}
                    >
                      Let’s talk
                    </a>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                    <PillLink href={links.github}>GitHub</PillLink>
                    <PillLink href={links.linkedin}>LinkedIn</PillLink>
                    <PillLink href={links.resume}>Resume</PillLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <SectionTitle
              kicker="Selected work"
              title="Projects that show range"
              subtitle="A few builds that demonstrate UI structure, polish, and real features."
            />

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <article
                  key={p.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 hover:bg-white/7 transition shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                >
                  {/* faux screenshot frame */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border-b border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
                    </div>
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-slate-950/40 text-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex gap-3">
                      <a
                        href={p.live}
                        className={`px-4 py-2 rounded-xl bg-white text-slate-950 text-sm font-semibold hover:bg-slate-100 transition ${focusRing}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live
                      </a>
                      <a
                        href={p.repo}
                        className={`px-4 py-2 rounded-xl border border-white/15 bg-white/5 text-sm hover:bg-white/10 transition ${focusRing}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS — chip wall */}
        <section id="skills" className="scroll-mt-24 border-y border-white/10 bg-slate-950/60">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <SectionTitle
              kicker="Toolbox"
              title="Skills"
              subtitle="What I’m comfortable shipping with."
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {skillChips.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24">
          <div className="max-w-6xl mx-auto px-4 py-14 grid gap-10 md:grid-cols-2 md:items-center">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10" />
              <p className="mt-3 text-xs text-slate-400">
                Drop in a headshot or a “workspace” photo later.
              </p>
            </div>

            <div>
              <SectionTitle
                kicker="Background"
                title="About me"
                subtitle=""
              />
              <p className="mt-4 text-slate-300 leading-relaxed">
                I’m a developer with a fitness-coach background—so I’m big on discipline,
                consistency, and shipping. I care about clean design, snappy UX, and building
                projects that feel real (not just tutorials).
              </p>
              <p className="mt-4 text-slate-300 leading-relaxed">
                I’m aiming for front-end roles where I can own UI, build reusable components,
                and deliver polished experiences.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-14">
            <SectionTitle
              kicker="Get in touch"
              title="Contact"
              subtitle="Send a message and I’ll reply."
            />

            <form
              className="mt-8 grid gap-3 w-full max-w-lg"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className={`w-full border border-white/10 bg-white/5 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 ${focusRing}`}
                placeholder="Your name"
                autoComplete="name"
                required
              />
              <input
                className={`w-full border border-white/10 bg-white/5 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 ${focusRing}`}
                placeholder="Email"
                type="email"
                autoComplete="email"
                required
              />
              <textarea
                className={`w-full border border-white/10 bg-white/5 rounded-xl px-4 py-3 text-slate-100 placeholder:text-slate-500 ${focusRing}`}
                placeholder="Message"
                rows={5}
              />
              <button
                type="submit"
                className={`px-5 py-3 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-100 transition ${focusRing}`}
              >
                Send
              </button>

              <p className="text-xs text-slate-500">
                (We’ll wire this to Formspree when you’re ready.)
              </p>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-slate-400 flex flex-wrap gap-4 justify-between">
          <span>© {year} Sergio Padilla. All rights reserved.</span>
          <a className={`hover:text-white underline ${focusRing}`} href="#top">
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
