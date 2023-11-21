import { ProductProps } from "../../dto/ProductDTO";
import { CardProductButton, CardProductContainer, CardProductDescription, CardProductImage, CardProductInfo, CardProductPrice, CardProductPriceContainer } from "./styles";
import shoppingbag from "../../assets/shoppingbag.svg";
import { motion } from "framer-motion";

interface CardProductProps {
  product: ProductProps;
  onAddCart: (product: ProductProps) => void;
}

export function CardProduct({ product, onAddCart }: CardProductProps) {
  const price = Number(product.price).toLocaleString('pt-BR');
  return (
    <CardProductContainer
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring" }}
      layout
    >
      <CardProductImage>
          <img src={product.photo} alt={product.name} />
      </CardProductImage>
      <CardProductInfo>
        <CardProductPriceContainer>
          <h1>{product.name}</h1>
          <CardProductPrice>
            <h2>R${price}</h2>
          </CardProductPrice>
        </CardProductPriceContainer>
        <CardProductDescription>
          <p>{product.description}</p>
        </CardProductDescription>
      </CardProductInfo>
      <CardProductButton>
        <button
          onClick={()=>onAddCart(product)}
        >
          <img src={shoppingbag} alt="shoppingbag" />
          <motion.h2
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            COMPRAR
          </motion.h2>
        </button>
      </CardProductButton>
    </CardProductContainer>
  )
}