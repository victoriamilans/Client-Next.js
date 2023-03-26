import styled from "styled-components";

export const StyledModalContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  inset: 0;
  z-index: 99999;

  background-color: rgba(0, 0, 0, 0.56);

  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 90%;
    max-width: 500px;
    height: 560px;

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
  }
`;

export const StyledModalDeleteContainer = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  inset: 0;
  z-index: 99999;

  background-color: rgba(0, 0, 0, 0.56);

  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 90%;
    max-width: 350px;
    height: 250px;

    background-color: var(--color-primary);
    color: var(--white);

    font-weight: 100;

    border-radius: 15px;

    padding: 20px;

    display: flex;
    flex-direction: column;

    span {
      align-self: flex-end;
    }
  }
`;
