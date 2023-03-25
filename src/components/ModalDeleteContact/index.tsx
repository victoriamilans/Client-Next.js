import { useModal } from "@/context/ModalContext";
import { IContainerModalProps } from "@/types";
import { ModalContainerDelete } from "../ModalContainer";

export const ModalDeleteContact = () => {
  const { setIsModalDeleteContactOpen } = useModal();
  return (
    <ModalContainerDelete setIsModOpen={setIsModalDeleteContactOpen}>
      <h1>oi</h1>
    </ModalContainerDelete>
  );
};
