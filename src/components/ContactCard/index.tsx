import { StyledContactCard } from "@/styles/ContactCard";

export const ContactCard = () => {
  return (
    <StyledContactCard>
      <div className="clientContent">
        <p>Full name: Username</p>
        <p>Email: usermail@mail.com</p>
        <p>Phone: 19989484772</p>
      </div>
      <div className="buttonsContactArea">
        <button>Editar</button>
        <button>Excluir</button>
      </div>
    </StyledContactCard>
  );
};
