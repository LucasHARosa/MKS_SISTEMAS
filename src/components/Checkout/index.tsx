import { CartProductProps, ProductProps } from "../../dto/ProductDTO";
import { CheckoutContainer, CheckoutHeader, CheckoutProducts } from "./styles";
import { CardProductCart } from "../CardProductCart";

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

  return(
    <CheckoutContainer
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <CheckoutHeader>
        <h1>Carrinho de compras</h1>
        <button onClick={onClose}>
          X
        </button>
        
      </CheckoutHeader>
      <CheckoutProducts>
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
      </CheckoutProducts>
    
  </CheckoutContainer>
  )
}