import { styled } from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4375rem;
`;

export const Input = styled.input<{light?: boolean}>`
  border-radius: 15px;
  border: ${(props) => (props.light ? "1px solid #DFEAF2" : "solid 1px #1D1D1D")};
  padding: 12px;
`;

export const Label = styled.label`
font-size: 14px;
font-weight: 600;
line-height: 16.94px;
text-align: left;

`