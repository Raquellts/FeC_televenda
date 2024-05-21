import { USERInterface } from "./src/components/containers/CNPJInterface";

const cnpjlist: USERInterface = {
  user: "BulboGC@gmail.com",
  id: 1,
  cnpjInfo: [
    {
      cnpj: "514515651351",
      name: "Nome bem longo LTDA",
      contact: "123456789",
      email: "email01@gmail.com",
      status: "PENDING",
      activity:
        "COMERCIAL E INDUSTRIAL DE ALIMENTOS E BEBIDAS EIRELI - ME (EM RECUPERACAO JUDICIAL)",
      dateForCall: "17/09/2028",
      comments: "ligar par o cliente, ele prefere bla bla bla",
    },
    {
      cnpj: "485215754123",
      name: "Maria",
      contact: "123456789",
      email: "email02@gmail.com",
      status: "REJECTED",
      activity: "EMPRESARIAL",
      dateForCall: "22/10/2028",
      comments: "enviar documentação aprovada",
    },
    {
      cnpj: "784512357856",
      name: "Pedro",
      contact: "123456789",
      email: "email03@gmail.com",
      status: "APPROVED",
      activity: "IMÓVEIS",
      dateForCall: "03/07/2028",
      comments: "contatar cliente para revisar informações",
    },
  ],
};

export default cnpjlist;
