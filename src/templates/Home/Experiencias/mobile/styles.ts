import styled from 'styled-components';

export const Experiencias = styled.section`
  padding: 25.6rem 4.2rem 0;
  margin-bottom: 100rem;
  opacity: 0;
`

export const Content = styled.div`
  position: relative;
`

export const Trigger = styled.div`
  position: absolute;
  width: 100%;
  height: 250vh;
`

export const Pin = styled.div`
  position: relative;
`

export const Topics = styled.div`
  display: flex;
  align-items: flex-start; 
  max-width: 114.5rem;
  margin: 5.3rem auto 0;
  position: relative;
  opacity: 0;
  transform: translateY(3rem);
`

export const Titles = styled.div`
  min-width: 36rem;
  position: relative;
`

export const Indicator = styled.span`
  position: absolute;
  height: 9.5rem;
  width: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({theme}) => theme.purple};
`

export const Title = styled.p`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.1rem;
  color: ${({theme}) => theme.gray};
  padding: 2.7rem 0 2.7rem 2.5rem;
  max-width: 30rem;

  &:first-child {
    color: ${({theme}) => theme.purple};
  }
`

export const Texts = styled.div`
  position: relative;
  width: 100%;
`

export const Topic = styled.div`
  padding-top: 2.7rem;
  position: absolute;
  width: 100%;
  
  &:not(:first-child) {
    opacity: 0;
  }
`

export const Duration = styled.p`
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 2.7rem;
  margin-bottom: 1.7rem;
`

export const Text = styled.p`
  font-size: 1.5rem;
  line-height: 1.8rem;
  color: ${({theme}) => theme.gray};
`