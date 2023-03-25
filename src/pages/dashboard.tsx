import { ContactCard } from "@/components/ContactCard";
import { DashboardHeader } from "@/components/Header";
import { DashboardHeaderMobile } from "@/components/HeaderMobile";
import { StyledDashboardContainer } from "@/styles/DashboardContainer";
import { StyledDashboardContent } from "@/styles/DashboardContent";

const Dashboard = () => {
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
    </>
  );
};

export default Dashboard;
