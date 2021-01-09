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
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import SendIcon from "@material-ui/icons/Send";

import TitleBar from "../TitleBar";
import ListComponent from "../ListComponent";
import { fade, makeStyles } from "@material-ui/core/styles";

import { readPatient, patientState } from "../../redux/patientSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    backgroundColor: "rgb(178, 86, 194, 0.7)",
    marginTop: theme.spacing(4),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "#fff",
    padding: theme.spacing(1),
    fontSize: "24px",
  },
  icon: {
    color: "#fff",
    fontSize: "24px",
  },
  iconButton: {
    padding: 10,
    color: "#fff",
  },
  divider: {
    height: 28,
    margin: 4,
    color: "#fff",
  },
  send: {
    color: theme.palette.secondary.main,
  },
}));

const defaultState = {
  admission: null,
  care_level: null,
  discharge: null,
  full_name: "",
  first_name: "",
  last_name: "",
  medicalHistory: [],
  occupied: false,
  room_number: null,
};

const Patients = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { patient } = useSelector(patientState);
  const [foundPatient, setFoundPatient] = useState({});
  const [values, setValues] = useState(defaultState);

  useEffect(() => {
    setFoundPatient(patient);
  }, [patient]);

  const handleSearch = (evt) => {
    evt.preventDefault();
    const [last_name, first_name] = values.full_name.split(",");
    dispatch(
      readPatient({
        last_name: last_name.trim(),
        first_name: first_name.trim(),
      })
    );
  };

  const handleChange = (evt) => {
    const { value } = evt.target;
    setValues({ ...values, full_name: value });
  };

  if (values)
    return (
      <>
        <TitleBar text="search patient" />
        <Grid
          className={classes.gridRow}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Paper
              component="form"
              className={classes.root}
              onSubmit={handleSearch}
            >
              <Icon className={classes.icon}>
                <SearchIcon className={classes.icon} />
              </Icon>
              <Divider className={classes.divider} orientation="vertical" />
              <InputBase
                className={classes.input}
                placeholder="Last Name, First Name"
                value={values.full_name}
                onChange={(evt) => handleChange(evt)}
                endAdornment={
                  <IconButton className={classes.send} type="submit">
                    <SendIcon />
                  </IconButton>
                }
              />
            </Paper>
          </Grid>
        </Grid>
      </>
    );
};

export default Patients;
