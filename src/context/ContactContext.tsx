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
  const {
    clientToken,
    clientId,
    getClientsById,
    clientContactObject,
    setLoading,
  } = useAuth();
  const [cardContactId, setCardContactId] = useState("");

  const registerContact = async (contactData: IContactRequest) => {
    setLoading(true);
    api.defaults.headers.common.authorization = `Bearer ${clientToken}`;
    api
      .post(`/contact`, contactData)
      .then((response) => {
        toast.success("Registered successfully");
        getClientsById(clientId);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  const updateContact = (contactData: IUpdateContact, contactId: string) => {
    setLoading(true);
    api.defaults.headers.common.authorization = `Bearer ${clientToken}`;
    api
      .patch(`/contact/${contactId}`, contactData)
      .then((response) => {
        getClientsById(clientId);
        toast.success("Updated successfully");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

  const deleteContact = (contactId: string) => {
    setLoading(true);
    api.defaults.headers.common.authorization = `Bearer ${clientToken}`;
    api
      .delete(`/contact/${contactId}`)
      .then((response) => {
        getClientsById(clientId);
        toast.success("deleted successfully");
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setLoading(false);
      });
  };

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
