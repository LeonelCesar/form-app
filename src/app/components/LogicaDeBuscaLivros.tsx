'use client';

import { useState, useEffect } from 'react';

type Livro = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
};

 function LogicaDeBuscaLivros() {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<Livro[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!query) {
        setResults([]);
        return;
      }

      setLoading(true);

      fetch(`https://openlibrary.org/search.json?q=${query}`)
        .then((res) => res.json())
        .then((data: { docs: Livro[] }) => {
          setResults(data.docs.slice(0, 10));
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }, 500);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-gray-100 rounded-xl shadow">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar livros..."
        className="w-full p-2 border border-gray-400 rounded text-black"
      />

      {loading && <p className="mt-2 text-sm text-gray-500">🔄 Carregando...</p>}

      <ul className="mt-4 space-y-4">
        {results.map((book, index) => (
          <li
            key={`${book.key}-${index}`}
            className="bg-white p-3 rounded shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{book.title}</h2>
            <p className="text-sm text-gray-700">
              {book.author_name?.join(', ') || 'Autor desconhecido'}
            </p>
            <p className="text-sm text-gray-500">
              Ano: {book.first_publish_year || 'N/A'}
            </p>
            <a
              href={`https://openlibrary.org${book.key}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm mt-1 inline-block"
            >
              Ver detalhes →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LogicaDeBuscaLivros;

