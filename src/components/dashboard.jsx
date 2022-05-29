import React, { Component } from "react";
import SearchBox from "./searchBox";
import { Link } from "react-router-dom";
import { getwriters } from "../services/writerService";

class Dashboard extends Component {
  state = {
    writers: [],
    searchQuery: "",
  };

  async componentDidMount() {
    const { user } = this.props;
    const { searchQuery } = this.state;
    const { data: writers } = await getwriters(user.UserId, searchQuery);
    this.setState({ writers });
  }

  fetchSearchResults = async (query) => {
    const { user } = this.props;
    const { data: writers } = await getwriters(user.UserId, query);
    this.setState({ writers });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query }, () => {
      this.fetchSearchResults(query);
    });
  };

  render() {
    const { searchQuery, writers } = this.state;

    return (
      <div className="row">
        <h1>Dashboard</h1>
        <div>
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Firstname</th>
                <th scope="col">User Id</th>
              </tr>
            </thead>
            <tbody>
              {writers.map((writer) => (
                <tr key={writer.userId}>
                  <td>
                    <Link to={`/dashboard/${writer.userId}`}>
                      {writer.firstName} {writer.lastName}
                    </Link>
                  </td>
                  <td>{writer.userId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Dashboard;
