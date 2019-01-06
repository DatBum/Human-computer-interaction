import React, { Component, Fragment } from 'react';
import ProductWarehouseItem from './ProductWarehouseItem';
import ProductIdItem from './ProductIdItem';

export default class Form extends Component {

  state = {
    type: "Nhập", 
    quantity: "",
    warehouseID: "1",
    productId: "1",
    typeBuy: "Nhập hàng",
    personCreated: "",
    description: "",
    productName: ""
  }

  componentWillMount(){
    this.props.actFetchInOutActionRequest();
  }

  onClickInOut  = (e) =>{
    const { inout } = this.props;
    var tg = null;
    inout.map((InOuts, index) => { 
      if (InOuts.findIndex(InOut => InOut.warehouseID.toString() === e.target.value) !== -1)
        tg = index;
    })
    this.setState({
      warehouseID: e.target.value,
      productId: inout[tg][0].productId
    })  
  }

  onClickProductId  = (e) =>{
    this.setState({
      productId: e.target.value
    })
  }

  handleNameChanged = (e) => {
    this.setState({
      personCreated: e.target.value
    })
  }

  handleTypeChanged = (e) => {
    if (e.target.value === "Nhập")
      this.setState({
        type: e.target.value,
        typeBuy: "Nhập Hàng"
      })
    if (e.target.value === "Xuất")
      this.setState({
        type: e.target.value,
        typeBuy: "Bán theo đơn"
      })
  }

  handleTypeBuyChanged = (e) => {
    this.setState({
      typeBuy: e.target.value
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

  handleProductNameChanged = (e) => {
    this.setState({
      productName: e.target.value
    })
  }

  formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  formSubmit = () => {
    const { type, typeBuy, createdAt, description, quantity , warehouseID, productId, personCreated, productName } = this.state;
    // console.log(createdAt);
    // console.log(type);
    // console.log(typeBuy);
    // console.log(quantity);
    // console.log(warehouseID);
    // console.log(productId);
    // console.log(personCreated);
    const { inout } = this.props;
    if(type !== '' && quantity !== '' && warehouseID !== '' && productId !== '' && typeBuy !== '' && personCreated !== '' && description !== ''){
      const item = {
        type: type,
        createdAt: this.formatDate(new Date().toDateString()),
        quantity: quantity,
        warehouseID: warehouseID,
        productId: productId,
        typeBuy: typeBuy,
        personCreated: personCreated,
        description: description
      }
      if (typeBuy === "Nhập hàng" || typeBuy === "Bán theo toa" || typeBuy === "Bán theo đơn"){
        var itemInOut = null;
        inout.map((InOuts) => {
          var check = InOuts.filter(InOut => InOut.productId.toString() === productId && InOut.warehouseID.toString() === warehouseID)
          if (check.length > 0)
            itemInOut = check[0];
        });
        if (typeBuy === "Nhập hàng") 
          itemInOut.currentQuantity += +quantity;
        if (typeBuy === "Bán theo toa" || typeBuy === "Bán theo đơn"){
          if (quantity > itemInOut.currentQuantity)
            alert("Quantity wrong");
          else
            itemInOut.currentQuantity -= +quantity;
        }  
        
        this.props.addItem(this.props.sectionName,item);
        this.props.updateInOut(itemInOut);
      }
      if (typeBuy === "Nhập hàng mới"){
        if (productName === '')
          alert("Product name blank");
        else
        {
          const itemInOut = {
            warehouseID: warehouseID,
            productId: productId,
            name: productName,
            currentQuantity: quantity
          }
          this.props.addItem(this.props.sectionName,item);
          this.props.addInOut(itemInOut);
        }
      }
    }
    else alert("Something wrong");
  }

  render() {
    const { type, typeBuy } = this.state;
    const { inout } = this.props;
    console.log(inout);   
    var checkware = [];
    inout.map((InOuts) => {
      InOuts.map((InOut) => {
        if (!checkware.includes(InOut.warehouseID)){
          checkware.push(InOut.warehouseID);
        }
      })    
    })
    checkware.sort();
    console.log(checkware);
    const warehouseElems = checkware.map((ware, index) => {
      return <ProductWarehouseItem warehouseID={ware} key={index} />
    })
    const productElems = inout.map((InOuts) => {
      return(
        InOuts.map((InOut, index) => {
          if (InOut.warehouseID === this.state.warehouseID){
            return <ProductIdItem productId={InOut.productId} productName={InOut.name} key={index} />
          }
        })
      );
    })
    return (
      <div className="btn-toolbar">
        <div className="Form row mb-7">
          <form onSubmit={this.formSubmit}>
              <div className="form-group col">
                <div className="col-xs-6 form-group">
                  <label >Person Create Name :</label>
                  <input name="task_name" onChange={this.handleNameChanged} type="text" className="form-control"/>
                </div>
                <div className="col-xs-6 form-group">
                  <label >Quantity :</label>
                  <input name="task_name" onChange={this.handleQuantityChanged} type="number" className="form-control" />
                </div>
              </div>
              <div className="form-group col">
                <div className="col-xs-3 form-group">
                  <label >Types :</label>
                  <br />
                  <select id="menu1" onChange={this.handleTypeChanged} value={type} className="form-control">
                    <option value="Nhập">Nhập</option>
                    <option value="Xuất">Xuất</option>
                  </select>
                </div>
                <div className="col-xs-3 form-group">
                  <label >Types of Action :</label>
                  <br />
                  <select id="menu2" onChange={this.handleTypeBuyChanged} value={typeBuy} className="form-control">
                    {this.showDropType(type)}
                  </select>
                </div>
                {this.showBuyType(typeBuy,warehouseElems,productElems)}   
              </div>
              <div className="form-group col">
                <div className="col-xs-12 form-group">
                  <label >Description :</label>
                  <textarea name="task_name" onChange={this.handleDescChanged} type="password" className="form-control" />
                </div>
              </div>
              <div className="col-lg-4 form-group">
                <button onClick={this.formSubmit} type="button" className="btn btn-success">Submit</button>
                <button type="button" onClick={this.props.closeModal} className="btn btn-warning">Cancel</button>
              </div>
          </form>
        </div>
      </div>
    );
  }

  showDropType = (type) =>{
    var result = null;
    if (type === "Nhập") {
      result = (
        <Fragment>
          <option value="Nhập hàng">Nhập hàng</option>
          <option value="Nhập hàng mới">Nhập hàng mới</option>
        </Fragment> 
      );   
    } 
    else {
      result = (
        <Fragment>
          <option value="Bán theo đơn">Bán theo đơn</option>
          <option value="Bán theo toa">Bán theo toa</option>
        </Fragment> 
      );      
    }
    return result;
  }

  showBuyType = (typeBuy,warehouseElems,productElems) => {
    var result = null;
    if (typeBuy === "Nhập hàng mới"){
      result = (
        <Fragment>
          <div className="col-xs-6 form-group">
            <label >Product Name :</label>
            <input name="task_name" onChange={this.handleProductNameChanged} type="text" className="form-control"/>
          </div>
        </Fragment>  
      );
    }
    else {
      result = (
        <Fragment>
          <div className="col-xs-3 form-group">
            <label >Ware House :</label>
            <br />
            <select id="menu3" onChange={this.onClickInOut} value={this.state.warehouseID} className="form-control">
              {warehouseElems}
            </select>
          </div>
          <div className="col-xs-3 form-group">
            <label >Product :</label>
            <br />
            <select id="menu4" onChange={this.onClickProductId} value={this.state.productId} className="form-control">
              {productElems}
            </select>
          </div>                                
        </Fragment>
      );
    }
    return result;
  }

}
