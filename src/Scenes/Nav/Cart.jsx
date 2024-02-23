import React, {useState} from 'react'
import CartItem from "../../Comps/Cards/CartItem"
import { useSelector } from 'react-redux';
const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce((acc, item) => acc + (item.price), 0);
return (
<>
<h1>Your Cart</h1>
<section className = "cart_item_area">
{cartItems.map(item => (
          <CartItem key={item.id} item={item.name} price={item.price} image={item.image} quantity={item.quantity} />
        ))}
</section>
    <div id  = "check_out_buttons">
          <div id  = "total_area">
                <label htmlFor = "total">Total</label>
                <h3>$<span className = "total">{total.toFixed(2)}</span></h3>
            </div>
    <div style = {{display: "flex",  width: "100%", position: "absolute", bottom: "0", left: "20px"}}>
      <button id = "check_out_button">Check Out</button>
    </div>
    </div>
</>
  )
}

export default Cart