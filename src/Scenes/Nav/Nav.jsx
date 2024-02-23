import {useState} from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FiAlignJustify } from "react-icons/fi";
import {Link} from "react-router-dom"


const Nav = ({isActive, cartOpen, handleOpenMenuClick, handleCartOpenClose}) => {
  return (
<>
  <header>
      <ul className = {`buttom_menu_area ${isActive ? "active" : ""}`}>  
          <Link to = "/Coffeehouse" style = {{color:"white"}}><li class = "li_link"><p>About</p></li></Link>
          <Link to = "/Coffeehouse/Menu" style = {{color:"white"}}><li className = "li_link"><p>Menu</p></li></Link>
    </ul>
      <ul className = "top_menu_area">
              <li className = "li_button" id = "header_open" onClick={handleOpenMenuClick}><i name="menu-outline" className = "header_link" id = "header_link"><FiAlignJustify /></i><i style = {{display:"none"}} name="close-outline" className = "cart_link" id = "cart_close"><IoMdClose /></i></li>
              <li className = "li_button" id = "cart_open" onClick={handleCartOpenClose}><i name="cart-outline" className = "cart_link" id = "cart_link"><CiShoppingCart /></i><i style = {{display:"none"}} name="close-outline" className = "cart_link" id = "cart_close"><IoMdClose /></i></li>
      </ul>
  </header>
</>
  )
}

export default Nav