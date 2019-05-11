import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postsActions";
class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return (
      this.props &&
      this.props.posts.map(post => {
        return (
          <li key={post.id}>
            <a href="#">{post.title}</a>
            <p>{post.body}</p>
          </li>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <ul>{this.renderPosts()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
