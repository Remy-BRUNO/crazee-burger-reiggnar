import Logo from "../../../components/Logo"
import styled from "styled-components"
import { theme } from "../../../theme"
import RightSide from "./RightSide"
import { refreshPoage } from "../../../Utils/window"
const Navbar = ({ name }) => {
  return (
    <NavbarStyled>
      <Logo onClick={refreshPoage} className="logo-order-page" />

      <RightSide name={name} />
    </NavbarStyled>
  )
}
export default Navbar

const NavbarStyled = styled.nav`
  height: 10vh;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  .logo-order-page {
    cursor: pointer;
  }
`
