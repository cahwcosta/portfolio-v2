import styled from 'styled-components';

export const Select = styled.div`
  width: 100%;
  margin-top: 1.8rem;
`

export const Input = styled.div`
  border: 0.1rem solid ${({theme}) => theme.purple};
  border-radius: 5rem;
  padding: 1.3rem 0;
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-align: center;
  position: relative;
`

export const Icon = styled.div<{ open: boolean }>`
  width: 0.2rem;
  height: 1.1rem;
  border-radius: 0.1rem;
  background-color: ${({theme}) => theme.purple};
  position: absolute;
  top: 37%;
  transition: all 0.4s ease;

  &:nth-child(1) {
    transform: ${({open}) => open ? 'rotate(-40deg)': 'rotate(40deg)'};
    right: 2rem;
  }

  &:nth-child(2) {
    transform: ${({open}) => open ? 'rotate(40deg)': 'rotate(-40deg)'};
    right: 2.6rem;
  }
`

export const Accordion = styled.div<{ open: boolean }>`
  height: ${({open}) => open ? '10.5rem' : 0};
  transition: height 0.4s ease;
  overflow: hidden;
  background-color: ${({theme}) => theme.blackLighter};
  border-radius: 1rem;
  margin-top: 1.2rem;
`

export const AccordionWrapper = styled.ul`
  padding: 0.7rem 0;
  list-style: none;
`

export const Option = styled.li`
  padding: 0.7rem 0;
  font-size: 1.4rem;
  line-height: 1.6rem;
  text-align: center;
  color: ${({theme}) => theme.gray};

  &:first-child {
    color: ${({theme}) => theme.white};
  }
`