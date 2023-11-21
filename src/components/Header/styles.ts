import { motion } from 'framer-motion'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.3125rem;
  background-color: ${(props)=>props.theme['blue-300']} ;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1.81rem 5.5rem 1.69rem 4.06rem ;


  
  @media (max-width: 425px) {
    height: 3rem;
    padding: 0.12rem 1.44rem 0.69rem 1.25rem;
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

    @media (max-width: 425px) {
      font-size: 2rem;
    }
    

  }
  p{
    
    font-size: 1.25rem;
    color: ${(props)=>props.theme['white']} ;
    font-family: 'Montserrat';
    font-weight: 300;
    margin-bottom: 0.45rem;
    @media (max-width: 425px) {
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }
  }
`
export const ButtonCart = styled(motion.button)`
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

  @media (max-width: 425px) {
    width: 3.25rem;
    height: 1.625rem;
    padding:  0.5rem;
  }

  img{
    width: 1.188rem;
    height: 1.125rem;
    flex-shrink: 0; 
    @media (max-width: 425px) {
      width: 0.65rem;
      height: 0.65rem;
    }
  }
  span{
    font-size: 1.25rem;
    color: ${(props)=>props.theme['black']} ;
    font-family: 'Montserrat';
    font-weight: 700;
    @media (max-width: 425px) {
      font-size: 0.75rem;
    }
  }
  

  &:hover{
    background-color: ${(props)=>props.theme['gray-300']} ;
  }
`