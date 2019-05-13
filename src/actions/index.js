import _ from 'lodash';
import jsonPlaceHolder from "../apis/josnPlaceHolder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");

  //console.log({ response });
  dispatch({type: "FETCH_POST", payload: response.data});
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  //console.log({ response });
  dispatch({type: "FETCH_USER", payload: response.data});
};
