import { styled } from "styled-components";

export const Navbar = styled.div`
  background-color: ${({theme}) => theme.blackLighter};
  height: 7rem;
  width: 100%;
  position: fixed;
  z-index: 1;
`

export const Content = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 2.4rem;
`

export const Logo = styled.img`
  width: 5rem;
  height: 3rem;
`

export const Options = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-between;
  width: 53.4rem;
`

export const Option = styled.li`
  font-size: 1.5rem;
  transition: color 0.4s ease;

  &:hover {
    color: ${({theme}) => theme.purple};
  }
`

