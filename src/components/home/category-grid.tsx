import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/catalog";

export function CategoryGrid() {
  return (
    <section className="section shell" id="categorias" aria-labelledby="categories-title">
      <div className="section-heading"><div><span className="section-kicker">Encontre mais rápido</span><h2 id="categories-title">Compre por categoria</h2></div><Link href="/categoria">Ver todas as categorias <ArrowUpRight /></Link></div>
      <div className="category-grid">
        {categories.map((category, index) => (
          <Link href={`/categoria/${category.slug}`} className={`category-card category-card--${index + 1}`} key={category.slug}>
            <Image src={category.image} alt="" fill sizes="(max-width: 640px) 50vw, 33vw" />
            <span className="category-shade" />
            <span className="category-copy"><strong>{category.name}</strong><small>{category.count}</small><i><ArrowUpRight /></i></span>
          </Link>
        ))}
      </div>
    </section>
  );
}
