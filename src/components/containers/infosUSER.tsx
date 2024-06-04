import { useEffect, useState } from "react";

//Interfaces
import { useDataState } from "../consts/dataUpdateCNPJ";
import { Etheme } from "../../themeConsts";

//styles
import useUpdateTheme from "../consts/updateTheme";
import InfoUSERItem from "./separated/Users LIst/InfoUSERItem";

const InfosUSER = ({ theme }: { theme: Etheme }) => {
  /*THEME*/ const themes = theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme({ theme }, setNewtheme);

  /*dataUpdateCNPJ > vvv*/ const { data, handleDataUpdate } = useDataState();
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
