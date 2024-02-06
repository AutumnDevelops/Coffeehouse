import React from 'react';
import {connect} from 'react-redux';
import { IoMdClose } from "react-icons/io";
import {removeFromCart, updateCartItemQuantity} from '../../Redux/actions';

const CartItem = ({ item, image, price, quantity, removeFromCart }) => {
  return (
    <div className="cart_item">
        <div className="cart_image">
            <img src={require(`./card_img/${image}.jpg`)} alt="img"/>
        </div>
      <div className="cart_info">
        <h3 className="cart_product">{item}</h3>
        <div className="cart_numbers">
          <h4>$<span className="cart_price">{price}</span></h4>
          <input name="product_quantity" className="cart_quantity" type="number" value={price}
            onChange={(e) => updateCartItemQuantity(item, e.target.value)}/>
        </div>
        <button className="cart_delete"  onClick={() => removeFromCart(item)}><IoMdClose /></button>
      </div>
    </div>
  );
};

export default connect(null, { removeFromCart, updateCartItemQuantity })(CartItem);
