import styled from "styled-components";

export const StyledContactCard = styled.li`
  background-color: var(--color-primary-dark);

  width: 25%;
  height: 257px;

  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 25px;

  font-size: 1.2rem;
  font-weight: 100;

  .clientContent {
    margin: 40px 0 0 10px;
    line-height: 25px;

    width: 90%;

    font-size: 1rem;
    font-weight: 100;

    overflow: auto;
    word-wrap: break-word;
    text-overflow: ellipsis;
  }

  .buttonsContactArea {
    width: 100%;

    display: flex;
    gap: 20px;

    button {
      width: 80px;
      height: 31px;

      background-color: var(--blue);
      color: var(--white);

      border-radius: 12px;

      :hover {
        background-color: var(--dark-blue);
      }
    }
  }

  @media (max-width: 1147px) {
    width: 90%;
    max-width: 300px;

    flex-wrap: nowrap;
    align-items: center;

    padding: 20px 10px;

    .clientContent {
      align-self: flex-start;
      margin: 20px;
    }
  }
`;
