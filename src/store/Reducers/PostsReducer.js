/* eslint-disable no-unused-vars */

//reducer for user posts and it's management
import * as actionTypes from "../Actions/actionTypes";

const InitialState = {
  Email: "null",
  Username: null,
  IsLoggedIn: null,
  SessionToken: null,
  ObjectId: null,
};

const Posts_Reducer = (state = InitialState, action) => {
  return state;
};

export default Posts_Reducer;
