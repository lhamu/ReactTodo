import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="login">
        <form className="form-horizontal" onSubmit={this.login}>
          <div className="form-group">
            <label>User Name: </label>
            <div className="col-sm-10">
              <input
                name="username"
                type="text"
                className="form-control"
                id="inputUsername"
                value={this.state.userName}
                onChange={this.handleInputName}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Password: </label>
            <div className="col-sm-10">
              <input
                name="password"
                type="text"
                className="form-control"
                id="inputPassword"
                value={this.state.password}
                onChange={this.handleInputPassword}
                placeholder="Password"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
