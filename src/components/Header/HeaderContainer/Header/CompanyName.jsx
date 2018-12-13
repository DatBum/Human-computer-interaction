import React from 'react';
import { Link } from 'react-router-dom';

const companyName = (props) => {
  return(
    <div className="col-md-4 col-sm-4 col-xs-4" id="logo">
      <Link to="/" className="logo-text">
        Medi<span style={{color: '#39BAF0', fontSize: '40px'}}>STORE</span>
      </Link>      
    </div>
  )
}

export default companyName;
