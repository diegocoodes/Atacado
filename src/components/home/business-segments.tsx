import Link from "next/link";
import { ArrowRight, CakeSlice, ChefHat, IceCreamBowl, Popsicle, UtensilsCrossed } from "lucide-react";

const segments = [
  { name: "Tenho uma sorveteria", text: "Bases, coberturas, cones e embalagens", icon: Popsicle, color: "blue" },
  { name: "Trabalho com confeitaria", text: "Chocolate, confeitos, formas e ingredientes", icon: CakeSlice, color: "yellow" },
  { name: "Tenho uma lanchonete", text: "Embalagens, molhos e descartáveis", icon: ChefHat, color: "white" },
  { name: "Trabalho com açaí", text: "Complementos, potes, copos e tampas", icon: IceCreamBowl, color: "white" },
  { name: "Tenho restaurante", text: "Insumos e itens para a operação diária", icon: UtensilsCrossed, color: "white" },
];

export function BusinessSegments() {
  return (
    <section className="segments-section">
      <div className="shell">
        <div className="section-heading light"><div><span className="section-kicker">Seleção pensada por operação</span><h2>Compre para o seu negócio</h2></div></div>
        <div className="segments-grid">
          {segments.map(({ name, text, icon: Icon, color }) => <Link href={`/buscar?segmento=${encodeURIComponent(name)}`} className={`segment-card ${color}`} key={name}><Icon /><div><strong>{name}</strong><span>{text}</span></div><ArrowRight className="segment-arrow" /></Link>)}
        </div>
      </div>
    </section>
  );
}
