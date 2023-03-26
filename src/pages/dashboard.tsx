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
import { IContact } from "@/types";
import { ModalAllClients } from "@/components/ModalAllClients";
import { ModalCreateContact } from "@/components/ModalRegisterContact";
import { ModalDeleteClient } from "@/components/ModalDeleteClient";

const Dashboard = () => {
  const {
    isModalUpdateClientOpen,
    isModalUpdateContactOpen,
    isModalDeleteContactOpen,
    isModalAllUsersOpen,
    isModalCreateContactOpen,
    isModalDeleteClientOpen,
    setIsModalCreateContactOpen,
  } = useModal();

  const { clientContactObject } = useAuth();
  return (
    <>
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
              <div>
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

export default Dashboard;
