export const StyledOverlay = styled.div``;
import styled from "styled-components";

export const StyledModalAllClients = styled.div`
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
    background-color: blue;
    width: 90%;
    height: 90%;

    background-color: var(--color-primary);
    color: var(--white);
    font-weight: 100;

    border-radius: 15px;

    padding: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;
    overflow-y: auto;

    .pageButtons {
      width: 100%;

      display: flex;
      justify-content: space-between;

      button {
        width: 130px;
        height: 40px;

        border-radius: 15px;

        background-color: var(--color-primary-dark);
        color: var(--white);

        font-size: 1rem;
      }
    }

    ul {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      flex-wrap: wrap;

      gap: 60px;
    }

    span {
      align-self: flex-end;
      margin-bottom: 20px;
    }
  }
`;
