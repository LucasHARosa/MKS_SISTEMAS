import { ProductProps } from "../../dto/ProductDTO";
import { CardProductCartContainer, CardProductCartInfo, CloseButton, Price, ProductQuantity, ProductQuantityButtons } from "./styles";

interface CardProductCartProps {
  product: ProductProps;
  quantity: number;
  onRemoveCart: (product: ProductProps) => void;
  onDeleteCart: (product: ProductProps) => void;
  onAddCart: (product: ProductProps) => void;
}

export function CardProductCart( {product, quantity, onRemoveCart, onDeleteCart, onAddCart}: CardProductCartProps){
  return(
    <CardProductCartContainer>
      <CloseButton onClick={() => onDeleteCart(product)}>X</CloseButton>
      <CardProductCartInfo>
        <img src={product.photo} alt={product.name} />
        <p>
          {product.name}
        </p>
      </CardProductCartInfo>
      
      <ProductQuantity>
        <p>Qtd:</p>
        <ProductQuantityButtons>
          <button onClick={() => onRemoveCart(product)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => onAddCart(product)}>+</button>
        </ProductQuantityButtons>
      </ProductQuantity>
      <Price>
        <h2>
          R$ {(Number(product.price) * quantity )}
        </h2>
      </Price>
      
    </CardProductCartContainer>
  )
}