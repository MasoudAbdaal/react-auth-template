import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import Posts_Reducer from "./store/Reducers/PostsReducer";
import User_Reducer from "./store/Reducers/UserReducer";

//Special package for connect to Back4App
import Parse from "parse";

import Auth from "./App";

import "bootstrap/dist/css/bootstrap.css";

//combine reducers in a single store
const rootReducer = combineReducers({
  User: User_Reducer,
  Post: Posts_Reducer,
});

const store = createStore(
  rootReducer,
  //Configure redux-devtool for development environment only
  process.env.NODE_ENV == "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
);

Parse.serverURL = "https://mysample.b4a.io";
Parse.initialize(
  "", //Back4App AppID
  "", //Back4App JS Key
  "" //Back4App  Master key
);

ReactDOM.render(
  <Provider store={store}>
    <Auth />
  </Provider>,
  document.getElementById("root")
);
