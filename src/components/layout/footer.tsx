import Link from "next/link";
import { Camera, MessageCircle } from "lucide-react";
import { BrandMark } from "@/components/common/brand-mark";

const columns = [
  { title: "Categorias", links: ["Sorveteria", "Confeitaria", "Embalagens", "Food service"] },
  { title: "Minha conta", links: ["Meus pedidos", "Favoritos", "Minhas listas", "Dados cadastrais"] },
  { title: "Institucional", links: ["Quem somos", "Entrega e retirada", "Trocas e devoluções", "Privacidade"] },
];

export function Footer() {
  return (
    <footer className="footer" id="atendimento">
      <div className="shell footer-grid">
        <div className="footer-brand"><BrandMark inverse /><p>Insumos e embalagens para quem produz, vende e precisa manter o estoque girando.</p><strong>CEASA PE · Recife</strong></div>
        {columns.map((column) => <div key={column.title}><h3>{column.title}</h3>{column.links.map((link) => <Link href="#" key={link}>{link}</Link>)}</div>)}
        <div><h3>Atendimento</h3><a href="#"><MessageCircle />WhatsApp</a><a href="https://instagram.com/atacadoprimeceasa"><Camera />@atacadoprimeceasa</a><p className="footer-note">Horários e endereço completo serão publicados após confirmação.</p></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Atacado Prime. Conteúdo demonstrativo.</span><span>Site em desenvolvimento</span></div>
    </footer>
  );
}
