import React from "react";


import { ThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import TitleBar from "../TitleBar";



import { outerTheme, ButtonStyles } from "../utils";


const Confirmation = (props) => {

    const {
      values: { firstName, lastName, email, occupation, city },
    } = this.props;


    return (
        <>
        <TitleBar text="Confirm" />
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
              onClick={props.prevStep}
              style={ButtonStyles.button}
            >
              Back
            </Button>

            <Button
              color="primary"
              variant="contained"
              style={ButtonStyles.button}
              type="submit"
            >
              Confirm & Continue
            </Button>
        </>
    );
  }

export default Confirmation;
