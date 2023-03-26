import styled from "styled-components";

export const StyledUpdateFormContact = styled.form`
  width: 100%;
  height: 100%;

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

  .option {
    width: 100%;
    height: 20px;

    display: flex;
    gap: 20px;

    select {
      border-radius: 5px;
    }
  }

  input {
    height: 40px;
    padding: 10px;

    border-radius: 5px;

    margin-bottom: 20px;
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
`;
