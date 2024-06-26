import CNAEsToString from "../../../CNAEsToString.json";

interface CnaeConverterProps {
  cnaeNumber: number;
}

const CnaeConverter = (props: CnaeConverterProps) => {
  const { cnaeNumber } = props;
  const CnaeToString = CNAEsToString.find((cnae) => cnae.ID === cnaeNumber);
  return (
    <span>{(CnaeToString && CnaeToString.Descrição) || "Não informado"}</span>
  );
};

export default CnaeConverter;
