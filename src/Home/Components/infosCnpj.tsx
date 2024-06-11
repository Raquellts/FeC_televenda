import { useEffect, useState } from "react";

//Interfaces
import { useDataCnpj } from "../Hooks/dataUpdateCnpj";
import { Etheme } from "../../themeConsts";

//styles
import useUpdateTheme from "../../components/Hooks/updateTheme";
import InfoCnpjItem from "./Interior_Components/InfoCnpjItem";

const InfosCnpj = ({
  statusNumber,
  theme,
}: {
  statusNumber: number | null;
  theme: Etheme;
}) => {
  /*THEME*/ const themes = theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme({ theme }, setNewtheme);

  /*dataUpdateCNPJ > vvv*/ const { data, setData, handleDataUpdate } =
    useDataCnpj();
  useEffect(() => {
    handleDataUpdate();
  }, [handleDataUpdate]);

  return (
    <div className={`${newtheme}`}>
      {data?.map((cnpj) => {
        if (!statusNumber || cnpj.status === statusNumber) {
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
