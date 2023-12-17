import logo from "../assets/logo-orange.png"
import styled from "styled-components"
import { theme } from "../theme"

const Logo = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <H1>
        CRAZEE <img src={logo} alt="logo" /> BURGER
      </H1>
    </div>
  )
}
export default Logo

const H1 = styled.h1`
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};
  gap: 0.5rem;
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.P4};
  letter-spacing: 1.5px;
  text-transform: uppercase;

  img {
    width: 80px;
  }
`
