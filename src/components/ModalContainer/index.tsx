import { StyledModalAllClients } from "@/components/ModalAllClients/ModalAllClients";

import { IContainerModalProps } from "@/types";
import {
  StyledModalContainer,
  StyledModalDeleteContainer,
} from "./ModalContainer";

export const ModalContainer = ({
  children,
  setIsModOpen,
}: IContainerModalProps) => {
  function closeModal() {
    setIsModOpen((oldIsMod) => !oldIsMod);
  }

  function handleModalClick(e: MouseEvent) {
    let target = e.target as HTMLElement;
    !target.closest(".content") && closeModal();
  }
  return (
    <StyledModalContainer onClick={(e: any) => handleModalClick(e)}>
      <div className="content">
        <span onClick={() => closeModal()}>x</span>
        {children}
      </div>
    </StyledModalContainer>
  );
};

export const ModalContainerDelete = ({
  children,
  setIsModOpen,
}: IContainerModalProps) => {
  function closeModal() {
    setIsModOpen((oldIsMod) => !oldIsMod);
  }

  function handleModalClick(e: MouseEvent) {
    let target = e.target as HTMLElement;
    !target.closest(".content") && closeModal();
  }
  return (
    <StyledModalDeleteContainer onClick={(e: any) => handleModalClick(e)}>
      <div className="content">
        <span onClick={() => closeModal()}>x</span>
        {children}
      </div>
    </StyledModalDeleteContainer>
  );
};

export const ModalAllUsers = ({
  children,
  setIsModOpen,
}: IContainerModalProps) => {
  function closeModal() {
    setIsModOpen((oldIsMod) => !oldIsMod);
  }

  function handleModalClick(e: MouseEvent) {
    let target = e.target as HTMLElement;
    !target.closest(".content") && closeModal();
  }
  return (
    <StyledModalAllClients onClick={(e: any) => handleModalClick(e)}>
      <div className="content">
        <span onClick={() => closeModal()}>x</span>
        {children}
      </div>
    </StyledModalAllClients>
  );
};
