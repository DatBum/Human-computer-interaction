import React, { Component, Fragment} from 'react';
import ProductItem from './../ProductItem/ProductItem';

class ProductLayout extends Component {
    render() {
        return (
        	<Fragment>
                <div className="product-layout  col-md-4 col-sm-6 col-xs-12">
                    <div className="product-thumb-height">
                        <div className="product-thumb transition">
                            <ProductItem />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ProductLayout;