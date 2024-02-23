import React, {useState} from 'react'
import Header from "./Header";
import ProductCards from "../Comps/Cards/Cards";
import Nav from "./Nav/Nav"
import Cart from "./Nav/Cart";
const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const handleOpenMenuClick = () => {setIsActive(!isActive)};
  const handleCartOpenClose = () => {setCartOpen(!cartOpen)};
  return (
    <>
    <Nav isActive={isActive} cartOpen={cartOpen} handleOpenMenuClick={handleOpenMenuClick} handleCartOpenClose={handleCartOpenClose} />
      <section id = "cart" className={cartOpen ? "active" : ""}>
         <Cart />
      </section>
    <section id= "menu_area">
      <Header  isMenu={false} />
    </section>
      <div id = "menu">
          <ProductCards cartOpen={cartOpen} handleCartOpenClose={handleCartOpenClose} />  
      </div>
    </>
  )
}

export default Menu