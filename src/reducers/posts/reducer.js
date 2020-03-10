import axios from "axios";
export const GET_POST = "getPosts";

export const fetchPosts = () => async dispatch => {
  await axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then(response => {
      dispatch({
        type: GET_POST,
        payload: response
      });
    })
    .catch(err => err);
};

const ActionHandler = {
  [GET_POST]: function(payload) {
    let nextState = Object.assign({}, payload);
    return payload;
  }
};

export default (state = [], action) => {
  const { type, payload } = action;
  const handler = ActionHandler[type];
  return handler ? handler(payload) : state;
};
