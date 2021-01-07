import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Icon from "@material-ui/core/Icon";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import ListComponent from "../ListComponent";
import { fade, makeStyles } from "@material-ui/core/styles";
import { listPatients, patientState } from "../../redux/patientSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    backgroundColor: theme.palette.primary.main,
    marginTop: theme.spacing(4),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "#fff",
    padding: theme.spacing(1),
  },
  icon: { 
    color: "#fff", 
    fontSize: "24px" 
  },
  iconButton: {
    padding: 10,
    color: "#fff",
  },
  divider: {
    height: 28,
    margin: 4,
    borderBlockColor: "#fff",
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
  const classes = useStyles();
  const dispatch = useDispatch();
  const { patients } = useSelector(patientState);
  const [values, setValues] = useState(defaultState);
  const [patientRecords, setPatientRecords] = useState([]);
  const [foundPatient, setFoundPatient] = useState({});

  useEffect(() => {
    dispatch(listPatients());
  }, []);

  useEffect(() => {
    setPatientRecords(patients);
  }, [patients]);

  if (values)
    return (
      <>
        <Grid
          className={classes.gridRow}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Paper component="form" className={classes.root}>
              <Icon className={classes.icon}>
                <SearchIcon className={classes.icon} />
              </Icon>
              <Divider className={classes.divider} orientation="vertical" />
              <InputBase
                className={classes.input}
                placeholder="Search Patient"
              />
            </Paper>
          </Grid>
        </Grid>
      </>
    );
};

export default Patients;
