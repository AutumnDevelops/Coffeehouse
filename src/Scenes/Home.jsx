import React, {useState} from 'react'
import About from "./About";
import Header from "./Header";
import Promotionals from '../Comps/Promotionals/Promotionals';
import Nav from "./Nav/Nav"
import Cart from "./Nav/Cart";
const Home = () => {
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
        <Header isMenu={true} />
        <Promotionals />
        <About />
    </>
  )
}

export default Home