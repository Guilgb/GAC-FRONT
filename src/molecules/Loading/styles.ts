import styled, { keyframes } from "styled-components";
import loadingIcon from "../../assets/icons/loading-icon.png";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  background: url(${loadingIcon}) no-repeat center center;
  background-size: contain;
  animation: ${spin} 1s linear infinite;
  margin: auto;
`;