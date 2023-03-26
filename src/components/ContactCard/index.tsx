import { useContact } from "@/context/ContactContext";
import { useModal } from "@/context/ModalContext";
import { StyledContactCard } from "@/styles/ContactCard";
import { IClient, IContact } from "@/types";

export const ContactCard = ({
  id,
  fullName,
  email,
  phone,
  isDefault,
}: IContact) => {
  const { setIsModalDeleteContactOpen, setIsModalUpdateContactOpen } =
    useModal();
  const { setCardContactId } = useContact();

  return (
    <StyledContactCard id={id}>
      <div className="clientContent">
        <p>{fullName}</p>
        <p>{email}</p>
        <p>{phone}</p>
        {isDefault && <p>Endereço padrão</p>}
      </div>
      <div className="buttonsContactArea">
        <button
          onClick={() => {
            setIsModalUpdateContactOpen(true), setCardContactId(id);
          }}
        >
          Editar
        </button>
        <button
          onClick={() => {
            setIsModalDeleteContactOpen(true), setCardContactId(id);
          }}
        >
          Excluir
        </button>
      </div>
    </StyledContactCard>
  );
};
