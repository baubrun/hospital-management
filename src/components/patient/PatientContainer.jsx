import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import TitleBar from "../../components/TitleBar";
import Patient from "../../components/patient/Patient";

import { patientState, listPatients } from "../../redux/patientSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    elevation: 15,
    margin: theme.spacing(1),
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    // marginRight: theme.spacing(3),

  },
  tab: {
    //   width: "50% !important",
      margin: "0px 16pz",
    },
  tabPanel: {
    //   width: "50% !important",
    //   margin: "0px 20%",
    }
}));

const PatientContainer = () => {
  const dispatch = useDispatch();
  const { patients, waitingPatients } = useSelector(patientState);
  const [selectedPatient, setSelectedPatient] = useState({});
    const [values, setValues] = useState({})

  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    dispatch(listPatients());
  }, []);

  if (patients.length < 1) return null;

  return (
    <>
      <TitleBar text="patients" />
      <Paper className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tabValue}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {patients.map((p, idx) => {
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
        {patients.map((patient, idx) => {
          return (
            <TabPanel key={idx} tabValue={tabValue} index={idx}>
              <Patient patient={patient} />
            </TabPanel>
          );
        })}
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
      {tabValue === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
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
