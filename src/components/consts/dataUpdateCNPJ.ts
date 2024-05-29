import { useCallback, useState } from "react";
import { USERInterface } from "../../../InterfaceCNPJ";
import cnpjlist from "../../../cnpj";

export const useDataState = () => {
  const [data, setData] = useState<USERInterface>({
    user: "",
    id: 0,
    cnpjInfo: [],
  });

  const handleDataUpdate = useCallback(() => {
    if (data.cnpjInfo.length === 0) {
      setData(cnpjlist);
    }
  }, [data]);

  return { data, setData, handleDataUpdate };
};
