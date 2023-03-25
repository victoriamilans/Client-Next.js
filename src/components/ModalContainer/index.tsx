import {
  StyledModalContainer,
  StyledModalDeleteContainer,
  StyledOverlay,
} from "@/styles/ModalContainer";
import { IContainerModalProps } from "@/types";

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
    <StyledOverlay>
      <StyledModalContainer onClick={(e: any) => handleModalClick(e)}>
        <span>x</span>
        {children}
      </StyledModalContainer>
    </StyledOverlay>
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
    <StyledOverlay>
      <StyledModalDeleteContainer onClick={(e: any) => handleModalClick(e)}>
        <span>x</span>
        {children}
      </StyledModalDeleteContainer>
    </StyledOverlay>
  );
};
