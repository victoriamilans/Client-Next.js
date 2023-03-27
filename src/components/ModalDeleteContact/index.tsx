import { useContact } from "@/context/ContactContext";
import { useModal } from "@/context/ModalContext";
import { StyledModalDeleteContact } from "@/components/ModalDeleteContact/ModalDeleteContact";
import { IContainerModalProps } from "@/types";
import { ModalContainerDelete } from "../ModalContainer";

export const ModalDeleteContact = () => {
  const { setIsModalDeleteContactOpen } = useModal();
  const { deleteContact, cardContactId } = useContact();

  return (
    <ModalContainerDelete setIsModOpen={setIsModalDeleteContactOpen}>
      <StyledModalDeleteContact>
        <h2>Are you sure ou want to delete our contact</h2>
        <div>
          <button onClick={() => deleteContact(cardContactId)}>
            I am sure
          </button>
        </div>
      </StyledModalDeleteContact>
    </ModalContainerDelete>
  );
};
