import React, { Component } from "react";
import { getAllUsers } from "../services/adminServices";

class Users extends Component {
  state = {
    users: [],
    checked: false,
  };

  async componentDidMount() {
    const { data: users } = await getAllUsers();
    this.setState({ users });
  }

  render() {
    const { users } = this.state;

    return (
      <div className="row">
        <h1>Users</h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">User</th>
                <th scope="col">Is Editor</th>
                <th scope="col">Is Banned</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.userId}>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={user.isEditor === "TRUE" ? true : false}
                      onChange={this.handleCheck}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      defaultChecked={user.isBanned === "TRUE" ? true : false}
                      onChange={this.handleCheck}
                    />
                  </td>
                  <td>
                    <button className="btn btn-primary">Save</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Users;
