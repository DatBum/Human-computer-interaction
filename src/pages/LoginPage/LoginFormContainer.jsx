import React, {Component} from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import {setCurrentUser} from '../../actions/LoginFormActions';
import axios from 'axios';

const mapDispatchToProps = (dispatch) => {
  return({
    setCurrentUser: (loggedIn, user) => dispatch(setCurrentUser(loggedIn, user))
  })
}

class LoginFormContainer extends Component {

  state = {
    email: "",
    password: "",
    role: "User"
  }


  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit = () => {
    axios.get("http://5c0fac75fc4df20013083a91.mockapi.io/users/1")
      .then(res => this.props.setCurrentUser(true, res.data))
      .catch(error => console.log(error));

    //Get user
    // axios.get("http://5c0fac75fc4df20013083a91.mockapi.io/users/2")
    //   .then(res => this.props.setCurrentUser(true, res.data))
    //   .catch(error => console.log(error));
  }
  
  render() {
    return(
      <div
          style={{ borderLeft: "1px dashed #c1bebe" }}
          className="col-sm-6"
      >
        <h2>Returning Customer</h2>
        <p>I am a returning customer</p>
        <LoginForm email={this.state.email} password={this.state.password}
          passwordChanged={this.onChangePassword} emailChanged={this.onChangeEmail}
          formSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(LoginFormContainer);
