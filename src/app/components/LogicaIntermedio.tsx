'use client';

import { useState, useEffect } from 'react';

type WikipediaResult = {
  pageid: number;
  title: string;
  snippet: string;
};

 function LogicaIntermedio() {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<WikipediaResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!query) {
        setResults([]);
        return;
      }

      setLoading(true);

      fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&format=json&origin=*`
      )
        .then((res) => res.json())
        .then((data: { query: { search: WikipediaResult[] } }) => {
          setResults(data.query.search);
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
        placeholder="Pesquisar na Wikipedia..."
        className="w-full p-2 border border-gray-400 rounded text-black"
      />

      {loading && <p className="mt-2 text-sm text-gray-500">🔄 Carregando...</p>}

      <ul className="mt-4 space-y-4">
        {results.map((item) => (
          <li
            key={item.pageid}
            className="bg-white p-3 rounded shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p
              className="text-sm text-gray-700"
              dangerouslySetInnerHTML={{ __html: item.snippet + '...' }}
            />
            <a
              href={`https://en.wikipedia.org/?curid=${item.pageid}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm mt-1 inline-block"
            >
              Ver página →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LogicaIntermedio;


