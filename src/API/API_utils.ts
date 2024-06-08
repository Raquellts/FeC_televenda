const baseURL = "http://192.168.1.108:8080";

export default baseURL;

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

export interface CommonUser {
  email: string;
  password: string;
  name: string;
  supervisorId: string;
  role: number;
}
