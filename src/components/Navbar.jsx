import { IoPersonCircleOutline } from "react-icons/io5"
import Logo from "./Logo"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Navbar = ({ name }) => {
  return (
    <NavbarStyled className="navbar">
      <Logo className="logo" />

      <div>
        <h1>Hey, {name}</h1>
        <Link to="/">
          <button>Se déconnecter</button>
        </Link>
        <IoPersonCircleOutline />
      </div>
    </NavbarStyled>
  )
}
export default Navbar

const NavbarStyled = styled.nav`
  border: 5px solid red;
  height: 10vh;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 100px;
  }
`
