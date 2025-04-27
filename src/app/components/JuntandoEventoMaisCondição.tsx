"use client";

import React from "react";
import { useState } from "react";

function JuntandoEventoMaisCondição() {
  const [mostrarTexto, setMostrarTexto] = useState(false);
  const alterarText = () => {
    setMostrarTexto(!mostrarTexto);
  };
  return (
    <div>
      <h1>Juntando Evento + Condição</h1>
      <button
        className="bg-gray-600 text-gray-900 mt-2.5 rounded mb-2.5 p-2"
        onClick={alterarText}
      >
        {mostrarTexto ? "Esconder" : "Mostrar"} texto
      </button>
      {mostrarTexto && (
        <p className="text-gray-500 text-lg">
          Olá, Esse é o meu texto condicional!
        </p>
      )}
    </div>
  );
}

export default JuntandoEventoMaisCondição;