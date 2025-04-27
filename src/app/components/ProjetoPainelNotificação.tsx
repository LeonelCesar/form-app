import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import { div, p } from "framer-motion/client";

function ProjetoPainelNotificação() {
  const [aberto, SetAberto] = useState(false);
  const [notificações, setNotificações] = useState([
    "Você tem uma nova mensagem!",
    "Atualização disponivel.",
    "Nova conexão adicionada.",
  ]);

  const taggleNotificações = () => {
    SetAberto(!aberto);
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-2xl text-sky-800">Projeto Pinel Notificação</h2>
      <button
        onClick={taggleNotificações}
        className="flex items-center gap-2 p-2 mt-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700 transition"
      >
        <Bell className="w-5 h-5 " />
      </button>
      {aberto && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-4 bg-white rounded shadow p-4 space-y-2"
        >
          {notificações.length > 0 ? (
            notificações.map((msg, index) => (
              <div
                key={index}
                className="bg-indigo-50 border-l-4 border-indigo-400 p-2 rounded"
              >
                {msg}
              </div>
            ))
          ) : (
            <p className="text-amber-600">Sem notificações no momento</p>
          )}
        </motion.div>
      )}
    </div>
  );
}

export default ProjetoPainelNotificação;
