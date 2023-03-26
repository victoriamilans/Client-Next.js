import api from "@/services/api";
import {
  IClientLogin,
  IClientRegister,
  IProviderProps,
  AuthProviderData,
  IUpdateClient,
  ContactProviderData,
  IContact,
  IContactRequest,
  IUpdateContact,
} from "@/types";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "./AuthContext";

const ContactContext = createContext<ContactProviderData>(
  {} as ContactProviderData
);

export const ContactProvider = ({ children }: IProviderProps) => {
  const router = useRouter();
  const { clientToken, clientId, getClientsById, clientContactObject } =
    useAuth();
  const [cardContactId, setCardContactId] = useState("");

  const registerContact = async (contactData: IContactRequest) => {
    api.defaults.headers.common.authorization = `Bearer ${clientToken}`;
    api
      .post(`/contact`, contactData)
      .then((response) => {
        toast.success("Registered successfully");
        getClientsById(clientId);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const updateContact = (contactData: IUpdateContact, contactId: string) => {
    api.defaults.headers.common.authorization = `Bearer ${clientToken}`;
    api
      .patch(`/contact/${contactId}`, contactData)
      .then((response) => {
        getClientsById(clientId);
        toast.success("Updated successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const deleteContact = (contactId: string) => {
    api.defaults.headers.common.authorization = `Bearer ${clientToken}`;
    api
      .delete(`/contact/${contactId}`)
      .then((response) => {
        getClientsById(clientId);
        toast.success("deleted successfully");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  //   const getClients = () => {
  //     api
  //       .get(`/client`)
  //       .then((response) => {
  //         setAllClientObject(response.data);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   };

  //   const getClientsById = (clientId: string) => {
  //     api
  //       .get(`/client/${clientId}`)
  //       .then((response) => {
  //         setClientObject(response.data);
  //         setClientContactObject(response.data.contacts);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   };
  return (
    <ContactContext.Provider
      value={{
        registerContact,
        updateContact,
        cardContactId,
        setCardContactId,
        deleteContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
