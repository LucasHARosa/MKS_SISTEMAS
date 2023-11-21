import { ButtonCart, HeaderContainer, HeaderLogo } from "./styles";
import cart from "../../assets/cart.svg";

interface HeaderProps {
  quantity: number;
  onClick: () => void;
}

export function Header( {quantity, onClick}: HeaderProps) {
    return (
        <HeaderContainer>
          <HeaderLogo>
            <h1>MKS</h1>
            <p>SISTEMAS</p>
          </HeaderLogo>
          <ButtonCart 
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={onClick}
          >
            <img src={cart} alt="Cart" />
            <span>{quantity}</span>
          </ButtonCart>
        </HeaderContainer>
    )
}