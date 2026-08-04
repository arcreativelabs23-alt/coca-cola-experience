import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Our Story", href: "#story" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-light py-2 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.35)]" : "py-4"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8"
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-lg font-display text-primary-foreground">
            C
          </span>
          <span
            className={`truncate font-display text-xl tracking-wide ${scrolled ? "text-ink" : "text-white"}`}
          >
            Coca&#8209;Cola
          </span>
        </a>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-ink-soft hover:text-primary"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#newsletter"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-105 sm:inline-flex"
          >
            Join the Fizz
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`grid size-11 shrink-0 place-items-center rounded-full border transition-colors lg:hidden ${
              scrolled ? "border-border text-ink" : "border-white/30 text-white"
            }`}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="glass-light mx-5 mt-3 animate-fade-in rounded-3xl p-3 lg:hidden">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-accent hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
