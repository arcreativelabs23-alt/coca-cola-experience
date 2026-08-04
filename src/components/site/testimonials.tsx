import { Quote, Recycle, Droplets, PackageCheck } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";
import sustainImg from "@/assets/sustainability.jpg";

const testimonials = [
  {
    quote:
      "Nothing beats an ice-cold bottle after a long shift. It's the small ritual that resets my whole day.",
    name: "Amara Chen",
    role: "Barista, Lagos",
    img: a1,
  },
  {
    quote:
      "Zero Sugar tastes exactly like the original to me. I honestly can't tell the difference — and I've tried.",
    name: "Daniel Okafor",
    role: "Football coach, Accra",
    img: a2,
  },
  {
    quote:
      "Every family dinner has that red bottle on the table. It's been the same since I was a child.",
    name: "Mei Tanaka",
    role: "Chef, Osaka",
    img: a3,
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.28em] text-primary uppercase">Testimonials</p>
          <h2 className="mt-4 text-4xl text-ink sm:text-5xl">Loved out loud</h2>
        </Reveal>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 100}>
              <figure className="lift h-full rounded-3xl bg-card p-8">
                <Quote className="size-8 text-primary" />
                <blockquote className="mt-5 text-base leading-relaxed text-ink-soft">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-7 flex min-w-0 items-center gap-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="size-12 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-bold text-ink">{t.name}</p>
                    <p className="truncate text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const stats = [
  { icon: Recycle, k: "90%", v: "Recyclable packaging" },
  { icon: Droplets, k: "2.2T L", v: "Water replenished" },
  { icon: PackageCheck, k: "100%", v: "Bottles collection goal by 2030" },
];

export function Sustainability() {
  return (
    <section id="sustainability" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal className="overflow-hidden rounded-4xl">
          <img
            src={sustainImg}
            alt="Recycled bottles sorted at a modern recycling facility"
            loading="lazy"
            width={1280}
            height={1024}
            className="size-full object-cover"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="text-xs font-bold tracking-[0.28em] text-primary uppercase">
            Sustainability
          </p>
          <h2 className="mt-4 text-4xl text-ink sm:text-5xl">A world without waste</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            We're designing packaging to be collected and reused, replenishing the water we use, and
            cutting emissions across our value chain — so refreshment never costs the planet.
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((s) => (
              <li key={s.v} className="rounded-3xl border border-border bg-card p-5">
                <s.icon className="size-6 text-primary" />
                <p className="mt-4 font-display text-3xl text-ink">{s.k}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.v}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
