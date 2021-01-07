import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ListComponent from "../ListComponent"

import { makeStyles } from "@material-ui/core/styles";



import { listPatients, patientState } from "../../redux/patientSlice";


const useStyles = makeStyles((theme) => ({
  paper: {
    elevation: 15,
  },
  roomSelect: {
    minWidth: 250,
  },
  gridRow: {
    margin: "48px 0px",
  },
  card: {
    width: "60%",
    margin: "auto",
  },
}));

const defaultState = {
  first_name: "",
  last_name: "",
  care_level: null,
  admission: null,
  discharge: null,
  medicalHistory: [],
  userHasClearance: false,
};

const Patients = () => {
  const dispatch = useDispatch();
  const { patients } = useSelector(patientState);

  const classes = useStyles();
  const [values, setValues] = useState(defaultState);
  const [patientRecords, setPatientRecords] = useState([]);


  useEffect(() => {
    dispatch(listPatients())
  }, []);


  useEffect(() => {
    setPatientRecords(patients)
  }, [patients]);

if (values)

  return (
    <Card raised className={classes.card}>
      <CardContent>
        <Grid
          className={classes.gridRow}
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={2}>
            <ListComponent patients={patientRecords}/>
          </Grid>
          {/* <Grid item xs={5}>
            <TextField variant="contained" >{values.first_name}</TextField>
          </Grid> */}
          {/* <Grid item xs={5}>
            <TextField variant="contained" >{values.last_name}</TextField>
          </Grid> */}
        </Grid>

        {/* <Grid
          className={classes.gridRow}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={3}>
            <TextField
              className={classes.category}
              variant="h5"
              color="primary"
            >
              Care Level
            </TextField>
          </Grid>
          <Grid item xs={9}>
            <TextField variant="h5" value={values.care_level}></TextField>
          </Grid>
        </Grid> */}

        {/* <Grid
          className={classes.gridRow}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={9}>
            <TextField variant="h5">{values.admission}</TextField>
          </Grid>
        </Grid> */}
      </CardContent>
    </Card>
  );
};

export default Patients;
