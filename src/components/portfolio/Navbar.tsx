import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/portfolio-content";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "goals", label: "Goals" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/60 py-2" : "py-4"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a
          href="#home"
          className="font-display text-sm font-bold tracking-[0.28em] text-gradient uppercase"
        >
          {profile.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative rounded-full px-3.5 py-2 text-sm transition-colors ${
                  active === l.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active === l.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-primary shadow-[0_0_12px_var(--neon)]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground animate-pulse-glow md:inline-flex"
        >
          Hire Me
        </a>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((o) => !o)}
          className="rounded-md border border-border p-2 text-foreground md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <ul className="glass mx-5 mt-3 grid gap-1 rounded-xl p-3 md:hidden">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm ${
                  active === l.id ? "bg-secondary text-primary" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
