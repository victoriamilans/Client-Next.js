import { ContactCard } from "@/components/ContactCard";
import { DashboardHeader } from "@/components/Header";
import { DashboardHeaderMobile } from "@/components/HeaderMobile";
import { ModalDeleteContact } from "@/components/ModalDeleteContact";
import { ModalUpdateContact } from "@/components/ModalUpdateContact";
import { ModalUpdateClient } from "@/components/ModalUpdateClient";
import { useModal } from "@/context/ModalContext";
import { StyledDashboardContainer } from "@/styles/DashboardContainer";
import { StyledDashboardContent } from "@/styles/DashboardContent";
import { useAuth } from "@/context/AuthContext";
import { IContact, IProps } from "@/types";
import { ModalAllClients } from "@/components/ModalAllClients";
import { ModalCreateContact } from "@/components/ModalRegisterContact";
import { ModalDeleteClient } from "@/components/ModalDeleteClient";
import { Loading } from "@/components/Loading";
import { NextPage } from "next";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import nookies from "nookies";
import { useEffect } from "react";

const Dashboard: NextPage<IProps> = ({ client, token }) => {
  const {
    isModalUpdateClientOpen,
    isModalUpdateContactOpen,
    isModalDeleteContactOpen,
    isModalAllUsersOpen,
    isModalCreateContactOpen,
    isModalDeleteClientOpen,
    setIsModalCreateContactOpen,
  } = useModal();

  const {
    clientContactObject,
    loading,
    setClientId,
    setClientToken,
    getClientsById,
  } = useAuth();

  useEffect(() => {
    if (client) {
      setClientId(client);
      getClientsById(client);
    }
    setClientToken(token);
    if (client) {
    }
  }, [client]);

  return (
    <>
      {loading && <Loading />}
      <StyledDashboardContainer>
        <DashboardHeader></DashboardHeader>
        <DashboardHeaderMobile></DashboardHeaderMobile>
        <StyledDashboardContent>
          <ul>
            {clientContactObject?.length ? (
              clientContactObject.map((element: IContact) => {
                return (
                  <ContactCard
                    key={element.id}
                    id={element.id}
                    fullName={element.fullName}
                    email={element.email}
                    phone={element.phone}
                    isDefault={element.isDefault}
                    password={""}
                    createdAt={""}
                    updatedAt={""}
                    deletedAt={""}
                  ></ContactCard>
                );
              })
            ) : (
              <div className="noContent">
                <h2>You have no registered contacts</h2>
                <button onClick={() => setIsModalCreateContactOpen(true)}>
                  Register contact
                </button>
              </div>
            )}
          </ul>
        </StyledDashboardContent>
      </StyledDashboardContainer>
      {isModalUpdateContactOpen && <ModalUpdateContact></ModalUpdateContact>}
      {isModalDeleteContactOpen && <ModalDeleteContact></ModalDeleteContact>}
      {isModalUpdateClientOpen && <ModalUpdateClient></ModalUpdateClient>}
      {isModalAllUsersOpen && <ModalAllClients></ModalAllClients>}
      {isModalCreateContactOpen && <ModalCreateContact></ModalCreateContact>}
      {isModalDeleteClientOpen && <ModalDeleteClient></ModalDeleteClient>}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log("cookies:", nookies.get(ctx));
  console.log("session:", await getSession(ctx));

  const cookies = nookies.get(ctx);
  const session = await getSession(ctx);

  if (!cookies["client.token"] && !session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      client: cookies["client.id"] || session?.user,
      token: cookies["client.token"],
    },
  };
};

export default Dashboard;
