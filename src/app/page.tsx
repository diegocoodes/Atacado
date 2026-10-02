import { Brands } from "@/components/home/brands";
import { BusinessSegments } from "@/components/home/business-segments";
import { CategoryGrid } from "@/components/home/category-grid";
import { CommercialStrip } from "@/components/home/commercial-strip";
import { Hero } from "@/components/home/hero";
import { ProductSection } from "@/components/home/product-section";
import { Reveal } from "@/components/motion/reveal";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Atacado Prime Ceasa",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  sameAs: ["https://instagram.com/atacadoprimeceasa"],
};

export default function Home() {
  return (
    <main id="conteudo">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
      <Hero />
      <Reveal><CommercialStrip /></Reveal>
      <Reveal><CategoryGrid /></Reveal>
      <Reveal><ProductSection /></Reveal>
      <Reveal><ProductSection offers /></Reveal>
      <Reveal><BusinessSegments /></Reveal>
      <Reveal><Brands /></Reveal>
    </main>
  );
}
