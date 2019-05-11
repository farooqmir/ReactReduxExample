import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialStore = {
  items: [],
  item: {}
};

export default function(state = initialStore, action) {
  console.log("POST REDUCER " + action.type);
  console.log(action);
  console.log(state);
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
