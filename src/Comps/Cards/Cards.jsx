import React, { useState } from 'react';
import Product_cards from "../../utils/menu.json";
import { connect } from 'react-redux';
import {addToCart} from "../../Redux/actions"
import { useDispatch } from 'react-redux';

const ProductCards = ({cartOpen, handleCartOpenClose }) => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState([]);
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (card) => {
    const updatedCartItems = [...cartItems, card];
    setCartItems(updatedCartItems);
    console.log(updatedCartItems);
    dispatch(addToCart(card));
    if(!cartOpen){
      handleCartOpenClose(); 
    }
  };

  return (
    <>
  <div id = "select_category">
  <h3>Select a Category</h3>
      <div id="categories">
        <h4 className="filter" onClick={() => handleFilterClick("all")}>All</h4>
        <h4 className="filter" onClick={() => handleFilterClick("coffee")}>Coffee & Tea</h4>
        <h4 className="filter" onClick={() => handleFilterClick("juice")}>Frozen Drinks & Juice</h4>
        <h4 className="filter" onClick={() => handleFilterClick("breakfast")}>Breakfast</h4>
        <h4 className="filter" onClick={() => handleFilterClick("lunch")}>Lunch</h4>
        <h4 className="filter" onClick={() => handleFilterClick("dessert")}>Desserts</h4>
      </div>
    </div>


    <div id = "products">
      {Product_cards.map((card, index) => (
        (selectedCategory === "all" || card.class === selectedCategory) && (
          <div className={`${card.class} menu_item`} key={index}>
          <div className="menu_image">
              <img className="image" src={require(`./card_img/${card.image}.jpg`)} alt="img" />
          </div>
            <h4 className="menu_product">{card.name}</h4>
            <h5 className="menu_price">$<span className="price">{card.price}</span></h5>
            <button className="menu_button" type="submit" onClick={() => handleAddToCart(card)}>Add</button>
          </div>
        )
      ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({cartItems: state.cart.cartItems});

export default connect(mapStateToProps, { addToCart })(ProductCards);