import styled from "styled-components";

export const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border: 1px solid #DFEAF2;
  border-radius: 15px;
  cursor: pointer;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const FileName = styled.p`
  color: #333;
  font-size: 15px;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  display: block;
  color: #333;
`;