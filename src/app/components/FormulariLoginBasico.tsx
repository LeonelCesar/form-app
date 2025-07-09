import { useState } from "react";

function FormulariLoginBasico() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [logado, setLogado] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !senha || nome) {
      setErro("Preenche todos os campos.");
    }

    if (email === "test@email.com" && senha === "1234567") {
      setErro("");
      setLogado(true);
    } else {
      setErro("Credenciais invalida");
    }
  };

  <div className="max-w-sm mx-auto mt-10 p-4 border rounded">
    {logado ? (
      <div className="text-green-600 text-center">
        Login realizado com sucesso!
      </div>
    ) : (
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <h2 className="text-xl font-bold">Login</h2>

        <input
          type="email"
          placeholder="Digite o seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="border p-2 rounded"
        />

        {erro && <p className="text-red-700 text-sm">{erro}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:to-blue-700 transition"
        >
          Entrar
        </button>
      </form>
    )}
  </div>;
}

export default FormulariLoginBasico;
