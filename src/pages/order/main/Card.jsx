import styled from "styled-components"
import { theme } from "../../../theme"

const Card = ({ title, imageSource, price }) => {
  return (
    <CardStyled>
      <div className="image">
        <img src={imageSource} alt={title} className="image" />
      </div>
      <div className="info-text">
        <h2 className="title">{title}</h2>
        <div className="description">
          <p className="price">{price} </p>
          <button className="add-buton">Ajouter</button>
        </div>
      </div>
    </CardStyled>
  )
}
export default Card

const CardStyled = styled.div`
  border: 5px solid green;
  width: 240px;
  height: 330px;
  box-shadow: ${theme.shadows.shadowOutset};
  .image {
    width: 200px;
    height: 145px;
    img {
      object-fit: contain;
      width: 100%;
    }
  }
  .info-text {
    border: 5px solid blue;

    padding: 10px 20px;
    .description {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`
