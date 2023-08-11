const LoginForm = () => {
  const handleSubmit = () => {}

  return (
    <div>
      <h1>
        Bienvenue chez nous <a href="/login">Connectez vous</a>
      </h1>
      <form action="">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="entrez votre prénom ..."
          required
        />
        <button type="submit" onClick={handleSubmit}>
          Accéder à votre espace
        </button>
      </form>
    </div>
  )
}
export default LoginForm
