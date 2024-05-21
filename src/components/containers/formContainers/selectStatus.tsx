import { ChangeEvent } from "react";
import { USERInterface } from "../CNPJInterface";

const SelectComponent: React.FC<{
  cnpj: { cnpj: string };
  data: USERInterface;
  setData: React.Dispatch<React.SetStateAction<USERInterface>>;
}> = ({ cnpj, data, setData }) => {
  const hendleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    const y = ""; // or any other initial value you want
    setData({
      ...data,
      cnpjInfo: data?.cnpjInfo.map((c) => {
        if (c.cnpj === name) {
          return {
            ...c,
            status: value,
            y,
          };
        } else {
          return c;
        }
      }),
    });
  };

  return (
    <select
      onChange={hendleChange}
      name={cnpj.cnpj}
      value={data.cnpjInfo.find((c) => c.cnpj === cnpj.cnpj)?.status}
      className="w-full h-full rounded-e-2xl bg-container"
    >
      <option value="PENDING">PENDING</option>
      <option value="APPROVED">APPROVED</option>
      <option value="REJECTED">REJECTED</option>
      <option value="SUSPENDED">SUSPENDED</option>
    </select>
  );
};

export default SelectComponent;
