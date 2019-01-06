import React, { Component } from 'react';

export default class FormUser extends Component {

  handleSelect = (ranges) => {
     this.setState({
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate
     });
    }

  render() {
    return (
      <div>
        <div className="Form row mb-7">
          <form >
              <div className="form-group col">
                <div className="col-xs-6 form-group">
                  <label >Name :</label>
                  <input name="task_name" value={this.props.itemUser.name} onChange={this.props.nameChanged} type="text" className="form-control"/>
                </div>
                <div className="col-xs-6 form-group">
                  <label >Username :</label>
                  <input name="task_name" value={this.props.itemUser.username} onChange={this.props.emailChanged} type="text" className="form-control" />
                </div>
              </div>
              <div className="form-group col">
                <div className="col-xs-6 form-group">
                  <label >Password :</label>
                  <input type="password" name="task_name" value={this.props.itemUser.password} onChange={this.props.passwordChanged} className="form-control" />
                </div>
                <div className="col-xs-6 form-group">
                  <label >Password Confirm :</label>
                  <input name="task_name" value={this.props.itemUser.passwordConfirm} onChange={this.props.passwordConfirmChanged} type="password" className="form-control" />
                </div>
              </div>
                <div className="col-lg-6 form-group">
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
