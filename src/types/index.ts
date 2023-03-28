import { ReactNode, Dispatch, SetStateAction } from "react";

export interface IClientLogin {
  email: string;
  password: string;
}

export interface IClient {
  id?: string;
  email: string;
  fullName: string;
  phone: string;
}

export interface IClientRegister {
  email: string;
  password: string;
  fullName: string;
  phone: string;
}

export interface IUpdateClient {
  email?: string;
  password?: string;
  fullName?: string;
  phone?: string;
}

export interface IUpdateContact {
  email?: string;
  password?: string;
  fullName?: string;
  phone?: string;
  isDefault?: boolean;
}

export interface IListClient {
  email: string;
  password: string;
  fullName: string;
  phone: string;
}

export interface IContactRequest {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  isDefault: boolean;
}

export interface IContact {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  isDefault: boolean;
  map?(arg0: (element: IContact) => void): ReactNode;
  length?: number;
}

export interface IClientReturn {
  id: string;
  email: string;
  password: string;
  fullName: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  isActive: boolean;
  contacts: IContact[];
}

export interface AuthProviderData {
  loginClient: (clientData: IClientLogin) => void;
  registerClient: (clientData: IClientRegister) => void;
  updateClient: (clientData: IUpdateClient) => void;
  deleteClient: () => void;
  getClients: (clientData: IListClient[]) => void;
  getClientsById: (clientId: string) => void;
  clientObject?: IClientReturn;
  clientContactObject?: IContact[];
  allClientObject?: IClient[];
  clientToken: string | undefined;
  clientId: string | undefined;
  setClientId: Dispatch<SetStateAction<string>>;
  setClientToken: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  logout: () => void;
}

export interface ContactProviderData {
  registerContact: (contactData: IContactRequest) => void;
  deleteContact: (contactId: string) => void;
  updateContact: (contactData: IUpdateContact, contactId: string) => void;
  cardContactId: string;
  setCardContactId: Dispatch<SetStateAction<string>>;
}

export interface IProps {
  token: string;
  client?: string;
}

export interface IProviderProps {
  children: ReactNode;
  setIsModOpen?: Dispatch<SetStateAction<boolean>>;
  client?: string;
  token?: string;
}

export interface IContainerModalPropsChildren {
  children: ReactNode;
}

export interface IContainerModalProps {
  children?: ReactNode;
  setIsModOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IModalProvider {
  isModalUpdateClientOpen: boolean;
  isModalUpdateContactOpen: boolean;
  isModalDeleteContactOpen: boolean;
  isModalCreateContactOpen: boolean;
  isModalDeleteClientOpen: boolean;
  isModalAllUsersOpen: boolean;
  setIsModalUpdateClientOpen: Dispatch<SetStateAction<boolean>>;
  setIsModalUpdateContactOpen: Dispatch<SetStateAction<boolean>>;
  setIsModalDeleteContactOpen: Dispatch<SetStateAction<boolean>>;
  setIsModalAllUsersOpen: Dispatch<SetStateAction<boolean>>;
  setIsModalCreateContactOpen: Dispatch<SetStateAction<boolean>>;
  setIsModalDeleteClientOpen: Dispatch<SetStateAction<boolean>>;
}
