import { useEffect, useState } from "react";

//Interfaces
import { useDataState } from "../consts/dataUpdateCNPJ";
import { Etheme } from "../../themeConsts";

//styles
import useUpdateTheme from "../consts/updateTheme";
import InfoCnpjItem from "./separated/InfosCNPJ/InfoCnpjItem";

const InfosCnpj = ({
  statustext,
  theme,
}: {
  statustext: string | null;
  theme: Etheme;
}) => {
  /*THEME*/ const themes = theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme({ theme }, setNewtheme);

  /*dataUpdateCNPJ > vvv*/ const { data, setData, handleDataUpdate } =
    useDataState();
  useEffect(() => {
    handleDataUpdate();
  }, [handleDataUpdate]);

  return (
    <div className={`${newtheme}`}>
      {data?.cnpjInfo.map((cnpj) => {
        if (!statustext || cnpj.status === statustext) {
          return (
            <InfoCnpjItem
              cnpj={cnpj}
              theme={{ theme: newtheme }}
              data={data}
              setData={setData}
            />
          );
        }
      })}
    </div>
  );
};

export default InfosCnpj;
