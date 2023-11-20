import { ProductProps } from "../../dto/ProductDTO";
import { CardProductButton, CardProductContainer, CardProductImage, CardProductInfo, CardProductPrice, CardProductPriceContainer } from "./styles";



export function CardProduct({product}:{product: ProductProps}) {
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
        <p>{product.description}</p>
      </CardProductInfo>
      <CardProductButton>
        <button>COMPRAR</button>
      </CardProductButton>
    </CardProductContainer>
  )
}