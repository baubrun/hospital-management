import React, { userEffect } from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { outerTheme, ButtonStyles } from "../utils";
import TitleBar from "../TitleBar";


const useStyles = makeStyles((theme) => ({
  paper: {
    elevation: 15,
    padding: theme.spacing(3)
  }
}));


const PatientForm = (props) => {
  const classes = useStyles()
  const {
    values: { firstName, lastName, email },
  } = props;

  return (
    <ThemeProvider theme={outerTheme}>
      <>
        <TitleBar text="Patient Form" />
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Paper className={classes.paper}>
              <TextField
                label="First Name"
                defaultValue={firstName}
                name="firstName"
                onChange={(evt) => props.handleChange(evt)}
                placeholder="First Name"
                margin="normal"
                fullWidth
              />
              <TextField
                label="Last Name"
                defaultValue={lastName}
                name="lastname"
                onChange={(evt) => props.handleChange(evt)}
                placeholder="Last Name"
                margin="normal"
                fullWidth
              />
              <TextField
                label="Email"
                defaultValue={email}
                name=""
                onChange={(evt) => props.handleChange(evt)}
                placeholder="Email"
                margin="normal"
                fullWidth
              />
                <Button
                  color="primary"
                  onClick={props.nextStep}
                  style={ButtonStyles.button}
                  variant="contained"
                >
                  Continue
                </Button>
            </Paper>
          </Grid>
        </Grid>
      </>
    </ThemeProvider>
  );
};

export default PatientForm;