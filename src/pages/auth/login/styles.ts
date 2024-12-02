import { styled } from "styled-components";

export const Form = styled.form<{ isMeasurer?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 90%;
  max-width: 25rem;
  height: 30rem;
  margin: auto;
  position: relative;
  top: 10rem;
  box-shadow: 0px 10px 4px 2px #00000040;
  border-radius: 10px;
  z-index: 2;

  @media screen and (min-width: 1024px) {
    top: 24%;
  }
`;

export const Title = styled.h1`
  font-size: 1.375rem;
  font-weight: 700;
  margin: 1.875rem 0 0 3.75rem;
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3.75rem;
  margin-top: 3.1875rem;
  gap: 1.25rem;
`;

export const ForgetPassword = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: #2D60FF;
  text-align: end;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 4.75rem;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  padding: 0 3.75rem;
`;
