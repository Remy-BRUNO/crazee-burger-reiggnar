import { useState } from "react"

const LoginForm = () => {
  const [inputValue, setInputValue] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    setInputValue("")
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
