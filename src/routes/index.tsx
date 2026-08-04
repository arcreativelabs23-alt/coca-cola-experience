import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Products } from "@/components/site/products";
import { Features, Gallery } from "@/components/site/features";
import { Testimonials, Sustainability } from "@/components/site/testimonials";
import { Newsletter, Footer } from "@/components/site/footer";

const title = "Open Happiness — Coca-Cola Concept Landing Page";
const description =
  "A bold, premium Coca-Cola inspired concept landing page: products, sustainability, gallery and testimonials. UI/UX portfolio project.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Gallery />
        <Testimonials />
        <Sustainability />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
