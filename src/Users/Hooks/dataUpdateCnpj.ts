import { useCallback, useState } from "react";
import { User } from "../../API/API_utils";
import { getAllCommonUser } from "../../API/API_cnpj";

export const useAllCommonUser = () => {
  const [data, setData] = useState<User[]>([]);

  const handleChangeUpdate = useCallback(() => {
    if (data.length === 0) {
      getAllCommonUser().then((newData) => {
        setData(newData);
      });
    }
  }, [data]);

  return { data, handleChangeUpdate };
};
