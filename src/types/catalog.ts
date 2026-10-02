export type SaleOption = {
  id: "unit" | "box";
  label: string;
  detail: string;
  price: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  brand: string;
  size: string;
  category: string;
  image: string;
  tag?: string;
  oldPrice?: number;
  saleOptions: SaleOption[];
};

export type CartLine = {
  lineId: string;
  product: Product;
  saleOption: SaleOption;
  quantity: number;
};
