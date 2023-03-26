import styled from "styled-components";

export const StyledLoginResgisterPage = styled.div`
  background-color: var(--color-primary);

  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  h1 {
    font-weight: 100;
    font-size: 48;
    letter-spacing: 4px;
  }

  .leftContainer {
    background-color: var(--color-primary-dark);

    width: 45%;
    height: 85%;
    padding: 20px;

    display: flex;
    flex-direction: column;

    border-radius: 32px 0 0 32px;

    color: var(--white);

    h1 {
      margin: 40px 0 20px 10px;
    }

    .welcomeSpan {
      font-size: 0.7rem;
      font-weight: 100;
      color: var(--grey);
      letter-spacing: 1px;

      margin: 0 0 0 20px;
    }
  }

  .rightContainer {
    background-color: var(--white);

    width: 35%;
    height: 85%;
    padding: 40px;

    border-radius: 0 32px 32px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 80%;
    }
  }

  @media (max-width: 1200px) {
    flex-direction: column;

    .rightContainer {
      display: none;
    }

    .leftContainer {
      border-radius: 32px;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;

    .rightContainer {
      display: none;
    }

    .leftContainer {
      width: 100vw;
      height: 100vh;

      border-radius: 0;

      padding: 20px;
    }

    h1 {
      font-size: 1.7rem;
    }
  }
`;
