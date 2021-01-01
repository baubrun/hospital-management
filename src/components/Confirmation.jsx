import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import { outerTheme, ButtonStyles } from "./utils";

export class Confirmatin extends Component {
  continue = (evt) => {
    evt.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (evt) => {
    evt.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city },
    } = this.props;
    return (
      <ThemeProvider theme={outerTheme}>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar>Confirm User Data</AppBar>
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
            </List>
            <br />
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
              style={ButtonStyles.button}
            >
              Back
            </Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
              style={ButtonStyles.button}
            >
              Confirm & Continue
            </Button>
          </Dialog>
        </>
      </ThemeProvider>
    );
  }
}

export default Confirmatin;
