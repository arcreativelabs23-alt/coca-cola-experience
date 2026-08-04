import { Sparkles, Globe2, Leaf, Users } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const features = [
  {
    icon: Sparkles,
    title: "Refreshing Taste",
    desc: "A perfectly balanced recipe with an ice-cold finish that never gets old.",
  },
  {
    icon: Globe2,
    title: "Global Brand",
    desc: "Shared in more than 200 countries and territories, in every language.",
  },
  {
    icon: Leaf,
    title: "Quality Ingredients",
    desc: "Rigorously sourced and tested so every sip tastes exactly as it should.",
  },
  {
    icon: Users,
    title: "Shared Moments",
    desc: "From family dinners to street corners, it's better when it's together.",
  },
];

export function Features() {
  return (
    <section id="story" className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.28em] text-primary uppercase">Our Story</p>
          <h2 className="mt-4 text-4xl text-white sm:text-5xl">Why people love Coca-Cola</h2>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 90}>
              <div className="glass lift h-full rounded-3xl p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <f.icon className="size-6" />
                </span>
                <h3 className="mt-6 text-lg text-white">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.28em] text-primary uppercase">Gallery</p>
          <h2 className="mt-4 text-4xl text-ink sm:text-5xl">Moments worth opening</h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {[
            { src: g1, alt: "Friends toasting with cola bottles at sunset", cls: "lg:col-span-2 lg:row-span-2" },
            { src: g2, alt: "Chilled red cola cans in crushed ice", cls: "lg:col-span-2" },
            { src: g3, alt: "Glass of cola with ice and splash", cls: "" },
            { src: g4, alt: "Cold bottle handed over at a neon night market", cls: "" },
          ].map((img) => (
            <Reveal key={img.alt} className={`group overflow-hidden rounded-3xl ${img.cls}`}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="size-full min-h-56 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
