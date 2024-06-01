import React, { useState } from "react";
import SVGDateConfirmed from "../../../SVGs/DATE/SVGDateConfirmed";
import useUpdateTheme from "../../../consts/updateTheme";
import { Etheme } from "../../../../themeConsts";
import SVGDateNeed from "../../../SVGs/DATE/SVGDateNeed";
import SVGDateNotNeed from "../../../SVGs/DATE/SVGDateNotNeed";
import Tooltip from "../tooltip";

type DateProps = {
  status: string;
  date: string;
  theme: Etheme;
};

const DateToCall: React.FC<DateProps> = ({ status, date, theme }) => {
  /*THEME*/ const themes = theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme({ theme }, setNewtheme);

  return (
    <div
      className={`${
        newtheme === Etheme.dark ? "text-tertiary" : "text-dark-tertiary"
      } flex flex-col items-center justify-center text-center font-oswald text-[13px] w-100 h-100 font-style-lg`}
    >
      {status === "SUSPENDED" && date !== null ? (
        <>
          <Tooltip message={date} theme={newtheme} className="sm:hidden block">
            <SVGDateConfirmed
              width={40}
              height={40}
              fill_one={"none"}
              fill_two={"currentColor"}
            />
          </Tooltip>
          <p className="hidden sm:block">{date}</p>
        </>
      ) : status === "SUSPENDED" && date === null ? (
        <>
          <Tooltip
            message="Á Agendar"
            theme={newtheme}
            className="sm:hidden block"
          >
            <SVGDateNeed
              width={40}
              height={40}
              fill_one={"none"}
              fill_two={"currentColor"}
            />
          </Tooltip>
          <p className="hidden sm:block">Á Agendar</p>
        </>
      ) : (
        <>
          <Tooltip message="Sem necessidade de agendamento" theme={newtheme}>
            <SVGDateNotNeed
              width={40}
              height={40}
              fill_one={"none"}
              fill_two={"currentColor"}
            />
          </Tooltip>
          <p className="hidden sm:block">sem data</p>
        </>
      )}
    </div>
  );
};

export default DateToCall;
