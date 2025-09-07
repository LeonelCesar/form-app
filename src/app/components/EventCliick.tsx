import React from "react";
import { useState } from "react";

function EventCliick() {
  const [alterarNome, setAlterarNome] = useState("Liquine César");
  
  const handlerClcik = () => {
    setAlterarNome("Andarde Julião");
  };

  return (
    <div>
      <strong className="text-amber-300 ">{alterarNome}</strong> <br />
      <button 
      className="bg-amber-950 text-2xl p-2 mt-2 rounded"
      onClick={handlerClcik}>Alterar Nome</button>
    </div>
  );
}

export default EventCliick;
