import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HomeContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7.25rem 17.7vw;

  @media (max-width: 1440px) {
    padding: 4rem 17vw;
  }

  @media (max-width: 425px) {
    padding: 1.12rem 0;
  }

`

export const ListProducts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.37rem;
  flex-wrap: wrap;
  
  @media (max-width: 425px) {
    gap: 1.12rem;
  }

`