import React from "react";
import style from "./buttonPrimary.module.css";

type ButtonPrimaryProps = {
  buttonContent: string;
};

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ buttonContent }) => {
  return (
    <button
      type={"submit"}
      className={`flex-1 rounded-l-2xl h-10 p-2 text-center my-2 lg:my-5 button-primary font-oswald ${style.button_primary}`}
    >
      <span className={`${style.button_content}`}>{buttonContent}</span>
    </button>
  );
};

export default ButtonPrimary;
