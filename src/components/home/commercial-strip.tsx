import { Boxes, MessageCircle, PackageCheck, Store } from "lucide-react";

const items = [
  { icon: Boxes, title: "Compra no atacado", text: "Unidade e caixa" },
  { icon: Store, title: "Retirada no CEASA", text: "Mais agilidade" },
  { icon: MessageCircle, title: "Atendimento humano", text: "Fale pelo WhatsApp" },
  { icon: PackageCheck, title: "Mix para seu negócio", text: "Produção e operação" },
];

export function CommercialStrip() {
  return <section className="commercial-strip" aria-label="Vantagens"><div className="shell">{items.map(({ icon: Icon, title, text }) => <div key={title}><Icon /><span><strong>{title}</strong><small>{text}</small></span></div>)}</div></section>;
}
