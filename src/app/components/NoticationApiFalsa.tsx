import { useState, useEffect } from "react";

// Tipo para a notificação
type Notificacao = {
  id: number;
  mensagem: string;
};

function Notificacoes() {
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);

  // Função para buscar notificações simuladas
  const fetchNotificacoes = () => {
    setCarregando(true);
    setTimeout(() => {
      const novasNotificacoes: Notificacao[] = [
        { id: 1, mensagem: "Novo e-mail recebido 📩" },
        { id: 2, mensagem: "Atualização disponível para download 🔄" },
        { id: 3, mensagem: "Mensagem de suporte respondida 📞" },
      ];
      setNotificacoes(novasNotificacoes);
      setCarregando(false);
    }, 1000);
  };

  useEffect(() => {
    fetchNotificacoes(); // Executa ao montar
  }, []);

  return (
    <div>
      <h2>Notificações</h2>
      <button
        className="p-2 bg-amber-600 text-slate-800"
        onClick={fetchNotificacoes}
        disabled={carregando}
      >
        {carregando ? "Carregando..." : "Atualizar Notificações"}
      </button>
      {carregando ? (
        <p>A carregar notificações...</p>
      ) : (
        <ul>
          {notificacoes.map((notificacao) => (
            <li key={notificacao.id}>{notificacao.mensagem}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Notificacoes;
