import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-ink">
      <img
        src={heroImg}
        alt="Ice-cold cola bottle surrounded by a dramatic cola splash"
        width={1920}
        height={1280}
        className="absolute inset-0 size-full object-cover object-center opacity-80"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-32 lg:px-8">
        <div className="max-w-2xl">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold tracking-[0.22em] text-white/90 uppercase">
            Since 1886
          </span>
          <h1 className="mt-6 text-6xl leading-[0.9] text-white sm:text-7xl lg:text-8xl">
            Open <span className="text-gradient-red">Happiness</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">
            Experience the refreshing taste loved by millions around the world.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-105"
            >
              Explore Products
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#story"
              className="glass group inline-flex items-center gap-3 rounded-full px-7 py-4 text-base font-bold text-white transition-colors duration-300 hover:bg-white/20"
            >
              <span className="grid size-8 place-items-center rounded-full bg-white/20 transition-transform duration-300 group-hover:scale-110">
                <Play className="size-4 fill-current" />
              </span>
              Watch Commercial
            </a>
          </div>

          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              { k: "200+", v: "Countries" },
              { k: "1.9B", v: "Servings daily" },
              { k: "140yr", v: "Of refreshment" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl text-white">{s.k}</dt>
                <dd className="mt-1 text-xs tracking-widest text-white/60 uppercase">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
