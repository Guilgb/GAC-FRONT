import { styled } from "styled-components";

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
`;

export const TextArea = styled.textarea`
  border-radius: 15px;
  border: 1px solid #dfeaf2;
  padding: 12px;
  resize: none;
  height: 110px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
  text-align: left;
`;
