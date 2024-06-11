import React, { useState } from "react";
import SVGPending from "../../../components/SVGs/CIRCLE/SVGCircle";
import SVGConfirmed from "../../../components/SVGs/CIRCLE/SVGCheck";
import SVGRejected from "../../../components/SVGs/CIRCLE/SVGCancel";
import SVGSuspended from "../../../components/SVGs/CIRCLE/SVGMenu";
import useUpdateTheme from "../../../components/Hooks/updateTheme";
import { Etheme } from "../../../themeConsts";
import Tooltip from "../../../components/containers/separated/tooltip";

type StatusProps = {
  status: number;
  theme: Etheme;
};

const Status: React.FC<StatusProps> = ({ status, theme }) => {
  /*THEME*/ const themes = theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme({ theme }, setNewtheme);
  let SVGComponent;

  switch (status) {
    case 1:
      SVGComponent = SVGPending;
      break;
    case 2:
      SVGComponent = SVGConfirmed;
      break;
    case 3:
      SVGComponent = SVGSuspended;
      break;
    case 4:
      SVGComponent = SVGRejected;
      break;
    default:
      SVGComponent = SVGPending;
  }

  return (
    <div
      className={`
      ${
        status === 1
          ? "GREY"
          : status === 2
          ? "GREEN"
          : status === 3
          ? "YELLOW"
          : status === 4
          ? "RED"
          : "PURPLE"
      } flex flex-col items-center justify-center font-oswald text-text text-[13px] w-100 h-100 font-style-lg`}
    >
      {SVGComponent && (
        <Tooltip
          message={
            status === 1
              ? "Pendente"
              : status === 2
              ? "Confirmado"
              : status === 3
              ? "Suspenso"
              : status === 4
              ? "Rejeitado"
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
        {status === 1
          ? "Pendente"
          : status === 2
          ? "Confirmado"
          : status === 3
          ? "Suspenso"
          : status === 4
          ? "Rejeitado"
          : "Sem status"}
      </span>
    </div>
  );
};

export default Status;
