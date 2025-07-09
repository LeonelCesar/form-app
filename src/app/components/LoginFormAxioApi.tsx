import axios from "axios";
import { useState } from "react";

 function LoginFormAxioApi() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      setToken(response.data.token);
      setError("");
      alert("Login bem-sucedido!");
    } catch (err) {
      setError(err.response.data.error || "Erro ao fazer login");
      setToken("");
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 max-w-sm mx-auto">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
      />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Entrar
      </button>

      {token && <p className="text-green-500">Token: {token}</p>}
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

export default LoginFormAxioApi;
