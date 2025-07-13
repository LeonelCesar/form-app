import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type FormValues = {
  nome: string;
  email: string;
  senha: string;
  phone: number;
};

 function CadastroUsuario() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>();

  const [mensagem, setMensagem] = useState<string>("");
  const [erro, setErro] = useState<string>("");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setMensagem("");
    setErro("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Dados enviados:", data);
      setMensagem("Usuário cadastrado com sucesso!");
      reset();
    } catch (e) {
      setErro("Erro ao cadastrar. Tente novamente.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto mt-10 space-y-4 p-6 border rounded-2xl shadow bg-slate-100 text-slate-700"
    >
      <h2 className="text-2xl font-bold mb-4">Cadastro de Usuário e testes</h2>

      {mensagem && <p className="bg-green-100 text-green-700 p-2 rounded">{mensagem}</p>}
      {erro && <p className="bg-red-100 text-red-700 p-2 rounded">{erro}</p>}

      <div>
        <label className="block">Name</label>
        <input
          type="text"
          {...register("nome", { required: "Nome é obrigatório" })}
          className="border p-2 w-full rounded"
        />
        {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
      </div>

      <div>
        <label className="block">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Formato de email inválido",
            },
          })}
          className="border p-2 w-full rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block">Phone</label>
        <input
          type="number"
          {...register("phone", {
            required: "Telefone é obrigatória",
            minLength: {
              value: 9,
              message: "Mínimo 9 caracteres",
            },
          })}
          className="border p-2 w-full rounded"
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block">Senha</label>
        <input
          type="password"
          {...register("senha", {
            required: "Senha obrigatória",
            minLength: {
              value: 6,
              message: "Mínimo 6 caracteres",
            },
          })}
          className="border p-2 w-full rounded"
        />
        {errors.senha && <p className="text-red-500 text-sm">{errors.senha.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
      >
        {isSubmitting ? "Enviando..." : "Cadastrar"}
      </button>
    </form>
  );
}

export default CadastroUsuario;
