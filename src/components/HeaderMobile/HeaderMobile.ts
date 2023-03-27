import styled from "styled-components";

export const StyledHeaderMobile = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 30px;

  width: 100vw;
  height: 130px;

  background-color: var(--color-primary-dark);

  img {
    display: none;
  }

  .userInfo {
    width: 25%;

    display: flex;
    align-items: center;

    div {
      h1 {
        font-size: 1rem;
        font-weight: 100;
      }

      span {
        font-size: 0.8rem;
        color: var(--grey);
      }
    }
  }

  .navBar {
    width: 30%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-size: 1rem;
      font-weight: 100;
      cursor: pointer;
    }
  }

  .searchArea {
    width: 30%;

    display: flex;
    justify-content: space-evenly;

    button {
      width: 15%;
      height: 40px;

      border-radius: 15px;

      background-color: var(--color-primary);
      color: var(--white);

      font-size: 1rem;
    }
  }

  @media (min-width: 1500px) {
    display: none;
  }
`;

export const MenuMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  margin-right: 1.6rem;
  position: relative;
  inset: 0;

  .navbarMobile {
    background-color: var(--dark-grey);

    position: fixed;
    top: 130px;
    right: 0;

    width: 100%;
    max-width: 300px;
    height: 450px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .searchArea {
      width: 50%;
      align-self: flex-end;

      button {
        background-color: transparent;
        width: 20%;

        font-size: 1.5rem;
        font-weight: 100;
      }
    }

    .navOptions {
      width: 90%;
      height: 60%;

      display: flex;
      flex-direction: column;
      align-items: flex-end;

      gap: 40px;

      h2 {
        font-size: 1.5rem;
        font-weight: 100;
        cursor: pointer;
      }
    }
  }
`;

export const Barr = styled.span`
  position: absolute;
  display: block;
  height: 5px;
  width: 30px;
  border-radius: 30px;
  background-color: var(--white);
  transition: 0.25s ease-in-out;
  cursor: pointer;
  :nth-child(1) {
    top: 0;
  }
  :nth-child(2) {
    top: 8px;
  }
  :nth-child(3) {
    top: 16px;
  }
`;
