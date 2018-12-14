import React, {Component, Fragment} from  'react';
import RegisterForm from './RegisterForm';
import Axios from 'axios';

class RegisterFormContainer extends Component {
  state = {
    name: '',
    username: '',
    passWord: '',
    passWordConfirm: ''
  }

  onChangeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  onChangeEmail = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit = () => {
    Axios.post('http://5c0fac75fc4df20013083a91.mockapi.io/users', {
      name: this.state.name,
      username: this.state.username,
    }).then(res => console.log(res))
    .catch(error => console.log(error));
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
        />
      </Fragment>
    )
  }
}

export default RegisterFormContainer;
