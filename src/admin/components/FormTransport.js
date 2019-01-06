import React, { Component } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import axios from 'axios';

export default class FormProduct extends Component {

  state= {
    createAt: new Date(),
    warehoseOut: "",
    typeOut: "",
    typeIn: "",
    warehouseIn: "",
    isBalance: "",
    startDate: new Date(),
    endDate: new Date(),
  }

  handleSelectRange = (ranges) => {
    console.log(ranges)
    this.setState({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate
    });
  }

  componentWillMount(){
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
    const {name, selectedimgfile, price, quantity, description, categoryId, startDate, endDate, key} = this.state
    const {categories} = this.props;

    const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: 'selection',
    } 

    return (
      
      <div className="btn-toolbar">
          <div className="Form row col">
            <div className="col-xs-7">
              <h2 className="text-center">Schedule</h2>
              <DateRangePicker
                  ranges={[selectionRange]}
                  onChange={this.handleSelectRange}
                />
            </div>
            <form className="col-xs-5">
              <h2 className="text-center">Information</h2>
              <div className="form-group ">
                <div className="col-xs-6 form-group">
                  <label >From Warehouse :</label>
                  <select class="form-control">
                  <option>Warehouse 1</option>
                  <option>Warehouse 2</option>
                  <option>Warehouse 3</option>
                  <option>Warehouse 4</option>
                  <option>Warehouse 5</option>
                  </select>
                </div>
                <div className="col-xs-6 form-group">
                  <label >To Warehouse :</label>
                  <select class="form-control">
                  <option>Warehouse 2</option>
                  <option>Warehouse 3</option>
                  <option>Warehouse 4</option>
                  <option>Warehouse 5</option>
                  </select>
                </div>
              </div>
              <div className="form-group col">
                <div className="col-xs-6 form-group">
                  <label >Odds Ratio({"<"}5%) :</label>
                  <input type="number" max="5" min="0" 
                  name="task_name" value='0' onChange={this.handleQuantityChanged} className="form-control" />
                </div>
                <div className="col-xs-6 form-group">
                  <label >Staff :</label>
                  <select class="form-control">
                  <option>Staff 1</option>
                  <option>Staff 2</option>
                  <option>Staff 3</option>
                  <option>Staff 4</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-7 form-group">
                <span>
                  <button onClick={this.props.formSubmit} type="button" className="btn btn-success"><b>SUBMIT</b></button>
                  <button type="button" onClick={this.props.closeModal} className="btn btn-warning"><b>CANCLE</b></button>
                  </span>
              </div>
            </form>
          </div>
        </div>
    );
  }
}