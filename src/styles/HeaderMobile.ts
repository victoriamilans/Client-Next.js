import styled from "styled-components";

export const StyledHeaderMobile = styled.header`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 30px;

    width: 100vw;
    height: 130px;

    background-color: var(--color-primary-dark);

    img {
      height: 120px;
    }

    .userInfo {
      width: 25%;

      display: flex;
      align-items: center;

      div {
        h1 {
          font-size: 1.6rem;
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
      }
    }

    .searchArea {
      width: 30%;

      display: flex;
      justify-content: space-evenly;

      input {
        width: 70%;
        height: 38px;

        padding: 10px;

        border-radius: 13px;
      }
    }

    button {
      width: 15%;
      height: 40px;

      border-radius: 15px;

      background-color: var(--color-primary);
      color: var(--white);

      font-size: 1rem;
    }
  }
`;
