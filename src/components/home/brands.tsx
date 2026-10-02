const mockBrands = ["MARCA 01", "MARCA 02", "MARCA 03", "MARCA 04", "MARCA 05", "MARCA 06"];

export function Brands() {
  return (
    <section className="section shell brands" id="marcas">
      <div className="section-heading"><div><span className="section-kicker">Parceiros da sua produção</span><h2>As marcas que fazem parte do seu dia.</h2></div><p>Área preparada para receber as marcas oficiais do catálogo.</p></div>
      <div className="brands-row">{mockBrands.map((brand) => <div key={brand}><span>LOGO</span><strong>{brand}</strong></div>)}</div>
      <p className="mock-note">Logos demonstrativos. Nenhuma marca comercial é apresentada como parceira real.</p>
    </section>
  );
}
