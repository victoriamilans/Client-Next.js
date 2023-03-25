import { useModal } from "@/context/ModalContext";
import { StyledUpdateForm } from "@/styles/ModalUpdateUser";
import { IContainerModalProps } from "@/types";
import { ModalContainer } from "../ModalContainer";

export const ModalUpdateContact = () => {
  const { setIsModalUpdateContactOpen } = useModal();
  return (
    <ModalContainer setIsModOpen={setIsModalUpdateContactOpen}>
      <h2>Update your contact</h2>
      <StyledUpdateForm>
        <label>full name</label>
        <input type={"text"} id={"name"} placeholder="enter your full name" />
        <label>email</label>
        <input type={"email"} id={"email"} placeholder="enter your email" />
        <label>password</label>
        <input
          type={"password"}
          id={"password"}
          placeholder="enter your password"
        />
        <label>phone</label>
        <input type={"tel"} id={"phone"} placeholder="enter your phone" />
        <button>Save</button>
      </StyledUpdateForm>
    </ModalContainer>
  );
};
