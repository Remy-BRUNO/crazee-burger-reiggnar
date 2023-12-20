import styled from "styled-components"
import { theme } from "../../../theme"
import Menu from "./Menu"

const Main = () => {
  return (
    <MainStyled>
      <div className="Basket">Basket</div>
      <Menu />
    </MainStyled>
  )
}
export default Main
const MainStyled = styled.main`
  flex: 1; /* prend la place qui reste */
  box-shadow: ${theme.shadows.shadowInset};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  padding: 50px 50px 150px;
  grid-row-gap: 60px;
  display: grid;
  grid-template-columns: 25% 75%;
  .Basket {
    border: 5px solid blue;
  }
`
