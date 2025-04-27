import React from "react";
import { useState } from "react";


/* const user = [
  {
    id: 1,
    firstName: "Leonel",
    email: "leonelcesar62@gmail.com",
    phoneNumber: "936071778",
    address: "Rua Miguel Bombarda Nº 225 1-DT",
  },
  {
    id: 1,
    firstName: "Roque",
    email: "roque78862@gmail.com",
    phoneNumber: "986765432",
    address: "Av. Lisboa Miranda Cavalo Nº 456 R/C D",
  },
]; */

function UserFormJsonApi() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addres, setAddres] = useState("");

  return (
    <div className="flex items-center justify-center w-[550px] border border-slate-100 p-2">
      <div className="w-full p-4">
        <form
          action=""
          className="flex flex-col gap-2.5 w-full bg-slate-950 text-slate-100 p-2"
        >
          <h1 className="text-2xl flex text-center justify-center py-2">
            Cadastro de usuário
          </h1>
          <div className="">
            <label className="text-slate-500 text-sm">First Name</label>
            <input
              className="w-full h-8 bg-slate-900 text-slate-50 p-2 mt-2"
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="">
            <label className="text-slate-500 text-sm">E-mail</label>
            <input
              className="w-full h-8 bg-slate-900 text-slate-50 p-2 mt-2"
              type="email"
              placeholder="E-mail"
            />
          </div>

          <div className="">
            <label className="text-slate-500 text-sm">Phone</label>
            <input
              className="w-full h-8 bg-slate-900 text-slate-50 p-2 mt-2"
              type="number"
              placeholder="Phone"
            />
          </div>

          <div className="">
            <label className="text-slate-500 text-sm">Address</label>
            <input
              className="w-full h-8 bg-slate-900 text-slate-50 p-2 mt-2"
              type="text"
              placeholder="Address"
            />
          </div>

          <div className="flex items-center justify-center mt-4 w-full">
            <button type="button" className="w-full h-10 bg-slate-800">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserFormJsonApi;
