import { styled } from "styled-components";

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.5rem;
  background-color: #ffffff;
  height: 100%;
  width: 10.625rem;
  z-index: 1;
  justify-content: space-between;
  position: fixed;
  box-shadow: 0rem 0.3125rem 0.625rem rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 600px){
    position: relative;
  }
`;

export const ItemsBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.9375rem;
`;

export const Link = styled.p<{ selected: boolean }>`
  height: 3.125rem;
  text-decoration: none;
  color: ${(props) => props.selected ? "#2D60FF" : " #b1b1b1"};
  font-size: 0.875rem;
  align-items: center;
  display: flex;
  gap: 1.625rem;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: black; 
  }

  img {
    height: 1.375rem;
    width: 1.375rem;
    color: #2D60FF;
    filter: ${(props) =>
      props.selected
        ? "invert(33%) sepia(95%) saturate(2547%) hue-rotate(208deg) brightness(98%) contrast(95%)"
        : "invert(79%) sepia(3%) saturate(0%) hue-rotate(45deg) brightness(94%) contrast(85%)"};
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%);
  }

`;

export const LogoutBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5625rem;
  width: 100%;
`;
