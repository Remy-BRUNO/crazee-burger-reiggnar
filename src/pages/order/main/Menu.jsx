import { useState } from "react"
import styled from "styled-components"
import { fakeMenu1, fakeMenu2 } from "../../../fakeData/fakeMenu"
import Card from "./Card"

const Menu = () => {
  const [menu, setMenu] = useState(fakeMenu2)

  return (
    <MenuStyled className="menu">
      {menu.map((produit) => {
        const {
          id,
          imageSource,
          title,
          price,
          quantity,
          isAvailable,
          isAdvertised,
        } = produit
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource}
            price={price}
          />
        )
      })}
    </MenuStyled>
  )
}
export default Menu

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-row-gap: 60px;
  justify-items: center;
`
