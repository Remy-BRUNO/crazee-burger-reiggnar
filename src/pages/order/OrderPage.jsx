import { useParams } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../theme"
import Navbar from "./navbar/Navbar"
import Main from "./Main"

const OrderPage = () => {
  const { name } = useParams()
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar name={name} />
        <Main />
      </div>
    </OrderPageStyled>
  )
}
export default OrderPage

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  font-family: "Open Sans", sans-serif;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`
