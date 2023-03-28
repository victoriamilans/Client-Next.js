import { IClient } from "@/types";
import { StyledClientCard } from "./ClientCard";

export const ClientCard = ({ fullName, email, phone }: IClient) => {
  return (
    <StyledClientCard>
      <div className="clientContent">
        <p>Name: {fullName}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </StyledClientCard>
  );
};
