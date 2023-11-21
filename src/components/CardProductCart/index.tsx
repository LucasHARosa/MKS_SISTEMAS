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
    <CardProductCartContainer
      exit={{ opacity: 0 }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring" }}
      layout
    >
      <CloseButton 
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={() => onDeleteCart(product)}
      >
        X
      </CloseButton>
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
          R$ {(Number(product.price) * quantity ).toLocaleString('pt-BR')}
        </h2>
      </Price>
      
    </CardProductCartContainer>
  )
}