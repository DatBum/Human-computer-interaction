import React from 'react';
import { Link } from 'react-router-dom';

const cart = (props) => {
  const number = props.products.length;
  const rate = (currency) => {
    switch(currency) {
      case 'VND': return 23000;
      case 'AUD': return 1.4;
      case 'USD': return 1;
    }
  }
  return(
    <div id="cart">
      <div className="text">
        <div className="img">
          <Link to="/cart"> <img className="img-responsive" src="images/cart.png" width={26} height={27} /></Link>
        </div><span>Your cart:</span><span className="cart_total">{props.selectedCurrency}{Number(props.sum) * rate(props.selectedCurrency)}</span><span className="cart_items">({number} items)</span>
      </div> 
    </div>
  )
}

export default cart;
