import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/catalog";
import { ProductCard } from "@/components/product/product-card";

export function ProductSection({ offers = false }: { offers?: boolean }) {
  const shown = offers ? products.filter((product) => product.oldPrice) : products;
  return (
    <section className={offers ? "offers-section" : "section shell"} id={offers ? "ofertas" : "produtos"} aria-labelledby={offers ? "offers-title" : "products-title"}>
      <div className={offers ? "shell" : undefined}>
        <div className="section-heading"><div><span className="section-kicker">{offers ? "Preço bom é estoque girando." : "Escolhas de quem produz"}</span><h2 id={offers ? "offers-title" : "products-title"}>{offers ? "Ofertas da semana" : "Mais vendidos na Prime"}</h2></div><Link href={offers ? "/ofertas" : "/buscar?ordem=mais-vendidos"}>Ver mais produtos <ArrowRight /></Link></div>
        <div className="product-grid">{shown.map((product) => <ProductCard product={product} key={product.id} />)}</div>
        <p className="mock-note">Produtos, marcas e preços demonstrativos para validação do layout. Substituir pelos dados do catálogo oficial.</p>
      </div>
    </section>
  );
}
