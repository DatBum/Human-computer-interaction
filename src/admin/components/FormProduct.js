import React, { Component } from 'react';
import ProductCategoryItem from './ProductCategoryItem';
import axios from 'axios';

export default class Form extends Component {

  state = {
    name: "", 
    img: "",
    price: "",
    quantity: "",
    description: "",
    categoryId: ""
  }

  componentWillMount(){
    this.props.actFetchCategoriesRequest();
  }

  fileSelectedHandle = (event) => {
    let url = `https://api.cloudinary.com/v1_1/duz9mr6xc/image/upload`;
    var fd = new FormData();
    fd.append("upload_preset", "u8gtwaxh");
    fd.append("file", event.target.files[0]);
    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" }
    };
    axios.post(url,fd,config)
    .then(res => {
      this.setState({
        img: res.data.url,
      })
    });
  }

  onClickCategory  = (id) =>{
    this.setState({
      categoryId: id
    })
  }

  handleNameChanged = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handlePriceChanged = (e) => {
    this.setState({
      price: e.target.value
    })
  }

  handleQuantityChanged = (e) => {
    this.setState({
      quantity: e.target.value
    })
  }

  handleDescChanged = (e) => {
    this.setState({
      description: e.target.value
    })
  }

  formSubmit = () => {
    const { name, img, quantity , price, description, categoryId } = this.state
    if(name !== '' && quantity !== '' && price !== '' && description !== '' && categoryId !== ''){
      const item = {
        name: name,
        img: img,
        price: price,
        quantity: quantity,
        description: description,
        categoryId: categoryId
      }
      this.props.addItem(this.props.sectionName,item);
    }
    else alert("Something wrong");
  }

  render() {
    const {categories} =this.props;
    const categoriesElems = categories.map((category,index)=>{
      return <ProductCategoryItem onClickCategory={this.onClickCategory} categoryId={category.id} categoryName={category.name} key={index} />
    })
    return (
      <div className="btn-toolbar col-xs-8 col-sm-8 col-md-8 col-lg-8 mb-8 mb-md-8">
          <div className="Form row mb-7">
            <form onSubmit={this.formSubmit}>
                <div className="form-group col">
                  <div className="col-xs-6 form-group">
                    <label >Product Name :</label>
                    <input name="task_name" onChange={this.handleNameChanged} type="text" className="form-control"/>
                  </div>
                  <div className="col-xs-6 form-group">
                    <label >Price :</label>
                    <input name="task_name" onChange={this.handlePriceChanged} type="number" className="form-control" />
                  </div>
                </div>
                <div className="form-group col">
                  <div className="col-xs-6 form-group">
                    <label >Quantity :</label>
                    <input type="number" name="task_name" onChange={this.handleQuantityChanged} className="form-control" />
                  </div>
                  <div className="col-xs-2 form-group">
                    <label >Category :</label>
                    <div className="dropdown">
                      <button className="dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Categories
                        <span className="caret" />
                      </button>
                      <ul className="dropdown-menu scrollable-menu" role="menu">
                        {categoriesElems}
                      </ul>
                    </div>
                  </div>
                  <div className="col-xs-4 form-group">
                    <label >Picture Upload :</label>
                    <input className="btn btn-default" name="task_name" onChange={this.fileSelectedHandle} type="file" className="form-control" />
                  </div>
                </div>
                <div className="form-group col">
                  <div className="col-xs-12 form-group">
                    <label >Description :</label>
                    <textarea name="task_name" onChange={this.handleDescChanged} type="password" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-4 form-group">
                  <button onClick={this.formSubmit} type="button" className="btn btn-default">Submit</button>
                  <button type="button" className="btn btn-default">Cancel</button>
                </div>
            </form>
          </div>
        </div>
    );
  }
}
