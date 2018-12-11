import React, { Component, Fragment } from 'react';
import ProductLayout from './../../components/ProductLayout/ProductLayout';
import Category from './../../components/Category/Category';
import ProductItemSingle from './../../components/ProductItem/ProductItemSingle';
import $ from 'jquery';

class SingleProductPage extends Component {
    render() {
        return (
            <Fragment>
                <div id="site_content">
                    <div className="container">
                        <div className="row">
                            <Category />
                            <div className="col-md-9 col-sm-8 col-xs-12" id="content">
                                <div className="breadcrumbs">
                                    <a href="/">
                                        <i className="fa fa-home" />
                                    </a>
                                    <a>Lorem</a>
                                </div>
                                <ProductItemSingle />
                                <div className="rel-product">
                                    <div className="infoBoxHeading">
                                        <a>Related Product</a>
                                    </div>
                                    <div className="row product-layout_width">
                                        <ProductLayout />
                                        <ProductLayout />
                                        <ProductLayout />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

$("document").ready(function () {

    $(".galleryimg").on("click", function () {
        var src = $(this).attr('src');
        console.log(src)
        $(".changeimg").attr('src', src);
    });
});

function toggleChevron(e) {
    $(e.target)
    .prev('.panel-heading')
    .find("i.indicator")
    .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);

export default SingleProductPage;