import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Patient from "./Patient";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    elevation: 15,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  modal: {
    width: "80%",
    margin: "auto",
  },
}));


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
  
const WaitingList = (props) => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [waitingPatientList, setWaitingPatientList] = useState([]);


  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };


  
  useEffect(() => {
    setWaitingPatientList(props.patients)
  }, [props.patients]);


  return (
    <>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={tabValue}
              onChange={props.handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              {waitingPatientList.map((p, idx) => {
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

            
    </>
  );
};

export default WaitingList;
