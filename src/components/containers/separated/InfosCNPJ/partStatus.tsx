import React, { useState } from "react";
import SVGPending from "../../../SVGs/CIRCLE/SVGCircle";
import SVGApproved from "../../../SVGs/CIRCLE/SVGCheck";
import SVGRejected from "../../../SVGs/CIRCLE/SVGCancel";
import SVGSuspended from "../../../SVGs/CIRCLE/SVGMenu";
import Tooltip from "../tooltip";
import { Etheme } from "../../../../themeConsts";
import useUpdateTheme from "../../../consts/updateTheme";

type StatusProps = {
  status: string;
  theme: Etheme;
};

const Status: React.FC<StatusProps> = ({ status, theme }) => {
  /*THEME*/ const themes = theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme({ theme }, setNewtheme);
  let SVGComponent;

  switch (status) {
    case "PENDING":
      SVGComponent = SVGPending;
      break;
    case "APPROVED":
      SVGComponent = SVGApproved;
      break;
    case "REJECTED":
      SVGComponent = SVGRejected;
      break;
    case "SUSPENDED":
      SVGComponent = SVGSuspended;
      break;
    default:
      SVGComponent = SVGPending;
  }

  return (
    <div
      className={`
      ${
        status === "PENDING"
          ? "GREY"
          : status === "APPROVED"
          ? "GREEN"
          : status === "REJECTED"
          ? "RED"
          : status === "SUSPENDED"
          ? "YELLOW"
          : "PURPLE"
      } flex flex-col items-center justify-center font-oswald text-text text-[13px] w-100 h-100 font-style-lg`}
    >
      {SVGComponent && (
        <Tooltip
          message={
            status === "PENDING"
              ? "Pendente"
              : status === "APPROVED"
              ? "Aprovado"
              : status === "REJECTED"
              ? "Rejeitado"
              : status === "SUSPENDED"
              ? "Suspenso"
              : "Sem status"
          }
          theme={newtheme}
          className={`sm:hidden block`}
        >
          <SVGComponent
            width={40}
            height={40}
            fill_one={"none"}
            fill_two={"currentColor"}
          />
        </Tooltip>
      )}
      <span className="hidden sm:block">
        {status === "PENDING"
          ? "Pendente"
          : status === "APPROVED"
          ? "Aprovado"
          : status === "REJECTED"
          ? "Rejeitado"
          : status === "SUSPENDED"
          ? "Suspenso"
          : "Sem status"}
      </span>
    </div>
  );
};

export default Status;
