import Link from "next/link";

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="brand-mark" aria-label="Atacado Prime, página inicial">
      <span className="brand-symbol" aria-hidden="true">
        <span>A</span>
        <span>P</span>
      </span>
      <span className={inverse ? "brand-copy brand-copy--inverse" : "brand-copy"}>
        <strong>ATACADO</strong>
        <b>PRIME</b>
        <small>CEASA PE</small>
      </span>
    </Link>
  );
}
