import { styled } from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
`;
export const Select = styled.select`
  border: 1px solid #dfeaf2;
  border-radius: 15px;
  padding: 12px;
  width: 100%;

  font-size: 15px;
  font-weight: 400;

  appearance: none;
  background-color: white;
  background-image: url('data:image/svg+xml;utf8,<svg fill="%23778488" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>'); /* Ícone da seta */
  background-repeat: no-repeat;
  background-position: calc(100% - 10px) center;
  background-size: 16px 16px;

  padding-right: 40px;
`;
