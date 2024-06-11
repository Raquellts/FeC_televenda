import { useCallback, useEffect } from "react";
import { Etheme } from "../../themeConsts";

const useUpdateTheme = (
  theme: { theme: Etheme },
  setNewtheme: React.Dispatch<React.SetStateAction<Etheme>>
) => {
  const handleDataUpdate = useCallback(() => {
    setNewtheme(theme.theme);
  }, [theme.theme, setNewtheme]);

  useEffect(() => {
    handleDataUpdate();
  }, [handleDataUpdate]);
};

export default useUpdateTheme;
