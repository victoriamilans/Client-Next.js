import api from "@/services/api";
import {
  IClientLogin,
  IClientRegister,
  IProviderProps,
  AuthProviderData,
  IUpdateClient,
} from "@/types";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setCookie } from "nookies";
import { cookies } from "next/headers";

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: IProviderProps) => {
  const router = useRouter();
  const [clientObject, setClientObject] = useState();
  const [allClientObject, setAllClientObject] = useState();
  const [clientContactObject, setClientContactObject]: any = useState([]);
  const [clientToken, setClientToken] = useState("");
  const [clientId, setClientId] = useState("");

  useEffect(() => {
    getClients();
  }, []);

  const loginClient = (clientData: IClientLogin) => {
    api
      .post("/login", clientData)
      .then((response) => {
        setCookie(null, "client.token", response.data.token, {
          path: "/",
        });
        const id = setCookie(null, "client.id", response.data.client, {
          path: "/",
        });
        getClientsById(response.data.client);
        setClientToken(response.data.token);
        setClientId(response.data.client);

        toast.success("Welcome!");
        router.push("/dashboard");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const registerClient = async (clientData: IClientRegister) => {
    api
      .post(`/client`, clientData)
      .then((response) => {
        toast.success("Registered successfully");
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const updateClient = (clientData: IUpdateClient) => {
    api.defaults.headers.common.authorization = `Bearer ${clientToken}`;
    api
      .patch(`/client/${clientId}`, clientData)
      .then((response) => {
        toast.success("Updated successfully");
        setClientObject(response.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  const deleteClient = () => {
    api.defaults.headers.common.authorization = `Bearer ${clientToken}`;
    api
      .delete(`/client/${clientId}`)
      .then((response) => {
        toast.success("deleted successfully");
        router.push("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const getClients = () => {
    api
      .get(`/client`)
      .then((response) => {
        setAllClientObject(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getClientsById = (clientId: string) => {
    api
      .get(`/client/${clientId}`)
      .then((response) => {
        setClientObject(response.data);
        setClientContactObject(response.data.contacts);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <AuthContext.Provider
      value={{
        loginClient,
        registerClient,
        updateClient,
        deleteClient,
        getClients,
        getClientsById,
        clientObject,
        clientContactObject,
        allClientObject,
        clientToken,
        clientId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
