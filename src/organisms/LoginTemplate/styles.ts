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
  height: 100vh;
  width: 100%;
  margin: auto;
`;

export const Content = styled.section`
  flex: 1;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(101, 181, 238, 0.8) 41.5%,
    rgba(45, 96, 255, 0.8) 100%
  );
`;

