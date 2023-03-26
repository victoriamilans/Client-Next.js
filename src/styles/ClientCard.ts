import styled from "styled-components";

export const StyledClientCard = styled.li`
  background-color: var(--color-primary-dark);

  width: 25%;
  height: 257px;

  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 25px;

  margin-bottom: 20px;

  .clientContent {
    margin: 40px 0 0 10px;
    line-height: 25px;

    font-size: 1.2rem;
    font-weight: 100;
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
