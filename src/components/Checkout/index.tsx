import { CartProductProps, ProductProps } from "../../dto/ProductDTO";
import { CheckoutButton, CheckoutContainer, CheckoutHeader, CheckoutListProducts, CheckoutTotal } from "./styles";
import { CardProductCart } from "../CardProductCart";
import { motion } from "framer-motion";


interface CheckoutProps {
  ListCart: Array<CartProductProps>;
  onRemoveCart: (product: ProductProps) => void;
  onDeleteCart: (product: ProductProps) => void;
  onAddCart: (product: ProductProps) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Checkout( {ListCart, onRemoveCart, onDeleteCart, onAddCart, isOpen, onClose}: CheckoutProps){

  const totalCart = ListCart.reduce((total, item) => {
    return total + (Number(item.product.price) * item.quantity);
  }, 0);

  function handlePortfolio(){
    window.open('https://lucasharosa.github.io/', '_blank');
  }


  return(
    <CheckoutContainer
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div>
        <CheckoutHeader>
          <h1>Carrinho de compras</h1>
          <motion.button 
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={onClose}
          >
            X
          </motion.button>
        </CheckoutHeader>
        
          <CheckoutListProducts>
            {ListCart.map((item) => {
              return (
                <CardProductCart
                  key={item.product.id}
                  product={item.product}
                  quantity={item.quantity}
                  onRemoveCart={onRemoveCart}
                  onDeleteCart={onDeleteCart}
                  onAddCart={onAddCart}
                />
              );
            })}
          </CheckoutListProducts>
        
      </div>
      <div>
        <CheckoutTotal>
          <h2>Total: </h2>
          <h2>R${totalCart.toLocaleString('pt-BR')}</h2>
        </CheckoutTotal>
        <CheckoutButton onClick={handlePortfolio}>
          Finalizar compra
        </CheckoutButton>
      </div>
  </CheckoutContainer>
  )
}