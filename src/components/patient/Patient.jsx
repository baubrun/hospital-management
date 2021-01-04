import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { makeStyles } from "@material-ui/core/styles";
import TitleBar from "../TitleBar";
import {patientsState} from "../../redux/patientSlice"

const useStyles = makeStyles((theme) => ({
  paper: {
    elevation: 15,
    padding: theme.spacing(3),
  },

}));


const Patient = (props) => {
  const classes = useStyles();



    return (
        <>
               <TitleBar text="Room Occupancy" />
      <Paper className={classes.paper} elevation={15}>
        <Grid container direction="row" justify="center" alignItems="center">
          {props.patients.map((r, idx) => {
            return (
              <Grid key={idx} item xs={2}>
                  <List>
                    <ListItem>
                      <ListItemText>

                      </ListItemText>
                    </ListItem>
                  </List>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
   
        </>
    )
}

export default Patient
