import React, { useState } from "react";
import { Etheme } from "../../../themeConsts";
import useUpdateTheme from "../../../components/Hooks/updateTheme";
import { Cnpj } from "../../../API/API_utils";
import ModalComments from "../../../components/containers/separated/modalComments";
import { usePrintState } from "../../../components/Hooks/isPrinting";
import CnaeConverter from "../../../components/Elements_for_Forms/CnaeConverter";
import formatarData from "../../../components/Elements_for_Forms/DateFormatter";
interface CompClienteProps {
  cnpj: Cnpj;
  theme: { theme: Etheme };
}

const CompCliente: React.FC<CompClienteProps> = ({ cnpj, theme }) => {
  const { isPrinting } = usePrintState();
  const [comments, setComments] = useState<string>(cnpj.comments || "");

  /*THEME*/ const themes = theme.theme;
  /*THEME*/ const [newtheme, setNewtheme] = useState(themes);
  /*THEME*/ useUpdateTheme(theme, setNewtheme);

  const callDate = cnpj.dateForCall;

  const pClass = `${
    newtheme === Etheme.light ? "text-primary" : "text-dark-primary "
  } py-2 font-inter font-style-xlg text-size-sm text-wrap flex flex-row items-center`;
  const spans = `px-1 font-style-md text-balance`;

  return (
    <div className="w-full flex flex-col">
      <div
        className={`${
          isPrinting ? "hidden" : ""
        } flex justify-between w-100 font-oswald text-size-lg text-primary pt-5`}
      >
        <div className={`self-center ml-5`}>
          <ModalComments
            theme={theme}
            cpnjId={cnpj.id}
            comment={comments}
            setCommentsOut={setComments}
          />
        </div>
        {cnpj && cnpj.razaoSocial}
        <div></div>
      </div>
      {cnpj && (
        <div>
          {/*---- informações do cliente ----*/}
          <div className="w-full justify-between flex flex-row flex-wrap my-5 px-4">
            <div className="lg:w-2/4">
              {/* NOME DA EMPRESA ------------*/}
              <p className={pClass}>
                <span className={spans}>Empresa:</span>
                {cnpj.razaoSocial || "Não informado"}
              </p>
              {/* ATIVIDADES DA EMPRESA -----*/}
              <p className={pClass}>
                <span className={spans}>Atividades:</span>
                <CnaeConverter cnaeNumber={cnpj.cnae} />
              </p>
            </div>{" "}
            <div className="lg:w-1/4">
              {/* TELEFONE 01 -----------*/}
              <p className={pClass}>
                <span className={spans}>Telefone 01:</span>
                {cnpj.phone1 === "nullnull" ? "Não informado" : cnpj.phone1}
              </p>
              {/* TELEFONE 02 -----------*/}
              <p className={pClass}>
                <span className={spans}>Telefone 02:</span>
                {cnpj.phone2 === "nullnull" ? "Não informado" : cnpj.phone2}
              </p>
              {/* ------ EMAIL ------*/}
              <p className={pClass}>
                <span className={spans}>Email:</span>
                {cnpj.email === null ? "Não informado" : cnpj.email}
              </p>
              {/* ------ PROXIMA LIGACAO --------*/}
              <p className={pClass}>
                <span className={spans}>Proxima ligação:</span>
                {callDate ? formatarData(callDate) : "Não informado"}
              </p>
            </div>
            <div className="lg:w-1/4">
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
      {/* COMENTÁRIOS -----*/}
      <div
        className={`${
          newtheme === Etheme.light ? "text-primary" : "text-dark-primary "
        } py-2 px-4 font-inter font-style-xlg text-size-sm text-balance items-center`}
      >
        <span className={spans}>Comentários:</span>
        <p className="ml-1">{comments || "Sem comentários"}</p>
      </div>
    </div>
  );
};

export default CompCliente;
