import React from 'react';

const cart = (props) => {
  return(
    <div id="cart">
      <div className="text">
        <div className="img">
          <a href="cart.html"> <img className="img-responsive" src="images/cart.png" alt title width={26} height={27} /></a>
        </div><span>Your cart:</span><span className="cart_total">€0.00</span><span className="cart_items">(0 items)</span>
      </div> 
    </div>
  )
}

export default cart;
