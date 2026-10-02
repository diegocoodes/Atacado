"use client";

import { create } from "zustand";
import type { CartLine, Product, SaleOption } from "@/types/catalog";

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, saleOption: SaleOption) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeItem: (lineId: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  lines: [],
  isOpen: false,
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  addItem: (product, saleOption) =>
    set((state) => {
      const lineId = `${product.id}-${saleOption.id}`;
      const current = state.lines.find((line) => line.lineId === lineId);

      return {
        isOpen: true,
        lines: current
          ? state.lines.map((line) =>
              line.lineId === lineId ? { ...line, quantity: line.quantity + 1 } : line,
            )
          : [...state.lines, { lineId, product, saleOption, quantity: 1 }],
      };
    }),
  updateQuantity: (lineId, quantity) =>
    set((state) => ({
      lines: state.lines.map((line) =>
        line.lineId === lineId ? { ...line, quantity: Math.max(1, quantity) } : line,
      ),
    })),
  removeItem: (lineId) =>
    set((state) => ({ lines: state.lines.filter((line) => line.lineId !== lineId) })),
}));
