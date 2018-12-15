import React, {Component, Fragment} from  'react';
import RegisterForm from './RegisterForm';
import Axios from 'axios';

class RegisterFormContainer extends Component {
  state = {
    name: '',
    username: '',
    password: '',
    passwordConfirm: '',
    role: 'User'
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onChangePassword = event => {
    this.setState({
      passWord: event.target.value
    })
  }

  onChangePasswordWordConfirm = event => {
    this.setState({
      passWord: event.target.value
    })
  }

  onChangeEmail = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = () => {
    const { name, username, role , password, passwordConfirm } = this.state
    if(name != '' && username != '' && role != '') {
      Axios.post('http://5c0fac75fc4df20013083a91.mockapi.io/users', {
        name: this.state.name,
        username: this.state.username,
        role: this.state.role
      }).then(res => console.log(res))
      .catch(error => console.log(error));
    }
  }

  render() {
    return(
      <Fragment>
        <h1>My Account Information</h1>
        <p>
            {" "}
            <small>
                <strong className="define_note" />
            </small>
            If you already have an account with us, please login at the
            <a href="/login"> login page</a>.
        </p>
        <RegisterForm formSubmit={this.handleSubmit}
          nameChanged={this.onChangeName}
          emailChanged={this.onChangeEmail}
          passwordChanged={this.onChangePassword}
          passwordConfirmChanged={this.onChangePasswordWordConfirm}
        />
      </Fragment>
    )
  }
}

export default RegisterFormContainer;
