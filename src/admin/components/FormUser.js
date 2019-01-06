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
      <div className="btn-toolbar col-xs-8 col-sm-8 col-md-8 col-lg-8 mb-8 mb-md-8">
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

                <div className="col-lg-4 form-group">
                  <button onClick={this.props.formSubmit} type="button" className="btn btn-default">Submit</button>
                  <button type="button" className="btn btn-default">Cancel</button>
                </div>
          </form>
        </div>
      </div>
    );
  }
}
