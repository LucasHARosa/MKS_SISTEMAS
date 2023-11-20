import styled from 'styled-components'

export const CardProductContainer = styled.div`
  width: 13.59763rem;
  height: 17.8125rem;
  border-radius: 0.5rem;
  background: #FFF;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`

export const CardProductImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1.13rem;
  padding-bottom: 0.88rem;

  img{
    height: 8.625rem;
  }

`

export const CardProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0 1.125rem;
  p{
    font-family: Montserrat;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 300;
    line-height: 0.75rem;
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
    line-height: 1.1875rem;
  }
`

export const CardProductPrice = styled.div`
  width: 4rem;
  height: 1.625rem;
  
  border-radius: 0.3125rem;
  background: ${(props)=>props.theme["gray-700"]};
  display: flex;
  align-items: center;
  justify-content: center;
  h2{
    
    color: #FFF;
    font-family: Montserrat;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    
  }

`

export const CardProductButton = styled.div`
  width: 100%;
  height: 1.99419rem;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  
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
    gap: 0.5rem;
    font-size: 1rem;
    color: ${(props)=>props.theme['white']} ;
    font-family: 'Montserrat';
    font-weight: 700;
  }
`