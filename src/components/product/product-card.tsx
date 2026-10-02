"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, Heart, Minus, Plus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { formatCurrency } from "@/lib/format";
import { useCartStore } from "@/stores/cart-store";
import type { Product } from "@/types/catalog";

export function ProductCard({ product }: { product: Product }) {
  const [selectedId, setSelectedId] = useState(product.saleOptions[0].id);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const selected = product.saleOptions.find((option) => option.id === selectedId) ?? product.saleOptions[0];

  const handleAdd = () => {
    for (let index = 0; index < quantity; index += 1) addItem(product, selected);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {product.tag && <span className={`product-tag ${product.tag === "Oferta" ? "product-tag--sale" : ""}`}>{product.tag}</span>}
        <button className="favorite-button" aria-label={`Adicionar ${product.name} aos favoritos`}><Heart /></button>
        <Link href={`/produto/${product.slug}`} aria-label={`Ver ${product.name}`}>
          <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" />
        </Link>
      </div>
      <div className="product-body">
        <span className="product-brand">{product.brand}</span>
        <Link href={`/produto/${product.slug}`} className="product-name">{product.name}</Link>
        <span className="product-size">{product.size}</span>
        {product.saleOptions.length > 1 && (
          <div className="sale-switch" aria-label="Formato de venda">
            {product.saleOptions.map((option) => (
              <button key={option.id} className={selectedId === option.id ? "active" : ""} onClick={() => setSelectedId(option.id)}>{option.label}</button>
            ))}
          </div>
        )}
        <div className="price-row">
          <div>{product.oldPrice && selected.id === "unit" && <del>{formatCurrency(product.oldPrice)}</del>}<strong>{formatCurrency(selected.price)}</strong><small>{selected.detail}</small></div>
        </div>
        <div className="product-actions">
          <div className="quantity" aria-label="Quantidade">
            <button onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Diminuir quantidade"><Minus /></button>
            <span aria-live="polite">{quantity}</span>
            <button onClick={() => setQuantity((value) => value + 1)} aria-label="Aumentar quantidade"><Plus /></button>
          </div>
          <button className={`add-button ${added ? "added" : ""}`} onClick={handleAdd}>{added ? <Check /> : <ShoppingCart />}<span>{added ? "Adicionado" : "Adicionar"}</span></button>
        </div>
      </div>
    </article>
  );
}
