import styled from 'styled-components';

export const Habilidades = styled.section``

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 105rem;
  margin: 5.7rem auto 0;

  @media (max-width: 600px) {
    max-width: 28rem;
    margin: 5.5rem auto 0;
  }
`

export const Card = styled.div`
  width: 14rem;
  height: 16.7rem;
  background-color: ${({theme}) => theme.blackLighter};
  border-radius: 2rem;
  margin: 1.5rem 1.75rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  opacity: 0;
  transform: translateY(4rem);

  @media (max-width: 600px) {
    width: 11.1rem;
    height: 14.4rem;
    margin: 1.45rem;
  }
`

export const Image = styled.img`
  width: 9.2rem;
  height: 9.1rem;
`

export const Text = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-align: center;
`

