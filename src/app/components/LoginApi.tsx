import { useState } from "react";

function LoginApi() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [token, setToken] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password: senha,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setToken(data.token);
        setErro("");
      } else {
        setErro(data.error || "Erro ao fazer login.");
      }
    } catch (err) {
      setErro("Erro de rede.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded gap-4">
      {!token ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2>Login com API</h2>

          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2"
          />

          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border p-2"
          />

          {erro && <p className="text-red-600">{erro}</p>}

          <button className="bg-blue-600 text-white p-2 rounded">Entrar</button>
        </form>
      ) : (
        <div className="text-green-600">
          Login bem sucedido
          <code className="block mt-2 bg-gray-100 p-2 text-sm">{token}</code>
        </div>
      )}
    </div>
  );
}

export default LoginApi;
