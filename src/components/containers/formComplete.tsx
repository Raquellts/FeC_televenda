import React from "react";
import FormCliente from "./formCliente";
import FormCompra from "./formCompra";
//import { CNPJInterface } from "./CNPJInterface";

//interface CNPJFormProps { cnpj: CNPJInterface; }

const FormComplete = () => {
  return (
    <div className="shadow-md flex flex-col items-center justify-between p-1 bg-container rounded-2xl">
      <div className="divide-y">
        <FormCliente />
        <FormCompra />
      </div>
    </div>
  );
};

export default FormComplete;
