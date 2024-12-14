import { styled } from "styled-components";

export const TableWrapper = styled.div`
  overflow-x: auto;
  overflow-y: auto;
  white-space: nowrap;
  height: 32.5rem;
`;

export const Table = styled.table<{ maxHeight: boolean }>`
  table-layout: fixed;
  overflow-y: scroll;

  margin-top: 2rem;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  color: #817d7d;
  @media screen and (min-width: 600px) {
    font-size: 18px;
  }
`;

export const TableHeader = styled.thead`
  font-weight: 600;

  tr, th {
    text-align: left;
    padding-bottom: 1rem;
    color: #343C6A;
  }
`;

export const TableRow = styled.tr`
  font-weight: 400;
  border: 1px solid #343c6a;
  border-radius: 5px;
  height: 50px;

  img {
    cursor: pointer;
  }

  td {
    padding: 0 1.25rem;
    text-align: left;
    align-content: center;
  }
`;

export const Status = styled.td<{ status: string }>`
  font-weight: 400;
  color: ${(props) =>
    props.status === "pending"
      ? "#0B5F26"
      : props.status === "true"
      ? "#00C48C"
      : "hidden"};
`;

export const SendButton = styled.div`
  display: flex;
  width: 8.1056rem;
  margin: 2rem auto 0 auto;

  @media screen and (min-width: 600px) {
    position: absolute;
    bottom: 70px;
    right: 70px;
  }
`;
