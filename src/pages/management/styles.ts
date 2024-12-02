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
  font-weight: 600;

  b {
    color: #ff0000c9;
    font-weight: 600;
  }
`;

export const CustomTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5625rem;

  th {
    font-size: 1.125rem;
    font-weight: 600;
    text-align: left;
    padding: 0.625rem 0.875rem;
  }

  td {
    font-size: 1.125rem;
    font-weight: 400;
    padding: 0.875rem;
  }

  tbody tr {
    border: 1px solid #343c6a;
    border-radius: 5px;
  }

  tbody tr td img {
    cursor: pointer;
  }

  tbody p {
    display: flex;
    justify-content: center;
    margin-top: 1.25rem;
  }
`;
