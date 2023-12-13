import { IoPersonCircleOutline } from "react-icons/io5"
import Logo from "../../components/Logo"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Navbar = ({ name }) => {
  return (
    <NavbarStyled>
      <div className="left-side">
        <Logo />
      </div>

      <div className="right-side">
        <h1>
          Hey,<span className="name"> {name}</span>
        </h1>
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
  height: 10vh;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-side {
  }
  .right-side {
  }
`
