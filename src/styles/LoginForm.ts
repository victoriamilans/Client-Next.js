import styled from "styled-components";

export const StyledLoginForm = styled.form`
  width: 90%;
  height: 67%;

  display: flex;
  flex-direction: column;

  display: flex;
  align-self: center;

  margin-top: 80px;

  label {
    font-size: 0.8rem;
    margin-bottom: 5px;
  }

  input {
    height: 50px;
    padding: 10px;

    border-radius: 5px;

    margin-bottom: 40px;
  }

  span {
    font-size: 0.7rem;
    font-weight: 100;
    color: var(--grey);
    letter-spacing: 1px;

    align-self: center;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    input {
      height: 40px;
    }
  }
`;
