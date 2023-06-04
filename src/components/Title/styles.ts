import styled from 'styled-components';

export const TitleContainer = styled.div`
  width: 100%;
`

export const Title = styled.div<{isAnimated : boolean}>`
  text-align: center;
  overflow-y: hidden;
  max-height: 4rem;

  p {
    font-weight: 700;
    font-size: 3.5rem;
    line-height: 4.1rem;
    color: ${({theme}) => theme.white};
    margin-bottom: 0.6rem;
    transform: ${({isAnimated}) => isAnimated ? 'translateY(4rem)' : 'none'};
    opacity: ${({isAnimated}) => isAnimated ? '0' : '1'};
  }
`

export const Subtitle = styled.div<{isAnimated : boolean}>`
  text-align: center;
  max-height: 2rem;
  overflow-y: hidden;

  p {
    font-size: 1.8rem;
    line-height: 2.1rem;
    color: ${({theme}) => theme.gray};
    transform: ${({isAnimated}) => isAnimated ? 'translateY(4rem)' : 'none'};
    opacity: ${({isAnimated}) => isAnimated ? '0' : '1'};
  }
`
