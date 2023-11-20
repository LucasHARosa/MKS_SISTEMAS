import { ButtonCart, HeaderContainer, HeaderLogo } from "./styles";
import cart from "../../assets/cart.svg";


export function Header() {
    return (
        <HeaderContainer>
          <HeaderLogo>
            <h1>MKS</h1>
            <p>SISTEMAS</p>
          </HeaderLogo>
          <ButtonCart>
            <img src={cart} alt="Cart" />
            <span>0</span>
          </ButtonCart>
        </HeaderContainer>
    )
}