import React from "react";

interface TextareaPrimaryProps {
  name: string;
  value: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  readonly?: boolean;
  minRows?: number;
  maxRows?: number;
}

const TextareaPrimary: React.FC<TextareaPrimaryProps> = ({
  name,
  value,
  placeholder,
  onChange,
  className,
  readonly,
  minRows,
  maxRows,
}) => {
  const textareaStyle = {
    minHeight: `${minRows ? minRows * 2 : 4}rem`,
    maxHeight: `${maxRows ? maxRows * 2 : 8}rem`,
  };

  const textareaClasses = `${
    readonly
      ? "cursor-not-allowed bg-container ring-0 outline-none text-text placeholder-primary rounded-2xl block p-2.5 "
      : "bg-container focus:bg-gray-700 ring-0 outline-none border-b-2 border-transparent text-text placeholder-primary rounded-2xl focus:border-primary hover:border-tertiary block p-2.5 "
  } ${className}`;

  return (
    <textarea
      readOnly={readonly}
      name={name}
      placeholder={placeholder}
      required
      className={textareaClasses}
      style={textareaStyle}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextareaPrimary;
