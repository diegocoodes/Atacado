"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Boxes } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const enter = (delay: number, distance = 20) => ({
    initial: reduceMotion ? false : { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="hero" aria-labelledby="hero-title">
      <motion.div className="hero-media" initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: "easeOut" }}>
        <Image src="/images/hero-atacado-prime.png" alt="Sortimento de insumos e embalagens para negócios de alimentação" fill priority sizes="100vw" />
      </motion.div>
      <div className="hero-overlay" />
      <div className="shell hero-content">
        <div className="hero-copy">
          <motion.span className="eyebrow" {...enter(0.12, 12)}><Boxes /> Atacado Prime · CEASA PE</motion.span>
          <motion.h1 id="hero-title" {...enter(0.2, 26)}>Tudo para quem<br /><em>produz e vende.</em></motion.h1>
          <motion.p {...enter(0.3, 18)}>Insumos para sorveteria, confeitaria, embalagens e food service em um só lugar.</motion.p>
          <motion.div className="hero-actions" {...enter(0.38, 14)}><Link href="#produtos" className="primary-button">Comprar agora <ArrowRight /></Link><Link href="#categorias" className="secondary-button">Ver categorias</Link></motion.div>
        </div>
      </div>
      <motion.div className="hero-index" aria-hidden="true" {...enter(0.52, 10)}><b>01</b><span /><small>Estoque para produzir</small></motion.div>
    </section>
  );
}
