import { styled } from "styled-components";

export const Content = styled.section`
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.div`
  font-size: 16px;
  font-weight: 500;

  padding-bottom: 10px;
  border-bottom: 1px solid #b1b1b1;
  width: 100%;
  color: #2d60ff;
`;

export const FilterContainer = styled.div`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  border-radius: 15px;
  gap: 25px;
  border: 1px solid #b1b1b1;
`;

export const InputsFilter = styled.div`
  display: flex;
  gap: 13px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const SearchButton = styled.div`
  width: 110px;
`;
