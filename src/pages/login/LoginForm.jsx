import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { IoPersonCircleOutline } from "react-icons/io5"
import { IoIosArrowForward } from "react-icons/io"
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
    color: #fff;
    font-family: Amatic SC;
    font-size: 48px;
  }
  h2 {
    color: #fff;
    font-family: Amatic SC;
    font-size: 36px;
    padding-top: 2rem;
  }
  svg {
    color: #9a9a9a;
  }
`

const Bar = styled.div`
  width: 400px;
  height: 3px;
  border: 1px solid #f56a2c;
  background: #f56a2c;
`
const DivInput = styled.div`
  padding: 18px 24px;
  gap: 12.797px;
  display: flex;
  width: 400px;
  height: 53px;
  border-radius: 5px;
  background: #fff;
  input {
    display: flex;
    padding: 1px 2px;
    justify-content: center;
    background: #fff;
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
  gap: 0.5rem;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #ff9f1b;
  background: #ff9f1b;
  cursor: pointer;
  color: #fff;
  svg {
    color: #fff;
  }
  &:hover {
    border: 1px solid #ff9f1b;
    color: #ff9f1b;
    background: #fff;
  }
  &:hover svg {
    color: #ff9f1b;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`
