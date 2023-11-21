// import { useState } from "react";
import { useState } from "react";
import { CardProduct } from "../../components/CardProduct";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { CartProductProps, ListProductsProps, ProductProps } from "../../dto/ProductDTO";
import { HomeContainer, HomeContent, ListProducts } from "./styles";
import { useQuery } from "react-query";
import { Checkout } from "../../components/Checkout";


export function Home() {

  const [cart, setCart] = useState<Array<CartProductProps>>(Array(0));
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

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

  function handleAddCart(productAdd: ProductProps){
    const index = cart.findIndex((item) => item.product.id === productAdd.id);
    if(index === -1){
      setCart([...cart, {product: productAdd, quantity: 1}]);
    }
    else{
      const newCart = [...cart];
      newCart[index].quantity += 1;
      setCart(newCart);
    }
  }

  function handleRemoveCart(productRemove: ProductProps){
    const index = cart.findIndex((item) => item.product.id === productRemove.id);
    if(index !== -1){
      const newCart = [...cart];
      newCart[index].quantity -= 1;
      if(newCart[index].quantity === 0){
        newCart.splice(index, 1);
      }
      setCart(newCart);
    }
  }

  function handleDeleteCart(productDelete: ProductProps){
    const index = cart.findIndex((item) => item.product.id === productDelete.id);
    if(index !== -1){
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  }

  const totalQuantityCart = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0); 

  const handleCheckoutToggle = () => {
    setCheckoutOpen(!isCheckoutOpen);
  };
  
  return (
    <HomeContainer>
      <Header 
        quantity={totalQuantityCart} 
        onClick={handleCheckoutToggle} 
      />
      <HomeContent>
        {isLoading ? (
          <h1></h1>
        ):(
          <ListProducts>
            {data && (
              data.products.map((product) => {
                return(
                  <CardProduct 
                    key={product.id} 
                    product={product} 
                    onAddCart={handleAddCart}
                  />
                )
            }))}
          </ListProducts>  
        )}
      </HomeContent>
      <Checkout 
        ListCart={cart} 
        isOpen={isCheckoutOpen} 
        onClose={handleCheckoutToggle} 
        onRemoveCart={handleRemoveCart} 
        onDeleteCart={handleDeleteCart} 
        onAddCart={handleAddCart} 
      />
      <Footer /> 
    </HomeContainer>
  )
}