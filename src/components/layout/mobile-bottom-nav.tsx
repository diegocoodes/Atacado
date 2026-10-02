"use client";

import Link from "next/link";
import { Grid2X2, Home, Package, Search, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/stores/cart-store";

export function MobileBottomNav() {
  const openCart = useCartStore((state) => state.openCart);
  return (
    <nav className="mobile-bottom" aria-label="Navegação rápida">
      <Link href="/"><Home /><span>Início</span></Link>
      <Link href="/categoria"><Grid2X2 /><span>Categorias</span></Link>
      <Link href="/buscar"><Search /><span>Buscar</span></Link>
      <Link href="/minha-conta/pedidos"><Package /><span>Pedidos</span></Link>
      <button onClick={openCart}><ShoppingCart /><span>Carrinho</span></button>
    </nav>
  );
}
