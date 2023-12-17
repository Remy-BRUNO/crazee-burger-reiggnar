import styled from "styled-components"
import { theme } from "../../theme"

const Main = () => {
  return <MainStyled>Main</MainStyled>
}
export default Main
const MainStyled = styled.main`
  flex: 1; /* prend la place qui reste */
  box-shadow: ${theme.shadows.shadow};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
`
