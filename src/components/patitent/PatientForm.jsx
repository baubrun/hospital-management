import React, { userEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import {outerTheme, ButtonStyles} from "../utils";



const PatientForm = (props) => {
  // continue = (evt) => {
  //   evt.preventDefault();
  //   this.props.nextStep();
  // };

  // back = (evt) => {
  //   evt.preventDefault();
  //   this.props.prevStep();
  // };
  

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])


    const {
        values: { firstName, lastName, email },
      } = props;
  
    return (
      <ThemeProvider theme={outerTheme}>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar>Patient Form</AppBar>
            <TextField
              label="First Name"
              defaultValue={firstName}
              name="firstName"
              onChange={(evt) =>props.handleChange(evt)}
              placeholder="First Name"
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              label="Last Name"
              defaultValue={lastName}
              name="lastname"
              onChange={(evt) =>props.handleChange(evt)}
              placeholder="Last Name"
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              label="Email"
              defaultValue={email}
              name=""
              onChange={(evt) =>props.handleChange(evt)}
              placeholder="Email"
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



export default PatientForm;
