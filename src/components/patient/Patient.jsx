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
import { patientsState } from "../../redux/patientSlice";

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
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={4}>
          <Typography>Patient</Typography>
        </Grid>
        <Grid item sx={4}>
          <Typography>{props.patient.first_name}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>{props.patient.last_name}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Patient;
