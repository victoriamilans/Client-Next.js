import styled from "styled-components";

export const StyledDashboardContent = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  height: calc(100vh - 130px);

  padding: 90px 60px 20px 60px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    width: 100%;
    height: 90%;
  }

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
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 40px;
  }

  @media (max-width: 1147px) {
    padding: 30px;
    ul {
      flex-direction: column;
      flex-wrap: nowrap;

      align-items: center;

      overflow: hidden;
      overflow-y: auto;
    }

    .pageButtons {
      button {
        font-size: 0.8rem;

        width: 40%;
        max-width: 105px;
      }
    }
  }
`;
