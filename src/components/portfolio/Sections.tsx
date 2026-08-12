import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  Cpu,
  Database,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Rocket,
  Send,
  Sparkles,
  Terminal,
} from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { ParticleField } from "./ParticleField";
import { TypingText } from "./TypingText";
import { profile, projects, skillGroups } from "@/lib/portfolio-content";
import { supabase } from "@/integrations/supabase/client";

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12 text-center">
      <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">{kicker}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
        {title}
      </h2>
      <div
        className="mx-auto mt-5 h-px w-40"
        style={{ background: "var(--gradient-line)" }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero-bg relative overflow-hidden pt-32 pb-24">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <ParticleField />
      <div className="relative mx-auto max-w-6xl px-5 text-center">
        <Reveal>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-muted-foreground">
            <Sparkles size={13} className="text-primary" /> Available for full-time roles
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-7 font-display text-5xl font-black leading-[1.05] tracking-tight text-gradient sm:text-7xl">
            {profile.name}
          </h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-4 font-display text-lg tracking-[0.3em] uppercase text-foreground/80 sm:text-xl">
            {profile.role}
          </p>
        </Reveal>
        <Reveal delay={210}>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">{profile.tagline}</p>
        </Reveal>
        <Reveal delay={270}>
          <p className="mt-6 text-lg sm:text-xl">
            <TypingText words={profile.rotating} />
          </p>
        </Reveal>
        <Reveal delay={330}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="glow-hover inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              View Projects <ArrowUpRight size={16} />
            </a>
            <a
              href={profile.resumeUrl}
              className="glow-hover neon-border inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#contact"
              className="glow-hover inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground"
            >
              Contact Me
            </a>
          </div>
        </Reveal>

        <div className="pointer-events-none mt-16 hidden justify-center gap-16 text-primary/50 sm:flex">
          <Terminal className="animate-float" size={26} />
          <Cpu className="animate-float" size={26} style={{ animationDelay: "1.2s" }} />
          <Database className="animate-float" size={26} style={{ animationDelay: "2.2s" }} />
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle kicker="01 / Profile" title="About Me" />
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="glass neon-border glow-hover h-full rounded-2xl p-8">
              <p className="text-base leading-relaxed text-muted-foreground">{profile.about}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Clean Code", "Scalable Systems", "UI Craft", "AI & ML"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 font-mono text-xs text-accent"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="glass neon-border glow-hover grid h-full gap-3 rounded-2xl p-6">
              {profile.stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between rounded-xl bg-secondary/40 px-4 py-3"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{s.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle kicker="02 / Stack" title="Skills & Technologies" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 80}>
              <div className="glass neon-border glow-hover h-full rounded-2xl p-6">
                <h3 className="font-display text-sm font-bold uppercase tracking-[0.22em] text-primary">
                  {group.title}
                </h3>
                <div className="mt-6 space-y-4">
                  {group.items.map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/90">{item.name}</span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {item.level}%
                        </span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-primary shadow-[0_0_14px_var(--neon)] transition-[width] duration-1000"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle kicker="03 / Work" title="Featured Projects" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <article className="glass neon-border glow-hover group relative h-full overflow-hidden rounded-2xl p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
                  <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">
                    {p.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-foreground/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  const timeline = [
    {
      title: `${profile.college} — ${profile.degree}`,
      meta: `Graduation ${profile.gradYear}`,
      body: "Core focus on data structures, algorithms, artificial intelligence, machine learning and full stack web development.",
    },
  ];

  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-4xl px-5">
        <SectionTitle kicker="04 / Journey" title="Education" />
        <div className="relative border-l border-border pl-8">
          {timeline.map((t, i) => (
            <Reveal key={t.title} delay={i * 100}>
              <div className="relative pb-2">
                <span className="absolute -left-[41px] top-2 grid size-5 place-items-center rounded-full bg-primary shadow-[0_0_18px_var(--neon)]">
                  <GraduationCap size={12} className="text-primary-foreground" />
                </span>
                <div className="glass neon-border rounded-2xl p-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent">
                    {t.meta}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{t.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Goals() {
  return (
    <section id="goals" className="relative py-24">
      <div className="mx-auto max-w-4xl px-5">
        <SectionTitle kicker="05 / Next" title="Experience & Goals" />
        <Reveal>
          <div className="glass neon-border glow-hover rounded-2xl p-10 text-center">
            <Rocket className="mx-auto text-primary animate-float" size={30} />
            <p className="mt-6 text-lg leading-relaxed text-foreground/90">{profile.goal}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim() || null,
      message: String(data.get("message") ?? "").trim(),
    });
    setSending(false);
    if (error) {
      toast.error("Could not send your message. Please try again.");
      return;
    }
    toast.success("Message sent — I'll get back to you soon.");
    form.reset();
  };

  const field =
    "w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:border-primary focus:shadow-[0_0_22px_var(--neon-soft)]";

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-5">
        <SectionTitle kicker="06 / Contact" title="Let's Build Together" />
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="glass neon-border grid h-full content-start gap-3 rounded-2xl p-6">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl bg-secondary/40 px-4 py-3 text-sm text-foreground/90 transition-colors hover:text-primary"
              >
                <Mail size={16} className="text-primary" /> {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl bg-secondary/40 px-4 py-3 text-sm text-foreground/90 transition-colors hover:text-primary"
              >
                <Linkedin size={16} className="text-primary" /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl bg-secondary/40 px-4 py-3 text-sm text-foreground/90 transition-colors hover:text-primary"
              >
                <Github size={16} className="text-primary" /> GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="glass neon-border grid gap-4 rounded-2xl p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <input required name="name" placeholder="Your name" className={field} />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className={field}
                />
              </div>
              <input name="subject" placeholder="Subject" className={field} />
              <textarea required name="message" rows={5} placeholder="Your message" className={field} />
              <div className="flex flex-wrap gap-3">
                <button
                  type="submit"
                  disabled={sending}
                  className="glow-hover inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60"
                >
                  <Send size={15} /> {sending ? "Sending..." : "Send Message"}
                </button>
                <a
                  href={`mailto:${profile.email}?subject=Job%20Opportunity`}
                  className="glow-hover inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground"
                >
                  Hire Me
                </a>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
        <div className="h-px w-52" style={{ background: "var(--gradient-line)" }} />
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 {profile.name}. Built with passion and code.
        </p>
      </div>
    </footer>
  );
}
