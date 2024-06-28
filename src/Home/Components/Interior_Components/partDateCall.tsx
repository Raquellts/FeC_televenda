import React, { useState } from "react";
import Tooltip from "../../../components/containers/separated/tooltip";
import SVGDateConfirmed from "../../../components/SVGs/DATE/SVGDateConfirmed";
import SVGDateNeed from "../../../components/SVGs/DATE/SVGDateNeed";
import SVGDateNotNeed from "../../../components/SVGs/DATE/SVGDateNotNeed";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../../components/Hooks/updateTheme";
import formatarData from "../../../components/Elements_for_Forms/DateFormatter";

type DateProps = {
  status: number;
  date: Date | null;
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
      {status === 3 && date !== null ? (
        <>
          <Tooltip
            message={date ? formatarData(new Date(date)) : ""}
            theme={newtheme}
            className="sm:hidden block"
          >
            <SVGDateConfirmed
              width={40}
              height={40}
              fill_one={"none"}
              fill_two={"currentColor"}
            />
          </Tooltip>
          <p className="hidden sm:block">{formatarData(new Date(date))}</p>
        </>
      ) : status === 3 && date === null ? (
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
