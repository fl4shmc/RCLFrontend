import React, { Component } from "react";
import * as userService from "../services/userService";
import auth from "../services/authService";

class RegistrationForm extends Component {
  state = {
    data: {
      firstname: "",
      lastname: "",
      email: "",
      userid: "",
      password: "",
    },
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  };

  doSubmit = async () => {
    try {
      await userService.register(this.state.data);
      window.location = "/login";
    } catch (ex) {
      console.log("Error occured while attempting http request", ex);
    }
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">Firstname</label>
            <input
              value={data.firstname}
              type="text"
              name="firstname"
              className="form-control"
              id="firstname"
              placeholder="Enter firstname"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Lastname</label>
            <input
              value={data.lastname}
              type="text"
              name="lastname"
              className="form-control"
              id="lastname"
              placeholder="Enter lastname"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={data.email}
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userid">User Id</label>
            <input
              value={data.userid}
              type="text"
              name="userid"
              className="form-control"
              id="userid"
              placeholder="Enter user id"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={data.password}
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
