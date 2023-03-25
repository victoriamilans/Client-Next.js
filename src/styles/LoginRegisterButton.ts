import styled from "styled-components";

export const StyledLoginRegisterButton = styled.form`
  background-color: var(--blue);

  width: 249px;
  height: 41px;

  border-radius: 12px;

  align-self: center;

  margin-top: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    width: 70%;
    max-width: 249px;
  }
`;