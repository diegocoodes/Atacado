"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useEffect, useRef } from "react";
import { formatCurrency } from "@/lib/format";
import { useCartStore } from "@/stores/cart-store";

export function CartDrawer() {
  const { isOpen, lines, closeCart, updateQuantity, removeItem } = useCartStore();
  const closeButton = useRef<HTMLButtonElement>(null);
  const drawer = useRef<HTMLElement>(null);
  const total = lines.reduce((sum, line) => sum + line.saleOption.price * line.quantity, 0);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    closeButton.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
      if (event.key !== "Tab" || !drawer.current) return;
      const focusable = Array.from(drawer.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([disabled])"));
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
      previous?.focus();
    };
  }, [isOpen, closeCart]);

  if (!isOpen) return null;
  return (
    <div className="drawer-layer" role="presentation">
      <button className="drawer-backdrop" onClick={closeCart} aria-label="Fechar carrinho" />
      <aside ref={drawer} className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div className="drawer-head"><div><small>Seu pedido</small><h2 id="cart-title">Carrinho <span>{lines.length}</span></h2></div><button ref={closeButton} onClick={closeCart} aria-label="Fechar carrinho"><X /></button></div>
        {lines.length === 0 ? (
          <div className="empty-cart"><ShoppingBag /><h3>Seu carrinho está vazio.</h3><p>Encontre os produtos que sua produção precisa.</p><button className="primary-button" onClick={closeCart}>Ver produtos</button></div>
        ) : (
          <>
            <div className="drawer-lines">
              {lines.map((line) => (
                <article className="drawer-line" key={line.lineId}>
                  <Image src={line.product.image} alt="" width={74} height={74} />
                  <div><strong>{line.product.name}</strong><span>{line.saleOption.label} · {line.saleOption.detail}</span><b>{formatCurrency(line.saleOption.price)}</b>
                    <div className="drawer-line-actions"><div className="quantity"><button onClick={() => updateQuantity(line.lineId, line.quantity - 1)} aria-label="Diminuir"><Minus /></button><span>{line.quantity}</span><button onClick={() => updateQuantity(line.lineId, line.quantity + 1)} aria-label="Aumentar"><Plus /></button></div><button className="remove-button" onClick={() => removeItem(line.lineId)} aria-label={`Remover ${line.product.name}`}><Trash2 /></button></div>
                  </div>
                </article>
              ))}
            </div>
            <div className="drawer-summary"><div><span>Subtotal</span><strong>{formatCurrency(total)}</strong></div><p>Frete e descontos calculados na finalização.</p><Link href="/carrinho" className="primary-button" onClick={closeCart}>Finalizar pedido</Link><button className="text-button" onClick={closeCart}>Continuar comprando</button></div>
          </>
        )}
      </aside>
    </div>
  );
}
