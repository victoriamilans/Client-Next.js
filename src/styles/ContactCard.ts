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

  .clientContent {
    margin: 40px 0 0 10px;
    line-height: 25px;

    font-size: 1rem;
    font-weight: 100;
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
    }
  }
`;
