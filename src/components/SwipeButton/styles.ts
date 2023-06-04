import styled from 'styled-components';

export const SwipeButton = styled.div<{active: boolean}>`
  width: 5.4rem;
  height: 2.7rem;
  background-color: ${({active, theme}) => active ? theme.purple : theme.white};
  border-radius: 10rem;
  display: flex;
  align-items: center;
  padding: 0 0.6rem;
  transition: all .4s ease;
  position: relative;
  cursor: pointer;
`;

export const Circle = styled.span<{active: boolean}>`
  width: 2rem;
  height: 2rem;
  background-color: ${({theme}) => theme.blackLighter};
  border-radius: 10rem;
  z-index: 2;
  display: block;
  transition: all .4s ease;
  position: absolute;
  left:  ${({active}) => active ? "2.9rem" : "0.5rem"};
`;