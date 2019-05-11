import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  console.log("FETCH POSTS");
  console.log(dispatch);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(posts => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      });
      console.log("posts");
      console.log(posts);
      console.log("postse");
    });
};

export const newPost = post => dispatch => {
  console.log("NEW POST");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(postData => {
      dispatch({
        type: NEW_POST,
        payload: postData
      });
      console.log("POST ACTIONS");
      console.log(postData);
      alert("Form Submitted Succesfully");
    });
};
