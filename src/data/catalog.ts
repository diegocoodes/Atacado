import type { Product } from "@/types/catalog";

export const categories = [
  { name: "Sorveteria", slug: "sorveteria", image: "/images/products/cones.png", count: "Bases, cones e coberturas" },
  { name: "Confeitaria", slug: "confeitaria", image: "/images/products/confeitos.png", count: "Chocolate, confeitos e ingredientes" },
  { name: "Embalagens", slug: "embalagens", image: "/images/products/copos.png", count: "Copos, potes, tampas e delivery" },
  { name: "Food service", slug: "food-service", image: "/images/hero-atacado-prime.png", count: "Insumos para sua operação" },
  { name: "Açaí", slug: "acai", image: "/images/hero-atacado-prime.png", count: "Complementos e embalagens" },
  { name: "Coberturas", slug: "coberturas", image: "/images/products/cobertura-chocolate.png", count: "Caldas e cremes" },
];

export const products: Product[] = [
  {
    id: "cobertura-chocolate",
    slug: "cobertura-sabor-chocolate-1-3kg",
    name: "Cobertura sabor chocolate",
    brand: "Marca demonstrativa",
    size: "Balde 1,3 kg",
    category: "Coberturas",
    image: "/images/products/cobertura-chocolate.png",
    tag: "Mais vendido",
    saleOptions: [
      { id: "unit", label: "Unidade", detail: "1 balde", price: 24.9 },
      { id: "box", label: "Caixa", detail: "6 unidades", price: 139.9 },
    ],
  },
  {
    id: "copo-bolha",
    slug: "copo-bolha-300ml-com-tampa",
    name: "Copo bolha com tampa",
    brand: "Marca demonstrativa",
    size: "300 ml · pacote com 50",
    category: "Embalagens",
    image: "/images/products/copos.png",
    saleOptions: [
      { id: "unit", label: "Pacote", detail: "50 unidades", price: 32.9 },
      { id: "box", label: "Caixa", detail: "20 pacotes", price: 599.9 },
    ],
  },
  {
    id: "cones",
    slug: "casquinha-crocante-caixa",
    name: "Casquinha crocante tradicional",
    brand: "Marca demonstrativa",
    size: "Caixa com 300 unidades",
    category: "Sorveteria",
    image: "/images/products/cones.png",
    saleOptions: [
      { id: "unit", label: "Caixa", detail: "300 unidades", price: 89.9 },
    ],
  },
  {
    id: "confeitos",
    slug: "confeito-colorido-1kg",
    name: "Confeito colorido para decoração",
    brand: "Marca demonstrativa",
    size: "Pote 1 kg",
    category: "Confeitaria",
    image: "/images/products/confeitos.png",
    tag: "Oferta",
    oldPrice: 34.9,
    saleOptions: [
      { id: "unit", label: "Unidade", detail: "1 pote", price: 27.9 },
      { id: "box", label: "Caixa", detail: "6 unidades", price: 154.9 },
    ],
  },
  {
    id: "cobertura-morango",
    slug: "cobertura-sabor-morango-1-3kg",
    name: "Cobertura sabor morango",
    brand: "Marca demonstrativa",
    size: "Balde 1,3 kg",
    category: "Coberturas",
    image: "/images/products/cobertura-chocolate.png",
    saleOptions: [
      { id: "unit", label: "Unidade", detail: "1 balde", price: 22.9 },
      { id: "box", label: "Caixa", detail: "6 unidades", price: 128.9 },
    ],
  },
];

export const searchTerms = [
  "Chocolate em barra",
  "Chocolate fracionado",
  "Chocolate em pó",
  "Cobertura sabor chocolate",
  "Copos e tampas",
  "Cones para sorvete",
  "Confeitos coloridos",
];
