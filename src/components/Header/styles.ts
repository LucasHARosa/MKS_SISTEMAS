import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${(props)=>props.theme['blue-300']} ;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.81rem 5.5rem 1.69rem 4.06rem ;


  
  @media (max-width: 768px) {
    padding: 20px 28px 20px 27px
  }
`

export const HeaderLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 0.5rem;
  height: 2.75rem;

  h1{
    
    font-size: 2.5rem;
    color: ${(props)=>props.theme['white']} ;
    font-family: 'Montserrat';
    font-weight: 600;
    

  }
  p{
    padding: 0.313rem ;
    font-size: 1.25rem;
    color: ${(props)=>props.theme['white']} ;
    font-family: 'Montserrat';
    font-weight: 300;

  }
`
export const ButtonCart = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 2.813rem;
  width: 5.625rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: ${(props)=>props.theme['white']} ;
  border: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;

  img{
    width: 1.188rem;
    height: 1.125rem;
    flex-shrink: 0; 
  }
  span{
    font-size: 1.25rem;
    color: ${(props)=>props.theme['black']} ;
    font-family: 'Montserrat';
    font-weight: 700;
  }
  

  &:hover{
    background-color: ${(props)=>props.theme['gray-300']} ;
  }
`