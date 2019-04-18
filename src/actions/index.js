import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

const _fetchUser = _.memoize(async (user_id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${user_id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});

export const fetchUser = user_id => dispatch => {
  _fetchUser(user_id, dispatch);
};
