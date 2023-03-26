import { StyledClientCard } from "@/styles/ClientCard";
import { IClient } from "@/types";

export const ClientCard = ({ fullName, email, phone }: IClient) => {
  return (
    <StyledClientCard>
      <div className="clientContent">
        <p>{fullName}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </StyledClientCard>
  );
};
