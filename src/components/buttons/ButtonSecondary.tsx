import React from "react";
import style from "./buttonSecondary.module.css";

interface ButtonSecondaryProps {
  href: string;
  buttonContent: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  href,
  buttonContent,
}) => {
  return (
    <a
      className={`text-color-2 button-secondary font-oswald justify-center rounded-r-2xl h-8 p-2 text-center my-3 lg:my-6 small-style ${style.button_secondary}`}
      href={href}
    >
      {buttonContent}
    </a>
  );
};

export default ButtonSecondary;
