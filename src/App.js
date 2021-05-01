import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from "./store/Actions/actionTypes";

import Aux from "./hoc/ReactAux";

import Create from "./containers/Authentication/Create";
import Login from "./containers/Authentication/Login";

import CreateView from "./components/User/CreateView/CreateView";
import LoginView from "./components/User/LoginView/LoginView";
import MySpinner from "./components/Spinners/Spinner";
import ModalExample from "./components/Modal/Modal";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.defaultView = this.defaultView.bind(this);
    this.bakeInfo = this.bakeInfo.bind(this);
  }

  bakeInfo = () => {
    const response = {};
    switch (this.props.user.StatusFlag) {
      //Check for status of our request and replay response
      case "succeed":
        Object.assign(response, { Message: "✅ Operation was successfull." });
        break;

      case "error":
        Object.assign(response, { Message: "✘ Oh... Something went wrong." });
        break;
    }

    return response;
  };

  defaultView = () => {
    return (
      <div>
        {String(this.props.user.StatusFlag).match("error|succeed") ? (
          <ModalExample
            passedInfo={{
              //Pass Status for show determine which button should show
              Status: this.props.user.StatusFlag,
              //Modal element title
              Title: this.bakeInfo(),
              //**Message which have to came from you API responce
              Message: null,
              //**Specify action for Modal element
              ButtonAction: null,
            }}
          />
        ) : (
          false
        )}
        <CreateView
          call={(event, input) =>
            //Function passed as a prop for change STATUS_FLAG in procedure
            this.props.createUser(event, input, this.props.statusSet)
          }
        />
        <LoginView
          call={(event, input) =>
            //Function passed as a prop for changes STATUS_FLAG in procedure
            this.props.loginUser(event, input, this.props.statusSet)
          }
        />
        ;
      </div>
    );
  };
  render() {
    return (
      <Aux>
        <div>
          {/*Conditional rrender for loading Spinner or our default page */}
          {this.props.user.StatusFlag == "loading" ? (
            <div>
              <MySpinner />
            </div>
          ) : (
            this.defaultView()
          )}
        </div>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.User, post: state.Post };
};

const mapDispatchToProps = (dispatch) => {
  return {
    statusSet: (input) => {
      //input came from child componenct while calling
      dispatch({ type: actionType.STATUS_FLAG, value: input });
    },

    createUser: (event, input, statusSet) => {
      dispatch({
        type: actionType.CREATE_USER,
        //Concat LoadingState  to object
        value: { ...input, StatusFlag: "called" },
      });

      //Function which call API for CREATE users
      //**Still IDK is this OK we call a function in our dispacher or not!?
      Create(event, input, statusSet);
    },

    loginUser: (event, input, statusSet) => {
      dispatch({
        type: actionType.LOGIN_USER,
        //Concat LoadingState  to object
        value: { ...input, StatusFlag: "called" },
      });
      //Function which call API for LOGIN users
      //**Still IDK is this OK we call a function in our dispacher or not!?
      Login(event, input, statusSet);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
