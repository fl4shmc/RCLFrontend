import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./components/dashboard";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registrationForm";
import Post from "./components/post";
import Users from "./components/users";
import Stats from "./components/stats";
import NavBar from "./components/navBar";
import Logout from "./components/logout";
import WriterPosts from "./components/writerPosts";
import NotFound from "./components/notFound";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
    // console.log(user);
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
            <ProtectedRoute path="/dashboard/:userid" component={WriterPosts} />
            <Route
              path="/dashboard"
              exact
              render={(props) => (
                <Dashboard {...props} user={this.state.user} />
              )}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/dashboard" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
