import React from "react";
import InputPrimary from "./formContainers/InputPrimary";

const FormCliente = () => {
  return (
    <form
      className={`flex flex-wrap w-100 px-5 py-2 my-0.5 ml-0.5 font-oswald text-text`}
    >
      <label className="flex items-center">
        Name:
        <InputPrimary
          readonly={true}
          name={""}
          type={""}
          placeholder={"teste testando"}
          value={""}
          onChange={() => {}}
        />
      </label>
      <label className="flex items-center">
        Contact:
        <InputPrimary
          readonly={true}
          name={""}
          type={""}
          placeholder={"teste testando"}
          value={""}
          onChange={() => {}}
        />
      </label>
      <label className="flex items-center">
        Email:
        <InputPrimary
          readonly={true}
          name={""}
          type={""}
          placeholder={"teste testando"}
          value={""}
          onChange={() => {}}
        />
      </label>
      <label className="flex items-center">
        Activity:
        <InputPrimary
          readonly={true}
          name={""}
          type={""}
          placeholder={"teste testando"}
          value={""}
          onChange={() => {}}
        />
      </label>
      <label className="flex items-center">
        Date for Call:
        <InputPrimary
          readonly={true}
          name={""}
          type={""}
          placeholder={"teste testando"}
          value={""}
          onChange={() => {}}
        />
      </label>
    </form>
  );
};

export default FormCliente;
