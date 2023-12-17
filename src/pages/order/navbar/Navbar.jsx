import Logo from "../../../components/Logo"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"
import RightSide from "./RightSide"

const Navbar = ({ name }) => {
  return (
    <NavbarStyled>
      <Link to={`/order/${name}`} className="left-side">
        <Logo />
      </Link>
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

  a {
    text-decoration: none;
  }

  .left-side {
  }
`
