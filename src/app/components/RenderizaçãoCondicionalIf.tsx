import React from "react";
import { useState } from "react";

function RenderizaçãoCondicionalIf() {
  const [isLogado, setIslogado] = useState(false);

  return (
    <div>
      <h1>Renderização Condicional if simples com estado</h1>
      {isLogado ? (
        <h3 className="text-amber-400 text-2xl">Seja bem vindo a pagina!</h3>
      ) : (
        <h3 className="text-red-700 text-2xl">Por favor, faça login</h3>
      )}

      <button
        className="bg-amber-400 text-slate-950 p-2 rounded mt-2"
        onClick={() => setIslogado(!isLogado)}
      >
        {isLogado ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default RenderizaçãoCondicionalIf;
