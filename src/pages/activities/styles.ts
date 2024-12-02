import { styled } from "styled-components";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
`;

export const HeaderOptions = styled.section`
  display: flex;
  gap: 10px;
  border-bottom: 1px solid #ebeef2;
  width: 100%;
`;

export const TextOptions = styled.p<{ selected?: boolean }>`
  color: ${(props) => (props.selected ? "#2D60FF" : "#B1B1B1")};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding-bottom: 0.625rem;
`;

export const ButtonAndHoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1.5625rem;
  margin-bottom: 0.8rem;

  button {
    width: 9.375rem;
  }

  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
  }
`;

export const HoursText = styled.p`
  font-size: 1.125rem;

  b {
    color: #2D60FF;
    font-weight: 600;
  }
`;

