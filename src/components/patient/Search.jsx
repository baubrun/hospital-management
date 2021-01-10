import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import SendIcon from "@material-ui/icons/Send";
import { DatePicker } from "@material-ui/pickers";
import TitleBar from "../TitleBar";

import { makeStyles } from "@material-ui/core/styles";

import { readPatient, patientState } from "../../redux/patientSlice";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: "#fff",
    fontSize: 24,
  },
  iconButton: {
    padding: 10,
    color: "#fff",
  },
  text: {
    fontWeight: "bold",
    minWidth: 300,
    margin: theme.spacing(2),
    padding: "32px 0px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: 5,
    textAlign: "center",
    textTransform: "uppercase",
  },
  textLabel: {
    color: theme.palette.secondary.main,
    fontSize: 20,
    fontWeight: "bolder",
    textAlign: "center",
    textTransform: "uppercase",
  },
  divider: {
    height: 28,
    margin: 4,
    color: "#fff",
  },
  patientInfo: {
    elevation: 11,
    margin: theme.spacing(4),
  },
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    backgroundColor: "rgb(178, 86, 194, 0.7)",
    margin: theme.spacing(4),
  },
  root: {
    backgroundColor: "rgba(197, 17, 98,0.3)",
    height: "100vh",
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: "#fff",
    padding: theme.spacing(1),
    fontSize: "24px",
  },
  send: {
    color: theme.palette.secondary.main,
  },
  date: {
  padding: "32px",
  color: theme.palette.secondary.main,
}
}));

const defaultState = {
  care_level: "",
  full_name: "",
  first_name: "",
  last_name: "",
  medicalHistory: [],
  room_number: "",
};

const SearchPatient = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { patient } = useSelector(patientState);
  const [values, setValues] = useState(defaultState);
  const [admissionDate, setAdmissionDate] = useState(null);
  const [dischargeDate, setDischargeDate] = useState(null);

  useEffect(() => {
    if (patient) {
      setValues(patient);
      setAdmissionDate(patient.admission);
      setDischargeDate(patient.discharge);
    }
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
      <Box className={classes.root}>
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
              className={classes.search}
              component="form"
              onSubmit={handleSearch}
            >
              <Icon className={classes.icon}>
                <SearchIcon className={classes.icon} />
              </Icon>
              <Divider className={classes.divider} orientation="vertical" />
              <InputBase
                className={classes.searchInput}
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
        {admissionDate && (
          <Paper className={classes.patientInfo}>
            <Grid
              container
              className={classes.gridRow}
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Box className={classes.textLabel}>First Name</Box>
                <Box className={classes.text}>{values.first_name}</Box>
              </Grid>

              <Grid item>
                <Box className={classes.textLabel}>Last Name</Box>

                <Box className={classes.text}>{values.last_name}</Box>
              </Grid>

              <Grid item>
                <Box className={classes.textLabel}>Room Number</Box>
                <Box className={classes.text}>{values.room_number}</Box>
              </Grid>
            </Grid>

            <Grid
              container
              className={classes.gridRow}
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item>
                <Box className={classes.textLabel}>Admission Date</Box>
                <Box className={classes.text}>
                  {moment(admissionDate).format("L")}
                </Box>
              </Grid>

              <Grid item>
              <Box className={classes.textLabel}>Discharge Date</Box>
                {/* <Box className={classes.text}> */}
                <DatePicker
                  disableToolbar
                  disablePast
                  color="secondary"
                  variant="dialog"
                  format="MM/dd/yyyy"
                  margin="normal"
                  label="Discharge Date"
                  value={dischargeDate || null}
                  onChange={(evt) => setDischargeDate(evt)}
                  inputVariant="outlined"
                  inputProps={{ className: classes.date  }}
                />
                {/* </Box> */}
              </Grid>
            </Grid>
          </Paper>
        )}
      </Box>
    );
};

export default SearchPatient;