import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/hooks/use-reveal";
import original from "@/assets/product-original.jpg";
import zero from "@/assets/product-zero.jpg";
import diet from "@/assets/product-diet.jpg";
import sprite from "@/assets/product-sprite.jpg";
import fanta from "@/assets/product-fanta.jpg";

const products = [
  {
    name: "Coca-Cola Original Taste",
    desc: "The one and only. Bold, crisp caramel notes with the fizz that started it all.",
    img: original,
  },
  {
    name: "Coca-Cola Zero Sugar",
    desc: "Real Coca-Cola taste, zero sugar. Refreshment without the compromise.",
    img: zero,
  },
  {
    name: "Diet Coke",
    desc: "Light, crisp and unmistakable — a clean finish for everyday moments.",
    img: diet,
  },
  {
    name: "Sprite",
    desc: "Bright lemon-lime with a clear, tingling burst of pure refreshment.",
    img: sprite,
  },
  {
    name: "Fanta",
    desc: "Playful orange fruit flavour, bubbling with colour and sunshine.",
    img: fanta,
  },
];

export function Products() {
  return (
    <section id="products" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.28em] text-primary uppercase">Our Drinks</p>
          <h2 className="mt-4 text-4xl text-ink sm:text-5xl">A taste for every moment</h2>
          <p className="mt-4 font-sans text-base text-muted-foreground normal-case">
            Five icons of refreshment, crafted with the same care for over a century.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 90}>
              <article className="lift group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl text-ink">{p.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                  <a
                    href="#story"
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-bold text-ink transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Learn More
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
