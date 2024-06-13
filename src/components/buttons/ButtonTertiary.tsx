import React from "react";
//import style from "./buttonTertiary.module.css";

interface ButtonSecondaryProps {
  buttonContent?: string;
  className?: string;
  children?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const ButtonTertiary: React.FC<ButtonSecondaryProps> = ({
  children,
  buttonContent,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`block text-primary border-b-2 hover:text-background rounded-lg text-xs px-2 text-center ${className}`}
      type="button"
    >
      {children}
      {buttonContent}
    </button>
  );
};

export default ButtonTertiary;
