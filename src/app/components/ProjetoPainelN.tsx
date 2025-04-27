import { useState } from "react";
import { Bell, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// 1. Tipo da notificação
type Notificacao = {
  id: number;
  mensagem: string;
};

const Notificacoes: React.FC = () => {
  // 2. Estados com tipagem
  const [aberto, setAberto] = useState<boolean>(false);
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);

  const toggleNotificacoes = () => setAberto(!aberto);

  // 3. Adicionar nova notificação com hora atual
  const adicionarNotificacao = () => {
    const hora = new Date().toLocaleTimeString();
    const nova: Notificacao = {
      id: Date.now(),
      mensagem: `Nova notificação recebida às ${hora}`,
    };
    setNotificacoes((prev) => [nova, ...prev]);
  };

  // 4. Remover notificação pelo ID
  const removerNotificacao = (id: number) => {
    setNotificacoes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xlg">Projeto Painel Notificação Com Typscript</h2>
        <button
          onClick={toggleNotificacoes}
          className="flex items-center gap-2 px-2 py-2 bg-indigo-600 text-white rounded-2xl shadow hover:bg-indigo-700 transition"
        >
          <Bell className="w-5 h-5" />
          {aberto ? "Fechar" : "Ver"} Notificações
        </button>

        <button
          onClick={adicionarNotificacao}
          className="px-2 py-2 bg-green-600 text-white rounded-2xl shadow hover:bg-green-700 transition"
        >
          Adicionar Notificação
        </button>
      </div>

      {aberto && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-4 bg-white rounded-xl shadow p-4 space-y-2"
        >
          {notificacoes.length > 0 ? (
            notificacoes.map((n) => (
              <div
                key={n.id}
                className="flex justify-between items-center bg-indigo-50 border-l-4 border-indigo-400 p-2 rounded"
              >
                <span className="text-gray-400">{n.mensagem}</span>
                <button
                  onClick={() => removerNotificacao(n.id)}
                  className="text-green-600 hover:text-green-800"
                  title="Marcar como lida"
                >
                  <CheckCircle className="w-5 h-5 ml-4"  />
                </button>
              </div>
            ))
          ) : (
            <p className="text-amber-600">Sem notificações no momento.</p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default Notificacoes;
