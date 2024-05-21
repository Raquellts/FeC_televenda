import React from "react";

interface InputPrimaryProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputPrimary: React.FC<InputPrimaryProps> = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required
      className={`bg-container focus:bg-gray-700 ring-0 outline-none border-b-2 border-transparent text-text placeholder-primary rounded-2xl focus:border-primary hover:border-tertiary block p-2.5 checked:bg-emerald-500 my-2 pl-5 ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputPrimary;
