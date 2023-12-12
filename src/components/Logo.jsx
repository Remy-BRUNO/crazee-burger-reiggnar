import logo from "../assets/logo-orange.png"
import styled from "styled-components"
import { theme } from "../theme"

const Logo = () => {
  return (
    <H1>
      CRAZEE <img src={logo} alt="logo" /> BURGER
    </H1>
  )
}
export default Logo

const H1 = styled.h1`
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};
  gap: 0.5rem;
  font-family: "Amatic SC", cursive;
  font-size: 110px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  img {
    width: 200px;
  }
`
