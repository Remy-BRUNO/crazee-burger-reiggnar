import styled from "styled-components"
import LoginForm from "./LoginForm"
import background from "../../assets/burger-background.jpg"
import Logo from "../../components/Logo"

export default function LoginPage() {
  // state

  //comportement

  //affichage
  return (
    <LoginDiv>
      <Logo className={"logo-loginPage"} />
      <LoginForm />
    </LoginDiv>
  )
}

const LoginDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background}) no-repeat center/cover;
  gap: 2rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .logo-loginPage {
    transform: scale(2.5);
  }
`
