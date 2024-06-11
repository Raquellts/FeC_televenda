import { useEffect, useState } from "react";

//Interfaces
import { useDataCnpj } from "../../Home/Hooks/dataUpdateCnpj";
import { Etheme } from "../../themeConsts";

//styles
import useUpdateTheme from "../../components/Hooks/updateTheme";
import InfoUSERItem from "./InfoUSERItem";

const InfosUSER = ({ theme }: { theme: Etheme }) => {
  /*THEME*/ const themes = theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme({ theme }, setNewtheme);

  /*dataUpdateCNPJ > vvv*/ const { data, handleDataUpdate } = useDataCnpj();
  useEffect(() => {
    handleDataUpdate();
  }, [handleDataUpdate]);

  return (
    <div className={`${newtheme}`}>
      <InfoUSERItem theme={{ theme: newtheme }} data={data} />
    </div>
  );
};

export default InfosUSER;
