import { useState } from "react";

//Interfaces
import { Etheme } from "../../themeConsts";

//styles
import useUpdateTheme from "../../components/Hooks/updateTheme";
import InfoUSERItem from "./InfoUSERItem";
import { User } from "../../API/API_utils";

const InfosUSER = ({ theme, data }: { theme: Etheme; data: User }) => {
  /*THEME*/ const themes = theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme({ theme }, setNewtheme);

  return (
    <div className={`${newtheme}`}>
      <InfoUSERItem theme={{ theme: newtheme }} data={data} />
    </div>
  );
};

export default InfosUSER;
