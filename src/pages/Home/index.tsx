// import { useState } from "react";
import { CardProduct } from "../../components/CardProduct";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ListProductsProps } from "../../dto/ProductDTO";
import { HomeContainer, HomeContent, ListProducts } from "./styles";
import { useQuery } from "react-query";

export function Home() {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const query = {
    page: 1,
    rows: 10,
    sortBy: "id",
    orderBy: "ASC",
  };


  const fecthProducts = async (page: number, rows: number, sortBy: string, orderBy: string):Promise<ListProductsProps> => {
    const url = `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`;
  
    const response = await fetch(url);
  
    if(!response.ok){
      console.log(response.statusText);
    }
  
    return response.json();
  }

  

  const { data, isLoading } = useQuery<ListProductsProps, Error>(
    ['dataKey', 'page', 'rows', 'sortBy', 'orderBy'],
    () => fecthProducts(query.page, query.rows, query.sortBy, query.orderBy)
  );
  
  
  
 
  console.log(data?.products);
  console.log(isLoading);


  
  return (
    <HomeContainer>
      <Header />

      <HomeContent>
        {isLoading ? 
          (
            <h1></h1>
          )
          : 
          (
            <ListProducts>
              {data && (
                data.products.map((product) => {
                  return(
                    <CardProduct key={product.id} product={product} />
                  )
                })
              
              )}
            </ListProducts>  
          )
        }
      </HomeContent>
      

       <Footer /> 
    </HomeContainer>
  )
}