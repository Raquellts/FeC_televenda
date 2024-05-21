import React from "react";
//import style from "./buttonTertiary.module.css";

interface ButtonSecondaryProps {
  href?: string;
  buttonContent: string;
  className?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const ButtonTertiary: React.FC<ButtonSecondaryProps> = ({
  buttonContent,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`block text-primary border-b-2 hover:text-background rounded-lg text-xs px-2 text-center ${className}`}
      type="button"
    >
      {buttonContent}
    </button>
  );
};

export default ButtonTertiary;
