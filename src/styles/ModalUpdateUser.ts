import styled from "styled-components";

export const StyledUpdateForm = styled.form`
  width: 100%;
  height: 67%;

  display: flex;
  flex-direction: column;

  align-self: center;

  margin-top: 30px;

  h2 {
    color: var(--white);
    font-weight: lighter;
  }

  label {
    color: var(--white);
    font-size: 1rem;
  }

  input {
    height: 50px;
    padding: 10px;

    border-radius: 5px;

    margin-bottom: 25px;
  }

  button {
    width: 100px;
    min-height: 30px;

    align-self: center;

    border-radius: 12px;

    background-color: var(--blue);
    color: var(--white);

    margin-top: 20px;
  }

  /* @media (max-width: 800px) {
    flex-direction: column;

    input {
      height: 40px;
    }
  } */
`;
