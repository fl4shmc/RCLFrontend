import React, { Component } from "react";
import { getwriterposts } from "../services/writerService";

class WriterPosts extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const userid = this.props.match.params.userid;
    const { data: posts } = await getwriterposts(userid);
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
    const userid = this.props.match.params.userid;

    const commonStyles = {
      marginTop: "25px",
    };

    return (
      <div className="row">
        <h1>Writer Details - {userid}</h1>
        {posts.map((post) => (
          <div style={commonStyles} key={post.postId}>
            <h5>{post.title}</h5>
            <p>{post.poste}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default WriterPosts;
