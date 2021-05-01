import React, { Component } from "react";

import { Form, FormGroup, Label, Input, ButtonToggle } from "reactstrap";

import "./CreateView.css";

//Use it in <Input> and show field validity
const formState = { Email: false, Username: false, Password: false, OK: false };
let Info;

class CreateView extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    Info = null;
  }

  //check and handle input validity in form instead of put it on ReduxStates
  onchangeHandler = (event, type) => {
    event.preventDefault();

    if (type == "Form" && !formState.OK) {
      this.props.call(event, Info);
      return true;
    } else {
      //Write for check and  set formState
      Info = { ...Info, [type]: event.target.value };
    }
  };

  render() {
    return (
      <Form
        className="form"
        method="POST"
        onSubmit={(event) => {
          this.onchangeHandler(event, "Form");
        }}
      >
        <p style={{ color: "whitesmoke", fontSize: "30px" }}>
          Create New Account
        </p>
        <FormGroup>
          <Label for="Email"></Label>

          <Input
            //**valid={this.props.Validity.Email}//
            name="Email"
            //** */ value=""Email from last Attempt!!!!!!!
            type="text"
            placeholder="E-Mail"
            onChange={(event) => {
              this.onchangeHandler(event, "Email", this.props);
            }}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="Username"></Label>

          <Input
            //**valid={this.props.Validity.UserName}
            name="UserName"
            type="text"
            placeholder="Username"
            onChange={(event) => this.onchangeHandler(event, "UserName")}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="Password"></Label>

          <Input
            //**valid={this.props.Validity.Password}
            type="password"
            name="Password"
            autoComplete="cc-csc"
            placeholder="Password"
            onChange={(event) => this.onchangeHandler(event, "Password")}
          ></Input>
        </FormGroup>
        <ButtonToggle disabled={formState.OK} color="success" type="submit">
          Submit
        </ButtonToggle>
      </Form>
    );
  }
}
export default CreateView;
