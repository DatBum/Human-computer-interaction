import React, { Component } from 'react';
import ProductCategoryItem from './ProductCategoryItem';
import axios from 'axios';

export default class Form extends Component {

  state = {
    selectedFile: null
  }

  componentWillMount(){
    this.props.actFetchCategoriesRequest();
  }

  fileSelectedHandle = (event) => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  handleUpload = () => {
    let url = `https://api.cloudinary.com/v1_1/duz9mr6xc/image/upload`;
    var fd = new FormData();
    fd.append("upload_preset", "u8gtwaxh");
    fd.append("file", this.state.selectedFile);
    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" }
    };
    axios.post(url,fd,config)
    .then(res => {
      console.log(res)
    });
  }

  render() {
    const {categories} =this.props;
    const categoriesElems = categories.map((category,index)=>{
      return <ProductCategoryItem categoryName={category.name} key={index} />
    })
    return (
      <div className="btn-toolbar col-xs-8 col-sm-8 col-md-8 col-lg-8 mb-8 mb-md-8">
          <div className="Form row mb-7">
            <form onSubmit={this.props.formSubmit}>
                <div className="form-group col">
                  <div className="col-xs-6 form-group">
                    <label >Product Name :</label>
                    <input name="task_name" onChange={this.props.nameChanged} type="text" className="form-control"/>
                  </div>
                  <div className="col-xs-6 form-group">
                    <label >Price :</label>
                    <input name="task_name" onChange={this.props.emailChanged} type="number" className="form-control" />
                  </div>
                </div>
                <div className="form-group col">
                  <div className="col-xs-6 form-group">
                    <label >Quantity :</label>
                    <input type="number" name="task_name" onChange={this.props.passwordChanged} className="form-control" />
                  </div>
                  <div className="col-xs-2 form-group">
                    <label >Category :</label>
                    <div className="dropdown">
                      <button className="dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Categories
                        <span className="caret" /></button>
                      <ul className="dropdown-menu scrollable-menu" role="menu">
                        {categoriesElems}
                      </ul>
                    </div>
                  </div>
                  <div className="col-xs-4 form-group">
                    <label >Picture Upload :</label>
                    <input className="btn btn-default" name="task_name" onChange={this.fileSelectedHandle} type="file" className="form-control" />
                    <button onClick={this.handleUpload}>Upload</button>
                  </div>
                </div>
                <div className="form-group col">
                  <div className="col-xs-12 form-group">
                    <label >Description :</label>
                    <textarea name="task_name" onChange={this.props.passwordConfirmChanged} type="password" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-4 form-group">
                  <button type="submit" className="btn btn-default">Submit</button>
                  <button type="button" className="btn btn-default">Cancel</button>
                </div>
            </form>
            <div className="col-xs-4 form-group">
                    <label >Picture Upload :</label>
                    <input name="task_name" onChange={this.fileSelectedHandle} type="file" className="form-control" />
                    <button onClick={this.handleUpload}>Upload</button>
                  </div>
          </div>
        </div>
    );
  }
}
