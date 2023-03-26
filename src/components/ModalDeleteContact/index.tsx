import { useModal } from "@/context/ModalContext";
import { StyledModalDeleteContact } from "@/styles/ModalDeleteContact";
import { IContainerModalProps } from "@/types";
import { ModalContainerDelete } from "../ModalContainer";

export const ModalDeleteContact = () => {
  const { setIsModalDeleteContactOpen } = useModal();
  return (
    <ModalContainerDelete setIsModOpen={setIsModalDeleteContactOpen}>
      <StyledModalDeleteContact>
        <h2>Are you sure ou want to delete our contact</h2>
        <div>
          <button>I am sure</button>
          <button>Not now</button>
        </div>
      </StyledModalDeleteContact>
    </ModalContainerDelete>
  );
};
