import { styled } from "styled-components";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 22px;
  font-weight: 600;
  line-height: 26.63px;
  text-align: left;

  height: 700px;
  overflow-y: scroll;

  p {
    font-size: 16px;
  }
`;

export const Title = styled.h1`
color: #2d60ff;
font-size: 18px;
`

export const Text = styled.p`
font-size: 16px;
`