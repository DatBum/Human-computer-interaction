import React, { Component } from 'react';
import ProductCategoryItem from './ProductCategoryItem';
import axios from 'axios';

export default class FormProduct extends Component {

  state = {
    name: "", 
    img: "",
    price: "",
    quantity: "",
    description: "",
    categoryId: "1",
    selectedimgfile: "",
  }

  componentWillMount(){
    this.props.actFetchCategoriesRequest();
  }

  fileSelectedHandle = (event) => {
    let url = `https://api.cloudinary.com/v1_1/duz9mr6xc/image/upload`;
    var fd = new FormData();
    fd.append("upload_preset", "u8gtwaxh");
    fd.append("file", event.target.files[0]);
    this.setState({
      selectedimgfile: event.target.files[0]
    })
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
      alert("Adding product has been successed !")
      this.setState({
        name: "", 
        img: "",
        price: "",
        quantity: "",
        description: "",
        categoryId: "",
        selectedimgfile: ""
      });
    }
    else alert("Something wrong");
  }

  render() {
    const {name, selectedimgfile, price, quantity, description, categoryId} = this.state
    const {categories} = this.props;
    if(categories[categoryId-1]){
      var currentCatName = categories[categoryId-1].name
    }
    const categoriesElems = categories.map((category,index)=>{
      return <ProductCategoryItem onClickCategory={this.onClickCategory} categoryId={category.id} categoryName={category.name} key={index} />
    })
    return (
      <div className="btn-toolbar col-xs-8 col-sm-8 col-md-8 col-lg-8 mb-8 mb-md-8">
          <div className="Form row mb-7">
            <form>
                <div className="form-group col">
                  <div className="col-xs-6 form-group">
                    <label >Product Name :</label>
                    <input name="task_name" value={name} onChange={this.handleNameChanged} type="text" className="form-control"/>
                  </div>
                  <div className="col-xs-6 form-group">
                    <label >Price :</label>
                    <input name="task_name" value={price} onChange={this.handlePriceChanged} type="number" className="form-control" />
                  </div>
                </div>
                <div className="form-group col">
                  <div className="col-xs-6 form-group">
                    <label >Quantity :</label>
                    <input type="number" name="task_name" value={quantity} onChange={this.handleQuantityChanged} className="form-control" />
                  </div>
                  <div className="col-xs-2 form-group">
                    <label >Category :</label>
                    <select class="form-control" id="sel1">
                      {categoriesElems}
                    </select>
                  </div>
                  <div className="col-xs-4 form-group">
                    <label >Picture Upload :</label>
                    <input className="btn btn-default" name="task_name" onChange={this.fileSelectedHandle} type="file" className="form-control" />
                  </div>
                </div>
                <div className="form-group col">
                  <div className="col-xs-12 form-group">
                    <label >Description :</label>
                    <textarea name="task_name" value={description} onChange={this.handleDescChanged} type="password" className="form-control" />
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
