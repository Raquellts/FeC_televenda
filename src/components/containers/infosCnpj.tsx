import { useEffect, useState } from "react";
import { USERInterface } from "./CNPJInterface";
import cnpjlist from "../../../cnpj";
// SVGs
import SVGCompany from "../SVGs/INFO/SVGCompany";
import SVGPhoneCall from "../SVGs/PHONE/SVGPhoneCall";
import SVGEmail from "../SVGs/CONTACT/SVGEmail";
//components
import SelectStatus from "./formContainers/selectStatus";
import ModalComments from "./formContainers/modalComments";
//styles
import style from "./infosCnpj.module.css";

//svg consts
const primaryColor_svg = "#8ea4dc";
const width_svg = 24;
const height_svg = 24;

const InfosCnpj = () => {
  const [data, setData] = useState<USERInterface>({
    user: "",
    id: 0,
    cnpjInfo: [],
  });

  useEffect(() => {
    if (data.cnpjInfo.length == 0) {
      setData(cnpjlist);
    }
  }, [data]);

  return (
    <>
      {data?.cnpjInfo.map((cnpj) => {
        return (
          <div className="flex" key={cnpj.cnpj}>
            <form
              className={`w-70 px-3 py-2 my-0.5 ml-0.5 bg-container rounded-s-2xl font-oswald text-text`}
            >
              <div
                className={`flex justify-between items-center ${style.cnpj_name}`}
              >
                <div className="flex justify-start uppercase text-primary">
                  <SVGCompany
                    width={width_svg}
                    height={height_svg}
                    fill_one="none"
                    fill_two={primaryColor_svg}
                  />
                  <p className="ml-1 truncate ...">{cnpj.name}</p>
                </div>
                <ModalComments
                  comments={cnpj.comments}
                  cnpj={cnpj}
                  data={data}
                  setData={setData}
                />
              </div>

              <div className="flex flex-wrap">
                <div className="flex items-center mb-1">
                  <SVGPhoneCall
                    width={width_svg}
                    height={height_svg}
                    fill_one="none"
                    fill_two={primaryColor_svg}
                  />
                  <p className={`ml-1 ${style.cnpj_contact}`}>{cnpj.contact}</p>
                  <p className={`mx-1 ${style.cnpj_contact}`}>{cnpj.contact}</p>
                </div>

                <div className="flex items-center mb-1">
                  <SVGEmail
                    width={width_svg}
                    height={height_svg}
                    fill_one="none"
                    fill_two={primaryColor_svg}
                  />
                  <p className={`ml-1 ${style.cnpj_contact}`}>{cnpj.email}</p>
                </div>
              </div>

              <div className="flex opacity-70 text-xs">
                <p className="ml-8 truncate ...">{cnpj.activity}</p>
              </div>
            </form>
            <form className={`w-10 my-0.5 bg-container`}>
              <SelectStatus cnpj={cnpj} data={data} setData={setData} />
            </form>
            <form className={`w-10 my-0.5 bg-container`}>
              <p className="ml-6">{cnpj.dateForCall}</p>
            </form>
            <form className={`w-10 my-0.5 mr-0.5 bg-container rounded-e-2xl`}>
              <a href={`/form`}> iala</a>
            </form>
          </div>
        );
      })}
    </>
  );
};

export default InfosCnpj; //---- consegue fazer um botão aqui que me leve para um formulario contendo todas as informações do cnpj?
