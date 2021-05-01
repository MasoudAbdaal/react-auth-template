import React, { Component } from "react";

import { Form, FormGroup, Label, Input, ButtonToggle } from "reactstrap";

import Classes from "./LoginView.module.css";

//Variables for determine validity of inputs and form
const formState = { Username: false, Password: false, OK: false };
let Info;

class LoginView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //clear all user input while rerender after request
    Info = null;
  }

  onchangeHandler = (event, type) => {
    event.preventDefault();
    // check validity feature have to add to this component
    if (type == "Form" && !formState.OK) {
      this.props.call(event, Info);
      return true;
    } else {
      Info = { ...Info, [type]: event.target.value };
    }
  };

  render() {
    return (
      <Form
        className={Classes.form}
        method="POST"
        onSubmit={(event) => {
          this.onchangeHandler(event, "Form");
        }}
      >
        <p style={{ color: "whitesmoke", fontSize: "30px" }}>Login</p>
        <FormGroup className={Classes.formGroup}>
          <Label for="Username"></Label>

          <Input
            className={Classes.formControl}
            //**valid={this.props.Validity.UserName}
            name="UserName"
            type="text"
            placeholder="Username"
            onChange={(event) => this.onchangeHandler(event, "UserName")}
          ></Input>
        </FormGroup>
        <FormGroup className={Classes.formGroup}>
          <Label for="Password"></Label>

          <Input
            className={Classes.formControl}
            //** valid={this.props.Validity.Password}
            type="password"
            name="Password"
            autoComplete="cc-csc"
            placeholder="Password"
            onChange={(event) => this.onchangeHandler(event, "Password")}
          ></Input>
        </FormGroup>
        <ButtonToggle disabled={formState.OK} color="success" type="submit">
          Login
        </ButtonToggle>
      </Form>
    );
  }
}
export default LoginView;
