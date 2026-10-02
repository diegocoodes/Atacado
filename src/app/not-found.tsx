import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <main className="not-found"><span>404</span><h1>Não encontramos essa página.</h1><p>Mas seu próximo pedido ainda está por aqui.</p><Link href="/" className="primary-button"><ArrowLeft />Voltar para a loja</Link></main>;
}
