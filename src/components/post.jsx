import React, { Component } from "react";

class Post extends Component {
  state = {
    data: {
      title: "",
      post: "",
    },
    wordCount: 0,
  };

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

        console.log("count", this.state.wordCount);
      }
    }
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.doSubmit();
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              value={data.title}
              type="text"
              name="title"
              className="form-control"
              id="title"
              placeholder="Enter title"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="post">Post</label>
            <textarea
              value={data.post}
              className="form-control"
              id="post"
              name="post"
              rows="6"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default Post;
