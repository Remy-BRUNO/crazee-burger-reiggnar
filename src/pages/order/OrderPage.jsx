import { Link, useParams } from "react-router-dom"

const OrderPage = () => {
  const { name } = useParams()
  return (
    <div>
      <h1>Bienvenue {name}</h1>
      <Link to="/">
        <button>deconnexion</button>
      </Link>
    </div>
  )
}
export default OrderPage
