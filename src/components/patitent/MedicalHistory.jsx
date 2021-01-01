import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";


import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import { outerTheme, ButtonStyles } from "../utils";




const list = "Lorem ipsum dolor sit amet consectetur adipiscing elit Nullam fringilla mi vestibulum sem scelerisque at consectetur nisi auctor".split(
  " "
);

const labelPlacement = "end";

class MedicalHistory extends Component {
  continue = (evt) => {
    evt.preventDefault();
    this.props.nextStep();
  };

  back = (evt) => {
    evt.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <ThemeProvider theme={outerTheme}>
        <>
          <Dialog open fullWidth maxWidth="sm">
            <AppBar>Medical History</AppBar>
            {list.map((word, idx) => {
              return (
                <FormControl component="fieldset" key={idx}>
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value={word}
                      control={
                        <Checkbox
                          color="primary"
                          onChange={this.props.handleCheckbox}
                          name={word}
                        />
                      }
                      label={word}
                      labelPlacement={labelPlacement}
                    />
                  </FormGroup>
                </FormControl>
              );
            })}

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
              Continue
            </Button>
          </Dialog>
        </>
      </ThemeProvider>
    );
  }
}
export default MedicalHistory;
