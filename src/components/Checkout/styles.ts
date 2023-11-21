import styled from 'styled-components'
import { motion } from 'framer-motion';

export const CheckoutContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  width: 30.375rem;
  background-color: ${(props)=>props.theme['blue-300']} ;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  padding: 2.25rem 1.38rem 0 2.94rem;
`;

export const CheckoutHeader = styled.div`
  
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items:flex-start;
  justify-content: space-between;
  gap: 12.44rem;
  

  h1{
    color: ${(props)=>props.theme['white']} ;
    font-family: Montserrat;
    font-size: 1.6875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  button{
    width: 4rem;
    height: 38px;
    border-radius: 999px;
    background: ${(props)=>props.theme['black']} ;
    border: none;
    cursor: pointer;
    color: ${(props)=>props.theme['white']} ;
    font-family: Montserrat;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    transition: 0.2s;
    &:hover{
      background-color: ${(props)=>props.theme['gray-800']} ;
      transition: 0.2s;
    }
  }
`;

export const CheckoutProducts = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.38rem;
  
`;