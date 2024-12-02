import { styled } from "styled-components";

export const Container = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");
  * {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.section`
  flex: 1;
  padding: 2rem;
  border-radius: 1.5625rem;
  background-color: white;
  margin: 1.875rem;
  box-shadow: 0rem 0.3125rem 0.625rem rgba(0, 0, 0, 0.5);
  overflow-y: auto; 

  &::-webkit-scrollbar {
    width: 0; 
    height: 0; 
  }

`;

export const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: #E6EFF5;
`;
