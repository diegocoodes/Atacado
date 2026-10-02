export default function Loading() {
  return <main className="page-loading" aria-label="Carregando"><div className="loading-bar" /><div className="loading-grid">{Array.from({ length: 8 }, (_, index) => <span key={index} />)}</div></main>;
}
