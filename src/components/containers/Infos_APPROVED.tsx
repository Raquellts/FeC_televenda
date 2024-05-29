import { useEffect, useState } from "react";

//Interfaces
import { useDataState } from "../consts/dataUpdateCNPJ";
import { Etheme } from "../../themeConsts";

//styles
import useUpdateTheme from "../consts/updateTheme";
import InfoCnpjItem from "./separated/InfoCnpjItem";

const InfosAPPROVED = (theme: { theme: Etheme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  /*dataUpdateCNPJ > vvv*/ const { data, setData, handleDataUpdate } =
    useDataState();
  useEffect(() => {
    handleDataUpdate();
  }, [handleDataUpdate]);

  return (
    <div className={`${newtheme}`}>
      {data?.cnpjInfo.map((cnpj) => {
        if (cnpj.status === "APPROVED") {
          return (
            <InfoCnpjItem
              cnpj={cnpj}
              theme={theme}
              data={data}
              setData={setData}
            />
          );
        }
      })}
    </div>
  );
};

export default InfosAPPROVED;
