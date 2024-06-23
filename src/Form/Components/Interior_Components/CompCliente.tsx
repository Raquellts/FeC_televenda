import React, { useMemo, useState } from "react";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../../components/Hooks/updateTheme";
import { Cnpj } from "../../../API/API_utils";
import ModalComments from "../../../components/containers/separated/modalComments";
import { usePrintState } from "../../../components/Hooks/isPrinting";

interface CompClienteProps {
  cnpj: Cnpj;
  theme: { theme: Etheme };
}

const CompCliente: React.FC<CompClienteProps> = ({ cnpj, theme }) => {
  const { isPrinting } = usePrintState();

  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  const pClass = `${
    newtheme === Etheme.light ? "text-primary" : "text-dark-primary "
  } py-2 font-inter font-style-xlg text-[15px] truncate`;
  const spans = `px-1 font-style-md truncate`;

  const formatarData = (data: Date) => {
    if (!(data instanceof Date)) {
      throw new Error("O parâmetro fornecido não é um objeto Date válido.");
    }

    const dia = String(data.getDate() + 1).padStart(2, "0"); // Obtém o dia do mês
    const mes = String(data.getMonth() + 1).padStart(2, "0"); // Obtém o mês (0-11) e ajusta para (1-12)
    const ano = data.getFullYear(); // Obtém o ano

    return `${dia}/${mes}/${ano}`;
  };

  const date = cnpj.dateForCall;
  const formattedDate = useMemo(() => {
    try {
      const parsedDate = date ? new Date(date) : null;
      if (parsedDate instanceof Date && !isNaN(parsedDate.getTime())) {
        return formatarData(parsedDate);
      } else {
        throw new Error("Data inválida");
      }
    } catch (error) {
      return "Data inválida";
    }
  }, [date]);

  return (
    <div>
      <div className="flex justify-between w-100 font-oswald text-[20px] text-primary pt-5">
        <div className={`self-center ml-5 ${isPrinting ? "hidden" : ""}`}>
          <ModalComments
            theme={theme}
            cpnjId={cnpj.id}
            comment={cnpj.comments || ""}
          />
        </div>
        {cnpj && cnpj.razaoSocial}
        <div></div>
      </div>
      {cnpj && (
        <div>
          {/*---- informações do cliente ----*/}
          <div className="w-full justify-between flex flex-row flex-wrap my-5 px-4">
            <div>
              {/* NOME DA EMPRESA ------------*/}
              <p className={pClass}>
                <span className={spans}>Nome:</span>
                {cnpj.razaoSocial || "Não informado"}
              </p>
              {/* ATIVIDADES DA EMPRESA -----*/}
              <p className={pClass}>
                <span className={spans}>Atividades:</span>
                {cnpj.activity || "Não informado"}
              </p>
            </div>
            <div>
              {/* TELEFONE 01 -----------*/}
              <p className={pClass}>
                <span className={spans}>Telefone 01:</span>
                {cnpj.phone1 || "Não informado"}
              </p>
              {/* TELEFONE 02 -----------*/}
              <p className={pClass}>
                <span className={spans}>Telefone 02:</span>
                {cnpj.phone2 || "Não informado"}
              </p>
              {/* ------ EMAIL ------*/}
              <p className={pClass}>
                <span className={spans}>Email:</span>
                {cnpj.email || "Não informado"}
              </p>
              {/* ------ PROXIMA LIGACAO --------*/}
              <p className={pClass}>
                <span className={spans}>Proxima ligação:</span>
                {formattedDate || "Não informado"}
              </p>
            </div>
            <div>
              {/* ------ CNPJ ------*/}
              <p className={pClass}>
                <span className={spans}>Cnpj:</span>
                {cnpj.cnpj || "Não informado"}
              </p>
              {/* ------ CNAE ------*/}
              <p className={pClass}>
                <span className={spans}>Cnae:</span>
                {cnpj.cnae || "Não informado"}
              </p>
              {/* ------ PORTE ------*/}
              <p className={pClass}>
                <span className={spans}>Porte:</span>
                {cnpj.porte || "Não informado"}
              </p>
              {/* ------ TIPO ------*/}
              <p className={pClass}>
                <span className={spans}>Tipo:</span>
                {cnpj.identificadorMatrizFilial === 1
                  ? "Matriz"
                  : cnpj.identificadorMatrizFilial === 2
                  ? "Filial"
                  : "Sem porte" || "Não informado"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompCliente;
