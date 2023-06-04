import styled, { css } from 'styled-components';

export const Header = styled.section`
  padding: 0 18.4rem;
  height: 100vh;

  @media (max-width: 600px) {
    padding: 16.8rem 5rem 0rem;
    margin-bottom: 10rem;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100vh;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    height: auto;
    justify-content: center;
  }
`

export const Texts = styled.div`
  margin-top: -3rem;

  @media (max-width: 600px) {
    margin-top: 0;
    display: flex;
    flex-direction: column; 
    align-items: center;
  }
`

const AnimatedTexts = css`
  transform: translateY(3rem);
  position: absolute;
  opacity: 0;
  
`

export const TextLine = styled.div`
  height: 3.3rem;
  position: relative;
  overflow-y: hidden;
  min-width: 40rem;

  @media (max-width: 600px) {
    min-width: 31.5rem;
    height: 2.9rem;
  }
`

export const Hello = styled.p`
  font-size: 2.5rem;
  line-height: 2.9rem;
  ${AnimatedTexts};

  @media (max-width: 600px) {
    font-size: 1.8rem;
    line-height: 2.1rem;
    top: 30%;
    left: 48%;
  }
`

export const Name = styled.p`
  font-size: 3rem;
  line-height: 3.5rem;
  font-weight: bold;
  color: ${({theme}) => theme.white};
  margin-top: 0.4rem;
  ${AnimatedTexts};

  span {
    color: ${({theme}) => theme.purple};
  }

  @media (max-width: 600px) {
    font-size: 2.5rem;
    line-height: 2.9rem;
    margin-top: 0.5rem;
  }
`

export const Profission = styled.p`
  font-size: 2rem;
  line-height: 2.3rem;
  color: rgba(211, 211, 217, 0.5);
  margin-top: 1rem;
  ${AnimatedTexts};

  @media (max-width: 600px) {
    font-size: 1.5rem;
    line-height: 1.8rem;
    margin-top: 0.8rem;
    left: 20%;
  }
`

export const Button = styled.button`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-transform: uppercase;
  color: ${({theme}) => theme.white};
  background-color: ${({theme}) => theme.blackLighter};
  border: none;
  padding: 1.5rem 3.7rem;
  margin-top: 2.5rem;
  border-radius: 2rem;
  transition: background .4s ease;
  opacity: 0;

  &:hover {
    background-color: ${({theme}) => theme.purpleDarker};
  }

  @media (max-width: 600px) {
    margin: 1.3rem auto;
  }
`

export const Image = styled.img`
  width: 45.6rem;
  height: 48.8rem;
  opacity: 0;
  transform: translateY(4rem);

  @media (max-width: 600px) {
    width: 35.6rem;
    height: 38rem;
  }
`