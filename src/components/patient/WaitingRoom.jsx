import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TitleBar from "../TitleBar";
import Patient from "./Patient";
import Rooms from "../../components/rooms/Rooms";
import Button from "@material-ui/core/Button";

import { patientState, listWaitingPatients } from "../../redux/patientSlice";
import MessageModal from "../../components/MessageModal";
import WaitingList from "../../components/patient/WaitingList";
import PatientContainer from "../../components/patient/PatientContainer";

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

const WaitingRoom = () => {
  const dispatch = useDispatch();
  const { waitingPatients, error } = useSelector(patientState);
  const [viewOccupancy, setViewOccupancy] = useState(false);
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [patients, setPatients] = useState([]);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    dispatch(listWaitingPatients());
  }, []);


  useEffect(() => {
    setPatients(waitingPatients)
  }, [waitingPatients]);


  if (patients.length < 1) return null;

  return (
    <>
      {error && <MessageModal />}

      <TitleBar text="waiting Room" />
      <Paper className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2}>
        <WaitingList 
        handleChange={handleChange} 
        patients={patients}/>
          </Grid>

          <Grid item xs={10}>
            {patients.map((patient, idx) => {
              return (
                <PatientContainer key={idx} tabValue={tabValue} index={idx}>
                  <Patient patient={patient} />
                </PatientContainer>
              );
            })}

          </Grid>
        </Grid>
      </Paper>
      <Button
        className={classes.category}
        color="secondary"
        size="large"
        variant="contained"
        onClick={() => setViewOccupancy(!viewOccupancy)}
      >
        view Occupancies
      </Button>

      <Modal
        className={classes.modal}
        open={viewOccupancy}
        onClose={() => setViewOccupancy(false)}
      >
        <Rooms />
      </Modal>
    </>
  );
};

// const TabPanel = (props) => {
//   const classes = useStyles();
//   const { children, tabValue, index, ...other } = props;

//   return (
//     <Box
//       className={classes.tabPanel}
//       role="tabpanel"
//       hidden={tabValue !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {tabValue === index && <Box p={3}>{children}</Box>}
//     </Box>
//   );
// };

// const a11yProps = (index) => {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// };

export default WaitingRoom;
