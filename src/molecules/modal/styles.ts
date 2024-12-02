import { styled } from "styled-components";

export const Blur = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  border-radius: 15px;
  padding: 2.6875rem 2.0625rem;
  z-index: 4;
  background-color: white;
  width: 30%;
  .modal-header {
    padding-bottom: 1rem;
    border-bottom: 1px solid #b1b1b1;
  }
  .modal-title-close {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  p {
    white-space: pre-wrap;
  }
`;

export const SideBarIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
`;

export const SaveButton = styled.div`
  width: 9rem;
  align-self: flex-end;
`;

export const ButtonsOption = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  button {
    width: 9rem;
  }
`;
