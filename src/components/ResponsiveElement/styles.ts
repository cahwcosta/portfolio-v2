import styled from 'styled-components';

export const ResponsiveElement = styled.section``

export const Content = styled.div`
  display: initial;

  @media (max-width: 600px) {
    display: none;
  }
`

export const Mobile = styled.div`
display: none;

  @media (max-width: 600px) {
    display: initial;
  }
`
