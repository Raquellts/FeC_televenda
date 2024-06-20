const baseURL: string = import.meta.env.VITE_BASE_URL_API;
export default baseURL;
/* //INFORMAÇÕES GERAIS:

//Status CNPJ:
    PENDING(1),//padrao
    CONFIRMED(2),//criação de pedido
    SUSPENDED(3),//data para ligar
    REFUSED(4);//recusou o produto 

//Status ORDER:
    "PENDING" -> PENDENTE;
    "CANCELLED" -> CANCELADO;
    "PAID" -> PAGO;
    
//roles
    1- user comum
    2- admin
    3- supervisor
    4- vendedor

//roles as strings
    USER(1),
    ADMIN(2),
    SUPERVISOR(3),
    SELLER(4);

    */

//Interfaces
export interface User {
  id: string;
  email: string;
  username: string;
  supervisorId: string | null;
  role: number;
  name: string | null;
  lastName: string | null;
  createdAt: string;
  enabled: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  authorities: { authority: string }[];
  accountNonLocked: boolean;
  roleAsString: roleNames;
}

export interface Response<T> {
  msg: string;
  status: string;
  body: T;
}

export interface CommonUser {
  email: string;
  username: string;
  password: string;
  name: string;
  surname: string;
  supervisorId: string;
  role: number;
}

export interface Cnpj {
  identificadorMatrizFilial: number;
  razaoSocial: string;
  clientName: string;
  activity: string;
  status: number;
  dateForCall: string | null;
  comments: string | null;
  userId: string;
  cnpj: number;
  cnae: number;
  phone1: string;
  porte: string;
  phone2: string;
  email: string;
  id: string;
}

export interface CnpjOrder {
  id: string;
  leadId: string;
  userId: string;
  status: OrderStatus;
  orderItem: Item;
}

export interface Item {
  brand: string;
  model: string;
  color: string;
  year: string;
  version: string;
  dueDate: string;
  amount: number;
  payment: string;
  purchaseReason: string;
  maxPayment: string;
  tradeInValue: string;
  orderType: string;
}

type OrderStatus = "PENDING" | "CANCELLED" | "SUSPENDED" | "PAID";
type roleNames = "USER" | "ADMIN" | "SUPERVISOR" | "SELLER";
