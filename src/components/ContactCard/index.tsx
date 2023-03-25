import { useModal } from "@/context/ModalContext";
import { StyledContactCard } from "@/styles/ContactCard";

export const ContactCard = () => {
  const { setIsModalDeleteContactOpen, setIsModalUpdateContactOpen } =
    useModal();
  return (
    <StyledContactCard>
      <div className="clientContent">
        <p>Full name: Username</p>
        <p>Email: usermail@mail.com</p>
        <p>Phone: 19989484772</p>
      </div>
      <div className="buttonsContactArea">
        <button onClick={() => setIsModalUpdateContactOpen(true)}>
          Editar
        </button>
        <button onClick={() => setIsModalDeleteContactOpen(true)}>
          Excluir
        </button>
      </div>
    </StyledContactCard>
  );
};
