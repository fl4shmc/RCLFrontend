import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registrationForm";
import Post from "./components/post";
import Users from "./components/users";
import Stats from "./components/stats";
import NavBar from "./components/navBar";
import Logout from "./components/logout";
import auth from "./services/authService";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
    console.log(user);
  }

  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/logout" component={Logout} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegistrationForm} />
            <Route path="/post" component={Post} />
            <Route path="/users" component={Users} />
            <Route path="/stats" component={Stats} />
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
