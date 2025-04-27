import { useState } from "react";

// Definição do tipo para os itens do carrinho
type Item = {
  id: number;
  nome: string;
  preco: number;
};

function Carrinho() {
  // Produtos iniciais simulados
  const produtosSimulados: Item[] = [
    { id: 1, nome: "Teclado Mecânico", preco: 12 },
    { id: 2, nome: "Mouse Gamer", preco: 5 },
    { id: 3, nome: "Monitor Polegada TYUPX", preco: 56 },
    { id: 4, nome: "Computador RTDF", preco: 18 },
  ];

  const [itens, setItens] = useState<Item[]>(produtosSimulados);

  const adicionarItem = () => {
    const novoItem: Item = {
      id: itens.length + 1,
      nome: `Produto ${itens.length + 1}`,
      preco: Math.floor(Math.random() * 200) + 50, // Preço aleatório
    };
    setItens([...itens, novoItem]); // Atualiza o estado
  };

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <button
        className="p-2 bg-amber-600 text-slate-800"
        onClick={adicionarItem}
      >
        Adicionar Item
      </button>
      <ul>
        {itens.map((item) => (
          <li key={item.id}>
            {item.nome} - €{item.preco}
          </li>
        ))}
      </ul>
      <p>
        <strong>Total:</strong> €
        {itens.reduce((total, item) => total + item.preco, 0)}
      </p>
    </div>
  );
}

export default Carrinho;
