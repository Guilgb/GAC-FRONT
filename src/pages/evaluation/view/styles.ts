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
  gap: 15px;
  border: 1px solid #b1b1b1;

  b {
    font-size: 16px;
    font-weight: 600;
  }

  @media screen and (min-width: 600px){
    flex-direction: row;
    gap: 75px;
    font-size: 16px;
  }
`;

export const HoursContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.9375rem 0.625rem;
  gap: 25px;
  font-weight: 600;
  color: white;
  background-color: #1d1d1d;
  margin-top: 1.5rem;
  border-radius: 5px;

  @media screen and (min-width: 600px){
    flex-direction: row;
    gap: 75px;
    font-size: 16px;
  }
`;

export const SearchButton = styled.div`
  width: 110px;
`;

export const ActivitiesContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 14px;

  position: static;
  overflow-y: scroll;
  max-height: 400px;
`;

export const ActivityBoxContainer = styled.div`
  border: 1px solid #dfeaf2;
  border-radius: 10px;
  padding: 16px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const ActivityDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const DetailItem = styled.p`
  margin: 0;
  color: #1d1d1d;
  font-size: 16px;
  font-weight: 600;

  a {
    color: #1d1d1d;
    text-decoration: none;
  }
`;

export const DetailLink = styled.a`
  color: #1d1d1d;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const ButtonsSection = styled.div`
  margin-top: 1.5rem;
  align-self: flex-end;
  gap: 24px;
  width: 312px;
  display: flex;
`;
