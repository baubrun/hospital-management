import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TitleBar from "../TitleBar";
import Patient from "./Patient";
import Rooms from "../../components/rooms/Rooms";
import Button from "@material-ui/core/Button";

import { patientState, listWaitingPatients } from "../../redux/patientSlice";
import MessageModal from "../../components/MessageModal";
import ListComponent from "../../components/ListComponent";

import _ from "lodash"

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
  const classes = useStyles();
  const { waitingPatients, error } = useSelector(patientState);
  const [patients, setPatients] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState({})
  const [viewOccupancy, setViewOccupancy] = useState(false);

  const handleSelected = (id) => {
    setSelectedId(id);
  };

  useEffect(() => {
    dispatch(listWaitingPatients());
  }, []);

  useEffect(() => {
    setPatients(waitingPatients);
  }, [waitingPatients]);

  useEffect(() => {
    if (selectedId){
      const found = patients.find(p => p.patient_id === selectedId)
    setSelectedPatient(found)
    }
  }, [selectedId]);


  if (patients.length < 1) return null;

  return (
    <>
      {error && <MessageModal />}

      <TitleBar text="waiting Room" />
      <Paper className={classes.root}>
        <Grid container 
        direction="row" 
        justify="center" 
        alignItems="center">

          <Grid item xs={2}>
            <ListComponent 
            onClickItem={handleSelected} 
            patients={patients} 
            />
          </Grid>

          <Grid item xs={10}>
            {selectedId && <Patient patient={selectedPatient} />}
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

export default WaitingRoom;
