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
  @media (max-width: 768px) {
    width: 15.625rem;
    height: 13.75294rem;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
    flex-direction: column;
    padding: 1.44rem 1.44rem 1.34rem 1rem;
  }
  

  img{
    height: 3.812rem;
    width: 3.125rem;
    @media (max-width: 768px) {
      width: auto;
      height: 6.3125rem;
    }
  }
  p{
    
    font-family: Montserrat;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    color: ${(props)=>props.theme['black']} ;
    @media (max-width: 768px) {
      font-size: 1rem;
    }

  }
`

export const CardProductCartInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap: 0.87rem;
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
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 999px;
  background: ${(props)=>props.theme['black']} ;
  border: none;
  cursor: pointer;
  color: ${(props)=>props.theme['white']} ;
  font-family: Montserrat;
  font-size:  0.875rem;
  font-style: normal;
  font-weight: 400;
  @media (max-width: 768px) {
    top: 0.61rem;
    right: 0.88rem;
    background: transparent;
    width: auto;
    height: auto;
    font-size: 2rem;
    color: ${(props)=>props.theme['black']} ;
  }
  
`;


export const ProductCartQuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    justify-content: space-between;
  }

`
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
    @media (max-width: 768px) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    width: 6.0855rem;
    height: 2.15619rem;
    align-items: center;
    margin: 0;
    justify-content: center;
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
    @media (max-width: 768px) {
      font-size: 1.25rem;
      width: 2rem;
    }
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
    @media (max-width: 768px) {
      font-size: 1.5rem;
      padding: 0 0.5rem;
    }
  }
`;

export const CardProductPrice = styled.div`
  margin-top: 0.19rem;
  height: 1.625rem;
  padding: 0.25rem 0.37rem 0.25rem 0.44rem;
  border-radius: 0.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 1.875rem;
    background: ${(props)=>props.theme["gray-800"]};
    margin:0;
  }
  
  
  h2{
    color: ${(props)=>props.theme["black"]};
    font-family: Montserrat;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    @media (max-width: 768px) {
      color: ${(props)=>props.theme["white"]};
    }

  }

`