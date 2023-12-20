import styled from "styled-components"

const Card = ({ produit }) => {
  const { id, imageSource, title, price, quantity, isAvailable, isAdvertised } =
    produit
  return (
    <CardStyled>
      {/* <img src={imageSource} alt={title} /> */}
      <h2>{title}</h2>
      <div>
        <p>{price} </p>
      </div>
    </CardStyled>
  )
}
export default Card

const CardStyled = styled.div`
  border: 5px solid green;
  width: 240px;
  height: 330px;
`
