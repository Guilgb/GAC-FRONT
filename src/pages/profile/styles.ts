import { styled } from "styled-components";

export const Content = styled.section`
  display: flex;
  font-size: 22px;
  font-weight: 600;
  line-height: 26.63px;
  text-align: left;
  border: 1px solid #b1b1b1;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  gap: 64px;
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const UserInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;

  b {
    font-size: 20px;
    font-weight: 600;
  }
  p {
    font-size: 20px;
    font-weight: 500;
  }
`;
