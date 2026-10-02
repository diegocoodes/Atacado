import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Boxes } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image src="/images/hero-atacado-prime.png" alt="Sortimento de insumos e embalagens para negócios de alimentação" fill priority sizes="100vw" />
      <div className="hero-overlay" />
      <div className="shell hero-content">
        <div className="hero-copy">
          <span className="eyebrow"><Boxes /> Atacado Prime · CEASA PE</span>
          <h1 id="hero-title">Tudo para quem<br /><em>produz e vende.</em></h1>
          <p>Insumos para sorveteria, confeitaria, embalagens e food service em um só lugar.</p>
          <div className="hero-actions"><Link href="#produtos" className="primary-button">Comprar agora <ArrowRight /></Link><Link href="#categorias" className="secondary-button">Ver categorias</Link></div>
        </div>
      </div>
      <div className="hero-index" aria-hidden="true"><b>01</b><span /><small>Estoque para produzir</small></div>
    </section>
  );
}
