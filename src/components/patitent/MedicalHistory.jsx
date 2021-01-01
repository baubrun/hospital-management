import React, { Component } from "react";
import { Button } from "@material-ui/core";

import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { ButtonStyles } from "../utils";
import Paper from "@material-ui/core/Paper";

import TitleBar from "../TitleBar";

const list = "Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam fringilla mi vestibulum sem scelerisque at consectetur nisi auctor".split(
  " "
);

const labelPlacement = "end";


const useStyles = makeStyles((theme) => ({
  paper:{
    padding: theme.spacing(4)
  }

}));



const MedicalHistory = (props) => {
  const classes = useStyles()
  return (
    <>
      <TitleBar text="Medidal History" />

      <Grid container direction="column" justify="center" alignItems="center">
        {/* <Grid item> */}
          <Paper className={classes.paper}>
            {list.map((word, idx) => {
              return (
                <Grid item>
                <FormControl component="fieldset" key={idx}>
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value={word}
                      control={
                        <Checkbox
                          color="primary"
                          onChange={props.handleCheckbox}
                          name={word}
                        />
                      }
                      label={word}
                      labelPlacement={labelPlacement}
                    />
                  </FormGroup>
                </FormControl>
                </Grid>
              );
            })}

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
              onClick={props.nextStep}
              style={ButtonStyles.button}
            >
              Continue
            </Button>
            </Paper>

          {/* </Grid> */}
        </Grid>
    </>
  );
};

export default MedicalHistory;
