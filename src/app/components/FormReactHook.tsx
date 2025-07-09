"use client";

import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  password: string;
  profession?: string;
};

function FormReactHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data); 
  };

  return (
    <div className="bg-slate-900 text-slate-200 p-4 w-[640px] items-center m-auto">
      <h4 className="text-2xl flex text-center mb-2">Formulario React-Form</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div>
          <label className="pb-2">Name</label>
          <input
            type="text"
            className="bg-slate-800 w-full text-sm p-1 h-10"
            placeholder="Your name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="pb-2">Email</label>
          <input
            type="email"
            className="bg-slate-800 w-full text-sm p-1 h-10"
            placeholder="Your email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="pb-2">Password</label>
          <input
            type="password"
            className="bg-slate-800 w-full text-sm p-1 h-10"
            placeholder="Password"
            {...register("password", { required: "Password is required", minLength: { value: 9, message: "Password must have at least 9 characters" } })}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>

        <div>
          <label className="pb-2">Your profession</label>
          <select
            {...register("profession")}
            className="bg-slate-800 w-full text-sm p-1 h-10 mb-4"
          >
            <option value="0">Select your profession</option>
            <option value="Developer">Developer</option>
            <option value="Lawyer">Desenvolvedor</option>
            <option value="Doctor">Doctor</option>
          </select>
        </div>

        <div>
          <button type="submit" className="bg-slate-600 w-full text-sm py-2">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormReactHook;