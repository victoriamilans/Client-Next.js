import styled from "styled-components";

export const StyledOverlay = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  inset: 0;
  z-index: 99999;

  background-color: rgba(0, 0, 0, 0.56);

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledModalContainer = styled.div`
  width: 90%;
  max-width: 500px;
  height: 500px;

  background-color: var(--color-primary);
  color: var(--white);
  font-weight: 100;

  border-radius: 15px;

  padding: 40px;

  display: flex;
  flex-direction: column;

  span {
    align-self: flex-end;
  }
`;

export const StyledModalDeleteContainer = styled.div`
  width: 90%;
  max-width: 500px;
  height: 200px;

  background-color: var(--color-primary);
  color: var(--white);
  font-weight: 100;

  border-radius: 15px;

  padding: 40px;

  display: flex;
  flex-direction: column;

  span {
    align-self: flex-end;
  }
`;
