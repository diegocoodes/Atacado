"use client";

import Link from "next/link";
import { Heart, Menu, Package, ShoppingCart, UserRound, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useCartStore } from "@/stores/cart-store";
import { BrandMark } from "@/components/common/brand-mark";
import { SearchBar } from "./search-bar";

const departments = ["Sorveteria", "Confeitaria", "Embalagens", "Food service"];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const mobilePanel = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const itemCount = useCartStore((state) => state.lines.reduce((total, line) => total + line.quantity, 0));
  const openCart = useCartStore((state) => state.openCart);

  useEffect(() => {
    if (!mobileOpen) return;
    const trigger = menuButton.current;
    const firstLink = mobilePanel.current?.querySelector<HTMLElement>("a[href]");
    firstLink?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
      if (event.key !== "Tab" || !mobilePanel.current) return;
      const focusable = Array.from(mobilePanel.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"));
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      trigger?.focus();
    };
  }, [mobileOpen]);

  return (
    <header className="site-header">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <div className="top-note">
        <div className="shell"><span>Atacado e varejo no CEASA PE</span><span>Atendimento para o seu negócio</span></div>
      </div>
      <div className="header-main shell">
        <button ref={menuButton} className="icon-button mobile-only" onClick={() => setMobileOpen(true)} aria-label="Abrir menu" aria-expanded={mobileOpen}>
          <Menu />
        </button>
        <BrandMark />
        <div className="desktop-search"><SearchBar /></div>
        <nav className="account-actions" aria-label="Atalhos da conta">
          <Link href="/minha-conta" className="header-action"><UserRound /><span><small>Bem-vindo</small>Minha conta</span></Link>
          <Link href="/minha-conta/pedidos" className="header-action desktop-action"><Package /><span><small>Acompanhar</small>Meus pedidos</span></Link>
          <Link href="/favoritos" className="header-action icon-only desktop-action" aria-label="Favoritos"><Heart /></Link>
          <button className="header-action cart-action" onClick={openCart} aria-label={`Carrinho com ${itemCount} itens`}>
            <ShoppingCart /><span className="cart-count">{itemCount}</span><span className="desktop-action"><small>Seu pedido</small>Carrinho</span>
          </button>
        </nav>
      </div>
      <div className="mobile-search shell"><SearchBar compact /></div>
      <nav className="department-nav" aria-label="Departamentos">
        <div className="shell">
          <button onClick={() => setMegaOpen((value) => !value)} className="categories-trigger" aria-expanded={megaOpen}>
            <Menu size={18} /> Categorias
          </button>
          <Link href="#ofertas" className="offer-link">Ofertas</Link>
          {departments.map((item) => <Link key={item} href={`/categoria/${item.toLowerCase().replace(" ", "-")}`}>{item}</Link>)}
          <Link href="#marcas">Marcas</Link>
          <Link href="#atendimento">Atendimento</Link>
        </div>
        <AnimatePresence>
        {megaOpen && (
          <motion.div
            className="mega-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <div className="shell mega-grid">
              {departments.map((department, index) => (
                <div key={department}>
                  <strong>{department}</strong>
                  <Link href={`/categoria/${department.toLowerCase().replace(" ", "-")}`}>{index === 0 ? "Coberturas e caldas" : index === 1 ? "Chocolate e confeitos" : index === 2 ? "Copos, potes e tampas" : "Molhos e ingredientes"}</Link>
                  <Link href={`/categoria/${department.toLowerCase().replace(" ", "-")}`}>Ver departamento</Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
        </AnimatePresence>
      </nav>
      <AnimatePresence>
      {mobileOpen && (
        <motion.div
          ref={mobilePanel}
          className="mobile-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
          initial={reduceMotion ? false : { x: "-100%" }}
          animate={{ x: 0 }}
          exit={reduceMotion ? undefined : { x: "-100%" }}
          transition={{ duration: reduceMotion ? 0 : 0.26, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mobile-panel-head"><BrandMark /><button className="icon-button" onClick={() => setMobileOpen(false)} aria-label="Fechar menu"><X /></button></div>
          <nav aria-label="Navegação mobile">
            <Link href="/categoria">Todas as categorias</Link>
            <Link href="#ofertas" onClick={() => setMobileOpen(false)}>Ofertas da semana</Link>
            {departments.map((item) => <Link key={item} href={`/categoria/${item.toLowerCase().replace(" ", "-")}`}>{item}</Link>)}
            <Link href="/minha-conta">Minha conta</Link>
            <Link href="#atendimento">Atendimento</Link>
          </nav>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
}
