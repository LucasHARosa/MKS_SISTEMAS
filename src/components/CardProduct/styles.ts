import { motion } from 'framer-motion'
import styled from 'styled-components'

export const CardProductContainer = styled(motion.div)`
  width: 13.59763rem;
  height: 17.8125rem;
  border-radius: 0.5rem;
  background: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 425px) {
    width: 15.65594rem;
    height: 20.5rem;
  }

`

export const CardProductImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.12rem;
 
  @media (max-width: 425px) {
    padding-top: 1.29rem;
  }
  img{
    height: 8.625rem;
    @media (max-width: 425px) {
      height: 9.92631rem;
    }
  }

`

export const CardProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0 0.72rem 0 0.86rem;
  @media (max-width: 425px) {
    gap: 0.58rem;
    padding: 0 0.83rem 0 0.97rem;
  }
`



export const CardProductPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 0.25rem;


  h1{
    
    font-size: 1rem;
    color: ${(props)=>props.theme['black']} ;
    font-family: 'Montserrat';
    font-weight: 400;
    
  }
`

export const CardProductPrice = styled.div`
  margin-top: 0.19rem;
  height: 1.625rem;
  padding: 0.25rem 0.37rem 0.25rem 0.44rem;
  border-radius: 0.3125rem;
  background: ${(props)=>props.theme["gray-700"]};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    height: 1.875rem;
  }
  
  
  h2{
    color: #FFF;
    font-family: Montserrat;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;

  }

`

export const CardProductDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`

export const CardProductButton = styled(motion.div)`
  width: 100%;
  height: 1.99419rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  @media (max-width: 425px) {
    height: 2.295rem;
  }

  
  button{
    width: 100%;
    height: 100%;
    background-color: ${(props)=>props.theme["blue-300"]};
    border: none;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.88rem;
    transition: 0.2s;
    &:hover{
      background-color: ${(props)=>props.theme["blue-500"]};
      transition: 0.2s;
    }
    h2{
        
        font-size: 0.875rem;
        color: ${(props)=>props.theme['white']} ;
        font-family: 'Montserrat';
        font-weight: 600;
    }

    
  }
`