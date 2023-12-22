import styled from "styled-components"
import { theme } from "../../../theme"
import { formatPrice } from "../../../Utils/maths"

const Card = ({ title, imageSource, price }) => {
  return (
    <CardStyled>
      <div className="image">
        <img src={imageSource} alt={title} className="image" />
      </div>
      <div className="info-text">
        <h2 className="title">{title}</h2>
        <div className="description">
          <p className="price">{formatPrice(price)}</p>
          <button className="add-button">Ajouter</button>
        </div>
      </div>
    </CardStyled>
  )
}
export default Card

const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  box-shadow: ${theme.shadows.shadowOutset};
  border-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  padding: 50px 20px 10px 20px;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 15px;
  .image {
    width: 200px;
    height: 145px;

    img {
      object-fit: contain;
      width: 100%;
    }
  }
  .info-text {
    display: flex;
    gap: 15px;
    padding: 0px 5px 5px 5px;
    flex-direction: column;
    align-items: flex-start;
    width: 200px;
    .title {
      font-family: Amatic SC;
      font-size: ${theme.fonts.P4};
      font-weight: ${theme.weights.bold};
    }
    .description {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .price {
        align-items: flex-start;
        color: ${theme.colors.primary};
      }
      .add-button {
        display: block;
        border-radius: ${theme.borderRadius.round};
        border: 1px solid ${theme.colors.primary};
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
        display: flex;
        width: 95px;
        height: 38px;
        padding: 12px 26.3px 12px 26.5px;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
      }
      .add-button:hover {
        background: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }
`
