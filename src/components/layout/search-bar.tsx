"use client";

import { Search, X } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { searchTerms } from "@/data/catalog";

export function SearchBar({ compact = false }: { compact?: boolean }) {
  const [query, setQuery] = useState("");
  const listId = useId();
  const matches = useMemo(() => {
    if (query.trim().length < 2) return [];
    return searchTerms.filter((term) => term.toLowerCase().includes(query.toLowerCase())).slice(0, 5);
  }, [query]);

  return (
    <form className={`search ${compact ? "search--compact" : ""}`} action="/buscar" role="search">
      <label className="sr-only" htmlFor={listId}>Buscar produtos, marcas ou categorias</label>
      <Search size={20} aria-hidden="true" />
      <input
        role="combobox"
        id={listId}
        name="q"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Busque produtos, marcas ou categorias"
        autoComplete="off"
        aria-autocomplete="list"
        aria-controls={`${listId}-results`}
        aria-expanded={matches.length > 0}
      />
      {query && (
        <button type="button" className="search-clear" onClick={() => setQuery("")} aria-label="Limpar busca">
          <X size={18} />
        </button>
      )}
      <button type="submit" className="search-submit">Buscar</button>
      {matches.length > 0 && (
        <div className="search-results" id={`${listId}-results`} role="listbox" aria-label="Sugestões de busca">
          <span>Você pode estar procurando</span>
          {matches.map((match) => (
            <a key={match} href={`/buscar?q=${encodeURIComponent(match)}`} role="option" aria-selected="false">
              <Search size={15} aria-hidden="true" /> {match}
            </a>
          ))}
        </div>
      )}
    </form>
  );
}
