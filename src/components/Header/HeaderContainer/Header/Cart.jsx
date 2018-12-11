import React from 'react';
import { Link } from 'react-router-dom';

const cart = (props) => {
  // const number = props.products.length;
  // let price = 0;
  // props.products.map(product => {
  //   price = price + product.price;
  // })
  
  return(
    <div id="cart">
      <div className="text">
        <div className="img">
          <Link to="/cart"> <img className="img-responsive" src="images/cart.png" width={26} height={27} /></Link>
        </div><span>Your cart:</span><span className="cart_total">{props.selectedCurrency}0.00</span><span className="cart_items">(0 items)</span>
      </div> 
    </div>
  )
}

export default cart;
