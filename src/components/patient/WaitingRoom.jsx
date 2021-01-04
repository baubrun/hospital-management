import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import TitleBar from "../TitleBar";
import Patient from "./Patient";

import { patientState, listWaitingPatients } from "../../redux/patientSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    elevation: 15,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    marginRight: theme.spacing(3),
  },
 

}));

const PatientContainer = () => {
  const dispatch = useDispatch();
  const { waitingPatients } = useSelector(patientState);
  const [selectedPatient, setSelectedPatient] = useState({});
  const [values, setValues] = useState({});

  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    dispatch(listWaitingPatients());
  }, []);





  if (waitingPatients.length < 1) return null;

  return (
    <>
      <TitleBar text="waiting Room" />
      <Paper className={classes.root}>

        <Grid container direction="row" justify="center" alignItems="center">
          
          <Grid item xs={2}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={tabValue}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              {waitingPatients.map((p, idx) => {
                return (
                  <Tab
                    className={classes.tab}
                    key={idx}
                    label={`${p.first_name} ${p.last_name}`}
                    {...a11yProps(idx)}
                  />
                );
              })}
            </Tabs>
          </Grid>

          <Grid item xs={10}>
          {waitingPatients.map((patient, idx) => {
            return (
              <TabPanel key={idx} tabValue={tabValue} index={idx}>
                <Patient patient={patient} />
              </TabPanel>
            );
          })}
          </Grid>

        </Grid>

      </Paper>
    </>
  );
};

const TabPanel = (props) => {
  const classes = useStyles();
  const { children, tabValue, index, ...other } = props;

  return (
    <Box
      className={classes.tabPanel}
      role="tabpanel"
      hidden={tabValue !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {tabValue === index && <Box p={3}>{children}</Box>}
    </Box>
  );
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

export default PatientContainer;