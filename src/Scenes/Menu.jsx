import React, {useState} from 'react'
import Header from "./Header";
import ProductCards from "../Comps/Cards/Cards";
import Cart from "../Comps/Nav/Cart"
const Menu = () => {
  
  return (
    <>
    <section id= "menu_area">
      <Header  isMenu={false} />
    </section>
      <div id = "menu">
          <ProductCards />  
      </div>
    </>
  )
}

export default Menu