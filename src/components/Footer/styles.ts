import styled from 'styled-components'

export const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;

  
  background-color: ${(props)=>props.theme['gray-100']} ;
  height: 2.125rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  

  p{
    color:${(props)=>props.theme['black']};
    font-family: Montserrat;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`