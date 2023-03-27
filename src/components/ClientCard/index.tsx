import { IClient } from "@/types";
import { StyledClientCard } from "./ClientCard";

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
