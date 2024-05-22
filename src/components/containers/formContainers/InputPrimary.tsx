import React from "react";

interface InputPrimaryProps {
  readonly?: boolean;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputPrimary: React.FC<InputPrimaryProps> = ({
  readonly,
  name,
  type,
  placeholder,
  value,
  onChange,
  className,
}) => {
  const textareaClasses = `${
    readonly
      ? "bg-container ring-0 outline-none text-text placeholder-primary rounded-2xl block p-2.5 my-2"
      : "bg-container focus:bg-gray-700 ring-0 outline-none border-b-2 border-transparent text-text placeholder-primary rounded-2xl focus:border-primary hover:border-tertiary block p-2.5 my-2"
  } ${className}`;

  return (
    <input
      readOnly={readonly}
      name={name}
      type={type}
      placeholder={placeholder}
      required
      className={textareaClasses}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputPrimary;
