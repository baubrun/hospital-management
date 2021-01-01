import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import {outerTheme, ButtonStyles} from "./utils";



export class PatientForm extends Component {
  continue = (evt) => {
    evt.preventDefault();
    this.props.nextStep();
  };

  back = (evt) => {
    evt.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
        values: { firstName, lastName, email },
      } = this.props;
  
    return (
      <ThemeProvider theme={outerTheme}>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar>Patient Form</AppBar>
            <TextField
              label="First Name"
              defaultValue={firstName}
              onChange={this.props.handleChange("firstName")}
              placeholder="First Name"
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={this.props.handleChange("lastName")}
              defaultValue={lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Email"
              label="Email"
              onChange={this.props.handleChange("email")}
              defaultValue={email}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="primary"
              onClick={this.continue}
              style={ButtonStyles.button}
              variant="contained"
            >
              Continue
            </Button>
          </Dialog>
        </>
      </ThemeProvider>
    );
  }
}
export default PatientForm;
