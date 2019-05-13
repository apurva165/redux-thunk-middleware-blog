import jsonPlaceHolder from "../apis/josnPlaceHolder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");

  //console.log({ response });
  dispatch({
    type: "FETCH_POST",
    payload: response.data
  });
};

export const fetchUser = userId => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${userId}`);

  //console.log({ response });
  dispatch({
    type: "FETCH_USERS",
    payload: response.data
  });
};
