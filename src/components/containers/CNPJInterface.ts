export type USERInterface = {
  user: string;
  id: number;
  cnpjInfo: CNPJInterface[];
};

export type CNPJInterface = {
  cnpj: string;
  name: string;
  email: string;
  contact: string;
  activity: string;
  status: string;
  dateForCall: string;
  comments: string;
};
