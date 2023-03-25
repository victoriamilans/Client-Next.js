import api from "@/services/api";
import { IModalProvider, IProviderProps } from "@/types";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext({} as IModalProvider);

export const ModalProvider = ({ children, setIsModOpen }: IProviderProps) => {
  const [isModalUpdateClientOpen, setIsModalUpdateClientOpen] = useState(false);
  const [isModalUpdateContactOpen, setIsModalUpdateContactOpen] =
    useState(false);
  const [isModalDeleteContactOpen, setIsModalDeleteContactOpen] =
    useState(false);

  return (
    <ModalContext.Provider
      value={{
        setIsModalUpdateClientOpen,
        isModalUpdateClientOpen,
        setIsModalUpdateContactOpen,
        isModalUpdateContactOpen,
        isModalDeleteContactOpen,
        setIsModalDeleteContactOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
