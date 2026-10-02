import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow-condensed/800.css";
import "./globals.css";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { WhatsAppButton } from "@/components/common/whatsapp-button";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MobileBottomNav } from "@/components/layout/mobile-bottom-nav";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Atacado Prime | Insumos e embalagens no CEASA PE", template: "%s | Atacado Prime" },
  description: "Insumos para sorveteria, confeitaria, embalagens e food service no CEASA PE.",
  alternates: { canonical: "/" },
  openGraph: { title: "Atacado Prime", description: "Tudo para quem produz e vende.", type: "website", locale: "pt_BR" },
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><Header />{children}<Footer /><WhatsAppButton /><MobileBottomNav /><CartDrawer /></body></html>;
}
