import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
  nome: string;
  email: string;
  senha: number;
  phone: number;
};

function MeuFormulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col shadow text-white w-[420px]"
    >
      <h1 className="text-2xl text-blue-800 items-center pb-2.5">
        Meu Formulario
      </h1>
      <div className="flex flex-col gap-2 text">
        <label className="text-sm text-slate-400 mb-2">Nome</label>
        <input
          className="p-2 text-slate-500 rounder border mb-2"
          type="text"
          placeholder="Seu Nome"
          {...register("nome", {
            required: "Nome é obrigatório",
          })}
        />
        {errors.nome && <span className="text-red-600">{errors.nome.message}</span>}
      </div>
      <div className="flex flex-col gap-2 text">
        <label className="text-sm text-slate-400 mb-2">E-mail</label>
        <input
          className="p-2 text-slate-500 rounder border mb-2"
          type="email"
          placeholder="E-mail"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: { value: /\S+@\S+\.\S+/, message: "Email Invalido" },
          })}
        />
        {errors.email && <span className="text-red-600">{errors.email.message}</span>}
      </div>
      <div className="flex flex-col gap-2 text">
        <label className="text-sm text-slate-400 mb-2">Senha</label>
        <input
          className="p-2 text-slate-500 rounder border mb-2"
          type="password"
          placeholder="Senha"
          {...register("senha", { required: "Senha é obrigatoria" })}
        />
        {errors.senha && <span className="text-red-600">{errors.senha.message}</span>}
      </div>
      <div className="flex flex-col gap-2 text">
        <label className="text-sm text-slate-400 mb-2">Phone</label>
        <input
          className="p-2 text-slate-500 rounder border mb-2"
          type="number"
          placeholder="Telefone"
          {...register("phone", { required: "Telefone é obrigatório" })}
        />
        {errors.phone && <span className="text-red-600">{errors.phone.message}</span>}
      </div>
      <button
        className="p-2 mt-4.5 bg-blue-800 text-slate-100 rounder border"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}

export default MeuFormulario;
