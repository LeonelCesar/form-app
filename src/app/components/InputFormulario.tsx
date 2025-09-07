import { useState } from "react";

// 🔹 Componente de Input
type InputProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
};

function InputField({
  label,
  type = "text",
  value,
  onChange,
  error,
  disabled = false,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={`
          border rounded-lg px-3 py-2 outline-none transition-all
          ${error ? "border-gray-800" : "border-gray-300 focus:border-blue-500"}
          ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
        `}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}

// 🔹 Componente de Botão
type ButtonProps = {
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
};

function Button({
  variant = "primary",
  disabled = false,
  loading = false,
  children,
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      disabled={disabled || loading}
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {loading ? "Carregando..." : children}
    </button>
  );
}

// 🔹 Formulário Completo
 function InputFormulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulação de envio
    setTimeout(() => {
      console.log(`Dados enviados:\nNome: ${name}\nEmail: ${email}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 flex flex-col gap-4 p-6 border rounded-xl shadow-lg"
    >
      <h2 className="text-xl font-bold text-gray-800">Cadastro</h2>

      <InputField
        label="Nome"
        value={name}
        onChange={setName}
        error={!name ? "Nome é obrigatório" : ""}
      />

      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        error={!email.includes("@") ? "Email inválido" : ""}
      />

      <InputField
        label="Senha"
        type="password"
        value={password}
        onChange={setPassword}
        error={password.length < 6 ? "Mínimo 6 caracteres" : ""}
      />

      <Button variant="primary" loading={loading} disabled={!name || !email}>
        Enviar
      </Button>
    </form>
  );
}

export default InputFormulario;
