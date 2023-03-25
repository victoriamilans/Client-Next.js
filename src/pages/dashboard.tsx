import { ContactCard } from "@/components/ContactCard";
import { DashboardHeader } from "@/components/Header";
import { DashboardHeaderMobile } from "@/components/HeaderMobile";
import { ModalDeleteContact } from "@/components/ModalDeleteContact";
import { ModalUpdateContact } from "@/components/ModalUpdateContact";
import { ModalUpdateClient } from "@/components/ModalUpdateClient";
import { useModal } from "@/context/ModalContext";
import { StyledDashboardContainer } from "@/styles/DashboardContainer";
import { StyledDashboardContent } from "@/styles/DashboardContent";

const Dashboard = () => {
  const {
    isModalUpdateClientOpen,
    isModalUpdateContactOpen,
    setIsModalUpdateContactOpen,
    isModalDeleteContactOpen,
    setIsModalDeleteContactOpen,
  } = useModal();
  return (
    <>
      <StyledDashboardContainer>
        <DashboardHeader></DashboardHeader>
        <DashboardHeaderMobile></DashboardHeaderMobile>
        <StyledDashboardContent>
          <ul>
            <ContactCard></ContactCard>
            <ContactCard></ContactCard>
            <ContactCard></ContactCard>
            <ContactCard></ContactCard>
            <ContactCard></ContactCard>
            <ContactCard></ContactCard>
          </ul>
          <div className="pageButtons">
            <button>Previous page</button>
            <button>Next page</button>
          </div>
        </StyledDashboardContent>
      </StyledDashboardContainer>
      {isModalUpdateContactOpen && <ModalUpdateContact></ModalUpdateContact>}
      {isModalDeleteContactOpen && <ModalDeleteContact></ModalDeleteContact>}
      {isModalUpdateClientOpen && <ModalUpdateClient></ModalUpdateClient>}
    </>
  );
};

export default Dashboard;
