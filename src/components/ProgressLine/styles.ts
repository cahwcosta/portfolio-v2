import styled from 'styled-components';

export const ProgressLine = styled.div<{scrollPercent: number}>`
  width: ${({scrollPercent}) => `${scrollPercent}%`};
  height: 0.3rem;
  background-color: ${({theme}) => theme.purple};
  border-radius: ${({scrollPercent}) => scrollPercent == 100 ? '0': '0 5rem 5rem 0'};
`
