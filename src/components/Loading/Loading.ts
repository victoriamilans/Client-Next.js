import styled, { keyframes } from "styled-components";

const running = keyframes`
0%{
    transform: rotate(0)
}
100%{
    transform: rotate(360deg)
}
`;

export const LoadingContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #121214ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  position: fixed;
  inset: 0;
  z-index: 99999999999999;
  h1 {
    color: white;
    font-size: 1rem;
    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }
`;

export const LoadingIcon = styled.div`
  height: 150px;
  width: 150px;

  border-radius: 50%;
  border: 10px solid var(--color-primary);
  border-left: 10px solid var(--dark-blue);

  animation-name: ${running};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  @media (min-width: 768px) {
    height: 300px;
    width: 300px;
    border: 20px solid var(--color-primary);
    border-left: 20px solid var(--dark-blue);
  }
`;
