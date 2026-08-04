import { useState } from "react";
import { Facebook, Instagram, Twitter, Youtube, Check } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section id="newsletter" className="relative overflow-hidden bg-primary py-24 lg:py-28">
      <div
        aria-hidden
        className="absolute -right-24 -bottom-32 size-[30rem] rounded-full bg-white/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="text-4xl text-primary-foreground sm:text-5xl">Stay refreshed</h2>
          <p className="mt-4 text-base text-primary-foreground/85">
            Get new drops, campaigns and happy news straight to your inbox.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setDone(true);
            }}
            className="mx-auto mt-9 grid max-w-xl gap-3 sm:grid-cols-[minmax(0,1fr)_auto]"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="min-w-0 rounded-full border border-white/40 bg-white/95 px-6 py-4 text-base text-ink outline-none transition-shadow placeholder:text-muted-foreground focus:ring-4 focus:ring-white/40"
            />
            <button
              type="submit"
              className="rounded-full bg-ink px-8 py-4 text-base font-bold text-white transition-transform duration-300 hover:scale-105"
            >
              {done ? (
                <span className="inline-flex items-center gap-2">
                  <Check className="size-5" /> Subscribed
                </span>
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
          <p className="mt-4 text-xs text-primary-foreground/70">
            No spam. Unsubscribe any time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "X" },
  { icon: Youtube, label: "YouTube" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "Our Story", href: "#story" },
  { label: "Sustainability", href: "#sustainability" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-ink py-16 text-white/70">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary font-display text-lg text-primary-foreground">
                C
              </span>
              <span className="font-display text-xl tracking-wide text-white">Coca-Cola</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              A concept landing page created as a UI/UX portfolio project. Not affiliated with The
              Coca-Cola Company.
            </p>
            <ul className="mt-6 flex gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href="#contact"
                    aria-label={s.label}
                    className="grid size-11 place-items-center rounded-full border border-white/15 transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-white"
                  >
                    <s.icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-sm tracking-[0.2em] text-white">Quick Links</h3>
            <ul className="mt-5 grid gap-3 text-sm">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm tracking-[0.2em] text-white">Contact</h3>
            <ul className="mt-5 grid gap-3 text-sm">
              <li>hello@openhappiness.design</li>
              <li>Atlanta · Lagos · Tokyo</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Open Happiness concept. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#contact" className="transition-colors hover:text-primary">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="transition-colors hover:text-primary">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
