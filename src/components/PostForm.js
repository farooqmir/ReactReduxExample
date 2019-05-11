import React, { Component } from "react";
import { connect } from "react-redux";
import { newPost } from "../actions/postsActions";
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };
  }
  componentWillMount() {}

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.newPost(this.state);
  };

  inputUpdate = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  renderForm() {
    return (
      <fieldset>
        {this.props.item && this.props.item.title && (
          <h1>{this.props.item.title} post is added successfully.</h1>
        )}
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <label>Title:</label>
          <input
            name="title"
            onChange={this.inputUpdate.bind(this)}
            type="text"
            value={this.state.title}
          />
          <br />
          <label>Body</label>
          <textarea
            onChange={this.inputUpdate.bind(this)}
            name="body"
            value={this.state.body}
          />
          <br />
          <input type="submit" value="Submit The Form!" />
        </form>
      </fieldset>
    );
  }

  render() {
    return <div>{this.renderForm()}</div>;
  }
}

const mapStateToProps = state => ({
  item: state.posts.item
});
export default connect(
  mapStateToProps,
  { newPost }
)(PostForm);
