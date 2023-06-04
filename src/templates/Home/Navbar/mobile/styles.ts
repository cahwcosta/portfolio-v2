import { styled } from "styled-components";

export const NavbarMobile = styled.div`
  position: fixed;
  z-index: 1;
  background-color: ${({theme}) => theme.blackLighter};
  padding: 2.6rem 1.9rem;
  width: 100%;
`

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`

export const Logo = styled.img`
width: 4.2rem;
height: 2.4rem;
`

export const Burguer = styled.div`
  width: 3.5rem;
  height: 2.1rem;
  position: relative;
`

export const Line = styled.div<{active: boolean}>`
  position: absolute;
  background-color: ${({theme}) => theme.purple};
  width: 100%;
  height: 0.3rem;
  border-radius: 10rem;
  transition: all 0.4s ease;

  &:nth-child(1) {
    top: ${({active}) => active ? "50%" : 0};
    transform: ${({active}) => active ? "rotate(45deg)" : "rotate(0deg)"};
  }

  &:nth-child(2) {
    top: 50%;
    transform: ${({active}) => active ? "rotate(45deg)" : "rotate(0deg)"};
  }

  &:nth-child(3) {
    top: ${({active}) => active ? "50%" : "100%"};
    transform: ${({active}) => active ? "rotate(-45deg)" : "rotate(0deg)"};
  }
`

export const Menu = styled.nav`
  height: 0;
  overflow: hidden;
  transition: height 0.4s ease;

`

export const Options = styled.ul`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
`

export const Option = styled.li`
  font-size: 1.8rem;
  padding: 2rem 0;
  text-align: center;
  font-weight: 600;
  color: ${({theme}) => theme.white};
`


export const SwipeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`