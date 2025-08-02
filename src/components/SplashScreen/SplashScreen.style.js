
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-10px);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

export const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0f172a;
  color: #f8fafc;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const SplashTitle = styled.h1`
  font-size: 2rem;
  animation: ${bounce} 1s infinite alternate;
`;

export const SplashSubtitle = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  opacity: 0.8;
`;
