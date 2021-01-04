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
    height: 224,
    elevation: 15,
    margin: theme.spacing(3),
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const PatientContainer = () => {
  const dispatch = useDispatch();
  const { patients, waitingPatients } = useSelector(patientState);
  const [selectedPatient, setSelectedPatient] = useState({});

  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };


  useEffect(() => {
     dispatch(listPatients())
  }, [])

  if (patients.length < 1) return null
  
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
            return <Tab label="Item Two" {...a11yProps(idx)} />;
          })}
        </Tabs>
        {patients.map((patient, idx) => {
          return (
              <>
          <TabPanel tabValue={tabValue} index={idx}>
                <Patient patient={patient} />
          </TabPanel>
          </>);
        })}
      </Paper>
    </>
  );
};

const TabPanel = (props) => {
  const { children, tabValue, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={tabValue !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {tabValue === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

export default PatientContainer;
