import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous</h1>
      <h2>Connectez vous</h2>
      <input
        type="text"
        name="name"
        id="name"
        value={inputValue}
        onChange={handleChange}
        placeholder="entrez votre prénom ..."
        required
      />
      <button type="submit">Accéder à votre espace</button>
    </form>
  )
}
export default LoginForm
