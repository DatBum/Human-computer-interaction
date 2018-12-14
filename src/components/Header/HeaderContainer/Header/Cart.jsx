import React from 'react';
import { Link } from 'react-router-dom';

const cart = (props) => {
  const number = props.products.length;
  let price = 0;
  props.products.map(product => {
    price = price + Number.parseFloat(product.price);
  })
  return(
    <div id="cart">
      <div className="text">
        <div className="img">
          <Link to="/cart"> <img className="img-responsive" src="images/cart.png" width={26} height={27} /></Link>
        </div><span>Your cart:</span><span className="cart_total">{props.selectedCurrency}{price}</span><span className="cart_items">({number} items)</span>
      </div> 
    </div>
  )
}

export default cart;
