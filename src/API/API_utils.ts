const baseURL = "http://192.168.1.108:8080";

export default baseURL;

/* Status 
    PENDING(1),//padrao
    CONFIRMED(2),//criação de pedido
    SUSPENDED(3),//data para ligar
    REFUSED(4);//recusou o produto 
    
//roles
    1- user comum
    2- admin
    3- supervisor
    4- vendedor
    */

//Interfaces
export interface User {
  id: string;
  email: string;
  username: string;
  supervisorId: string | null;
  role: number;
  name: string | null;
  createdAt: string;
  enabled: boolean;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  authorities: { authority: string }[];
  accountNonLocked: boolean;
  roleAsString: string | null;
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
}

export interface CnpjOrder {
  id: string;
  leadId: string;
  userId: ObjectId;
  status: OrderStatus;
  orderItem: Item[];
}

interface Item {
  brand: string;
  model: string;
  color: string;
  year: string;
  version: string;
  dueDate: LocalDateTime;
  amount: Long;
  payment: string;
  purchaseReason: string;
  maxPayment: string;
  tradeInValue: string;
  orderType: string;
}

type OrderStatus = "pending" | "approved" | "rejected";
type LocalDateTime = string; // replace with actual LocalDateTime type
type Long = number; // replace with actual Long type
type ObjectId = string; // replace with actual ObjectId type
