import { ProductProps } from "../../dto/ProductDTO";
import { CardProductButton, CardProductContainer, CardProductDescription, CardProductImage, CardProductInfo, CardProductPrice, CardProductPriceContainer } from "./styles";
import shoppingbag from "../../assets/shoppingbag.svg";

interface CardProductProps {
  product: ProductProps;
  onAddCart: (product: ProductProps) => void;
}

export function CardProduct({ product, onAddCart }: CardProductProps) {
  return (
    <CardProductContainer>
      <CardProductImage>
          <img src={product.photo} alt={product.name} />
      </CardProductImage>
      <CardProductInfo>
        <CardProductPriceContainer>
          <h1>{product.name}</h1>
          <CardProductPrice>
            <h2>R${product.price.split('.')[0]}</h2>
          </CardProductPrice>
        </CardProductPriceContainer>
        <CardProductDescription>
          <p>{product.description}</p>
        </CardProductDescription>
      </CardProductInfo>
      <CardProductButton>
        <button onClick={()=>onAddCart(product)}>
          <img src={shoppingbag} alt="shoppingbag" />
          COMPRAR
        </button>
      </CardProductButton>
    </CardProductContainer>
  )
}