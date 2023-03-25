import { ReactNode, Dispatch, SetStateAction } from "react";

export interface IClientLogin {
  email: string;
  password: string;
}

export interface IProps {
  token: string;
}

export interface IProviderProps {
  children: ReactNode;
  setIsModOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IContainerModalPropsChildren {
  children: ReactNode;
}

export interface IContainerModalProps {
  children: ReactNode;
  setIsModOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IModalProvider {
  isModalUpdateClientOpen: boolean;
  isModalUpdateContactOpen: boolean;
  isModalDeleteContactOpen: boolean;
  setIsModalUpdateClientOpen: Dispatch<SetStateAction<boolean>>;
  setIsModalUpdateContactOpen: Dispatch<SetStateAction<boolean>>;
  setIsModalDeleteContactOpen: Dispatch<SetStateAction<boolean>>;
}
