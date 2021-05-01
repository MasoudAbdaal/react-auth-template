import * as actionTypes from "../Actions/actionTypes";
import updateState from "../utility";

const InitialState = {
  //For set to alert and take some info about which part has error
  Validity: {
    Email: true,
    UserName: true,
    Password: true,
    SessionToken: true,
    Account: true,
  },

  Email: "",
  Username: "",
  Password: "",
  IsLoggedIn: "",
  SessionToken: "",
  ObjectId: "",
  StatusFlag: "",
  ServerResponse: null,
};

const User_Reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER: {
      //What's diffrent between ???
      //return updateState(state, [action.value]);
      return updateState(state, ...[action.value]);
    }

    case actionTypes.STATUS_FLAG: {
      return updateState(state, { StatusFlag: action.value });
    }
  }
  return state;
};

export default User_Reducer;
