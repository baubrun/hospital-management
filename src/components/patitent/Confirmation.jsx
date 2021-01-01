import React from "react";


import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import TitleBar from "../TitleBar";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonStyles } from "../utils";

const useStyles = makeStyles((theme) => ({
  paper: {
    elevation: 15,
    padding: theme.spacing(3)
  }
}));




const Confirmation = (props) => {
  const classes = useStyles()

    const {
      values: { firstName, lastName, email, occupation, city },
    } = props;


    return (
        <Paper className={classes.paper}>
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
        </Paper>
    );
  }

export default Confirmation;
