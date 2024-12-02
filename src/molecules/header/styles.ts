import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 6.25rem;
  padding: 0 2.5rem;
  justify-content: space-between;
  box-shadow: 0px 4px 4px 0px #00000040;
  z-index: 2;
  position: relative;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5625rem;
`

export const LogoImg = styled.img`
  width: 2.5rem;
  height: 3.1875rem;

@media screen and (min-width: 600px){
  display: flex;
}
`

export const SideBarIcon = styled.img`
  width: 2rem;
  height: 2rem;
  display: flex;

  @media screen and (min-width: 600px){
    display: none;
  }
`

export const LogoText = styled.p`
  font-size: 2.5rem;
  font-weight: 400;
  display: none;

  @media screen and (min-width: 600px){
    display: flex;
  }
`

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.125rem;
`

export const Circle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50px;
  background-color: #F5F7FA;
  justify-content: center;
  display: flex;
  align-items: center;
`

export const NotificationIcon = styled.img`
  width: 1.375rem;
  height: 1.375rem;
`

export const UserName = styled.p`
  font-weight: 600;
  font-size: 0.875rem;
  color: #343C6A;
  display: none;

  @media screen and (min-width: 600px){
    display: flex;
  }
`

export const ProfilePhoto = styled.img`
  width: 2.8125rem;
  height: 2.8125rem;
  border-radius: 50px;
`