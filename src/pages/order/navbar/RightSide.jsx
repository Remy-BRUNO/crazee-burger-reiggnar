import styled from "styled-components"
import { theme } from "../../../theme"
import { Link } from "react-router-dom"
import { IoPersonCircleOutline } from "react-icons/io5"

const RightSide = ({ name }) => {
  return (
    <RightSideStyled>
      <div className="admin-button">button</div>
      <div>
        <h1>
          Hey,<span className="name"> {name}</span>
        </h1>
        <Link to="/">Se déconnecter</Link>
      </div>
      <IoPersonCircleOutline className="icon" />
    </RightSideStyled>
  )
}
export default RightSide

const RightSideStyled = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.greyBlue};

  svg {
    width: 50px;
    height: 50px;
  }
  .name {
    color: ${theme.colors.primary};
  }
  a {
    color: ${theme.colors.greyBlue};
  }
`
