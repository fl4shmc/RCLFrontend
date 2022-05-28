import React, { Component } from "react";
import auth from "../services/authService";

class LoginForm extends Component {
  state = {
    account: { userid: "", password: "" },
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  };

  doSubmit = async () => {
    try {
      const { account } = this.state;
      await auth.login(account.userid, account.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      console.log("Error occured while attempting http request", ex);
    }
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="userid">Email</label>
            <input
              value={account.userid}
              type="text"
              name="userid"
              className="form-control"
              id="userid"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
