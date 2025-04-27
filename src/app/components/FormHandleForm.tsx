"use client";

import React from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

function FormHandleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  const onError: SubmitErrorHandler<FormValues> = (errors) =>
    console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="max-w-md mx-auto mt-10 p-6 bg-white text-gray-400 rounded-2xl shadow-lg flex flex-col gap-4"
    >
      <div className="flex flex-col">
        <label className="mb-1 font-semibold text-gray-700" htmlFor="firstName">
          First Name
        </label>
        <input
          id="firstName"
          {...register("firstName", { required: "First name is required" })}
          className="border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your first name"
        />
        {errors.firstName && (
          <span className="text-red-500 text-sm mt-1">
            {errors.firstName.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-semibold text-gray-700" htmlFor="lastName">
          Last Name
        </label>
        <input
          id="lastName"
          {...register("lastName", {
            minLength: { value: 2, message: "Minimum 2 characters" },
          })}
          className="border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your last name"
        />
        {errors.lastName && (
          <span className="text-red-500 text-sm mt-1">
            {errors.lastName.message}
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-semibold text-gray-700" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { required: "Email is required" })}
          className="border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
        />
        {errors.email && (
          <span className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition"
      >
        Submit
      </button>
    </form>
  );
}

export default FormHandleForm;
