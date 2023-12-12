import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { IoPersonCircleOutline } from "react-icons/io5"
import { IoIosArrowForward } from "react-icons/io"
import { theme } from "../../theme"
const LoginForm = () => {
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    setInputValue("")
    navigate(`/order/${inputValue}`)
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <FormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous</h1>
      <Bar></Bar>
      <h2>Connectez vous</h2>

      <DivInput>
        <IoPersonCircleOutline />
        <input
          type="text"
          name="name"
          id="name"
          value={inputValue}
          onChange={handleChange}
          placeholder="Entrez votre prénom"
          required
        />
      </DivInput>
      <Button type="submit">
        Accéder à mon espace <IoIosArrowForward />
      </Button>
    </FormStyled>
  )
}
export default LoginForm

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h1 {
    color: ${theme.colors.white};
    font-family: Amatic SC;
    font-size: ${theme.fonts.P5};
  }
  h2 {
    color: ${theme.colors.white};
    font-family: Amatic SC;
    font-size: ${theme.fonts.P4};
    padding-top: 2rem;
  }
  svg {
    color: ${theme.colors.greySemiDark};
  }
`

const Bar = styled.div`
  width: 400px;
  height: 3px;
  border: 1px solid ${theme.colors.loginLine};
  background: ${theme.colors.loginLine};
`
const DivInput = styled.div`
  padding: 18px 24px;
  gap: ${theme.spacing.sm};
  display: flex;
  width: 400px;
  height: 53px;
  border-radius: ${theme.borderRadius.round};
  background: ${theme.colors.white};
  input {
    display: flex;
    padding: 1px 2px;
    justify-content: center;
    background: ${theme.colors.white};
    border: none;
    width: 90%;
  }

  input:focus {
    outline: none;
  }
  input::placeholder {
    color: #9a9a9a;
  }
  svg {
    color: #9a9a9a;
  }
`
const Button = styled.button`
  display: flex;
  width: 400px;
  height: 53px;
  justify-content: center;
  gap: ${theme.spacing.xs};
  align-items: center;
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.primary};
  background: ${theme.colors.primary};
  cursor: pointer;
  color: ${theme.colors.white};
  svg {
    color: ${theme.colors.white};
  }
  &:hover {
    border: 1px solid ${theme.colors.primary};
    color: ${theme.colors.primary};
    background: ${theme.colors.white};
  }
  &:hover svg {
    color: ${theme.colors.primary};
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`
