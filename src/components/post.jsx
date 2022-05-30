import React, { Component } from "react";
import * as postService from "../services/postService";
import auth from "../services/authService";

class Post extends Component {
  state = {
    data: {
      title: "",
      post: "",
      userid: "",
    },
    wordCount: 0,
  };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        userid: user.UserId,
      },
    }));
  }

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    if (input.name === "post") {
      //experimental
      if (this.state.wordCount > 500) {
        this.setState({ data: this.state.data });
      } else {
        var count = input.value.split(" ").length;
        this.setState({
          wordCount: count,
        });
      }
    }
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  };

  doSubmit = async () => {
    try {
      await postService.post(this.state.data);
    } catch (ex) {
      console.log("Error occured while attempting http request", ex);
    }
  };

  render() {
    const { data } = this.state;

    const commonStyles = {
      marginTop: "10px",
    };

    return (
      <div>
        <h1>Post</h1>
        <form onSubmit={this.handleSubmit} className=".col-md">
          <div className="form-group">
            <label htmlFor="title" style={commonStyles}>
              Title
            </label>
            <input
              value={data.title}
              type="text"
              name="title"
              className="form-control"
              id="title"
              placeholder="Enter title"
              onChange={this.handleChange}
              style={commonStyles}
            />
          </div>
          <div className="form-group">
            <label htmlFor="post" style={commonStyles}>
              Post
            </label>
            <textarea
              value={data.post}
              className="form-control"
              id="post"
              name="post"
              rows="6"
              onChange={this.handleChange}
              style={commonStyles}
            ></textarea>
          </div>
          <button className="btn btn-primary" style={commonStyles}>
            Post
          </button>
        </form>
      </div>
    );
  }
}

export default Post;
