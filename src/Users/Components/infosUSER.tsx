import { useEffect, useState } from "react";

//Interfaces
import { Etheme } from "../../themeConsts";

//styles
import useUpdateTheme from "../../components/Hooks/updateTheme";
import InfoUSERItem from "./InfoUSERItem";
import { useAllCommonUser } from "../Hooks/dataUpdateCnpj";

const InfosUSER = ({ theme }: { theme: Etheme }) => {
  /*THEME*/ const themes = theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme({ theme }, setNewtheme);

  /*dataUpdateCNPJ > vvv*/ const { data, handleChangeUpdate } =
    useAllCommonUser();

  useEffect(() => {
    handleChangeUpdate();
  }, [handleChangeUpdate]);

  console.log(data);

  return data.map((data) => {
    return (
      <div className={`${newtheme}`}>
        <InfoUSERItem theme={{ theme: newtheme }} data={data} />
      </div>
    );
  });
};

export default InfosUSER;
