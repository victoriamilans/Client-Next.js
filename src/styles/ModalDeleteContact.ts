import styled from "styled-components";

export const StyledModalDeleteContact = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  text-align: center;

  div {
    width: 100%;
    height: 35px;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    button {
      width: 90px;
      height: 30px;

      border-radius: 9px;

      background-color: var(--blue);
      color: var(--white);
    }
  }
`;
