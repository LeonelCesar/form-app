import React from "react";
import { useState } from "react";

function RenderizaçãoCondicionalCurtoCircuito() {
  const [mostar, setMostar] = useState(true);

  return (
    <div>
      <h2>Renderização Condicional Curto Circuito</h2>
      {mostar && (
        <p className="text-2xl text-sky-300">
          Esse texto só aparece se mostrar for 'TRUE'.
        </p>
      )}
      <button
        className="bg-sky-950 tex-white p-2 rounded mt-2.5"
        onClick={() => setMostar(!mostar)}
      >
        Alterat o texto...
      </button>
    </div>
  );
}

export default RenderizaçãoCondicionalCurtoCircuito;
