import { useAuth } from "@/context/AuthContext";
import { useModal } from "@/context/ModalContext";
import { StyledModalDeleteContact } from "@/styles/ModalDeleteContact";
import { ModalContainerDelete } from "../ModalContainer";

export const ModalDeleteClient = () => {
  const { setIsModalDeleteClientOpen } = useModal();
  const { deleteClient } = useAuth();
  return (
    <ModalContainerDelete setIsModOpen={setIsModalDeleteClientOpen}>
      <StyledModalDeleteContact>
        <h2>Are you sure ou want to delete your account?</h2>
        <div>
          <button onClick={() => deleteClient()}>I am sure</button>
        </div>
      </StyledModalDeleteContact>
    </ModalContainerDelete>
  );
};
