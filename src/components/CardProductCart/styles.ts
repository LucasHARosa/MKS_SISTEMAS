import { motion } from 'framer-motion';
import styled from 'styled-components'

export const CardProductCartContainer = styled(motion.div)`
  position: relative;
  width: 23.6875rem;
  height: 5.9375rem;
  border-radius: 0.5rem;
  background: #FFF;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.94rem 0 1.44rem;
  

  img{
    height: 3.812rem;
    width: 3.125rem;
  }
  p{
    
    font-family: Montserrat;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    color: ${(props)=>props.theme['black']} ;
  }
  
`

export const CardProductCartInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const ProductQuantity = styled.div`
  width: 3.125rem;
  height: 1.1875rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  margin-right: 2rem;
  margin-bottom: 1.15rem;
  p{
    font-family: Montserrat;
    font-size: 0.3125rem;
    font-style: normal;
    font-weight: 400;
    color: ${(props)=>props.theme['black']} ;
  }
`;

export const ProductQuantityButtons = styled.div`
  padding: 0 0.25rem;
  border-radius: 0.25rem;
  border: 0.3px solid ${(props)=>props.theme['gray-400']};
  background: #FFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  span{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    color: #000;
    font-family: Montserrat;
    font-size: 0.5rem;
    font-style: normal;
    font-weight: 400;
    border-left: 0.3px solid ${(props)=>props.theme['gray-400']};
    border-right: 0.3px solid ${(props)=>props.theme['gray-400']};
  }
  button{
    padding: 0 0.25rem;
    border: none;
    background-color: #FFF;
    cursor: pointer;
    font-family: Montserrat;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    &:focus {
      outline: none;
      border: none;
    }
    &:active{
      border: none;
      outline: none;
    }
  }
`;

export const Price = styled(motion.div)`
  width: 4.5rem;
  h2{
    font-family: Montserrat;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    color: ${(props)=>props.theme['black']};
  }
`;

export const CloseButton = styled(motion.button)`
  position: absolute;
  top: -9px;
  right: -9px;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: ${(props)=>props.theme['black']} ;
  border: none;
  cursor: pointer;
  color: ${(props)=>props.theme['white']} ;
  font-family: Montserrat;
  font-size:  0.875rem;
  font-style: normal;
  font-weight: 400;
  
`;



