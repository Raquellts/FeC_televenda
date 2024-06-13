import React, { useCallback, useEffect, useState } from "react";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../../components/Hooks/updateTheme";
import { User } from "../../../API/API_utils";
import { getCommonUser } from "../../../API/API_cnpj";

interface InfoTelemarkingProps {
  theme: { theme: Etheme };
}

const InfoTelemarking: React.FC<InfoTelemarkingProps> = ({ theme }) => {
  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  /*CLASSES REPETIDAS*/ const labelSelects_sm =
    "flex w-full items-center my-0 text-[14px]";
  /*CLASSES REPETIDAS*/ const spans = `${
    newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
  } opacity-80 mr-2`;
  /*CLASSES REPETIDAS*/ const Pclasses = `font-style-md`;

  const [user, setUser] = useState<User>();
  const handleDataUpdate = useCallback(() => {
    getCommonUser().then((data) => {
      setUser(data);
    });
  }, []);

  useEffect(() => {
    handleDataUpdate();
  }, [handleDataUpdate]);

  return (
    <div>
      <p className="flex justify-start w-100 font-oswald text-[16px] text-primary pt-5 pl-5">
        Ligação efetuada por:
      </p>
      {user && (
        <>
          {/*---- informações do Vendedor ----*/}
          <form
            className={`flex flex-wrap w-100 px-5 py-2 my-0.5 ml-0.5 font-oswald ${
              newtheme === Etheme.light ? "text-primary" : "text-dark-primary"
            }`}
          >
            {/*  */}
            <label className={labelSelects_sm}>
              <span className={spans}>ID do usuario:</span>
              <p className={Pclasses}>{user.id || ""}</p>
            </label>
            {/*  */}
            <label className={labelSelects_sm}>
              <span className={spans}>Email do usuario:</span>
              <p className={Pclasses}>{user.email || ""}</p>
            </label>
            {/*  */}
            <label className={labelSelects_sm}>
              <span className={spans}>Usuario:</span>
              <p className={Pclasses}>{user.name || ""}</p>
            </label>
          </form>
        </>
      )}
    </div>
  );
};

export default InfoTelemarking;
