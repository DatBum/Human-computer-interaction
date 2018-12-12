import React, { Component, Fragment} from 'react';
import ProductItem from './../ProductItem/ProductItem';

class ProductLayout extends Component {
    render() {
        return (
        	<Fragment>
                <div className="row margin-top product-layout_width">                    
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}

export default ProductLayout;