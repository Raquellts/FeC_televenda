import { useCallback, useState } from "react";
import { Cnpj } from "../../API/API_utils";
import { getCnpjs } from "../../API/API_cnpj";

export const useDataCnpj = () => {
  const [data, setData] = useState<Cnpj[]>([]);

  const handleDataUpdate = useCallback(() => {
    if (data.length === 0) {
      getCnpjs().then((data) => {
        setData(data);
      });
    }
  }, [data]);

  return { data, setData, handleDataUpdate };
};
