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
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

import { patientState, listWaitingPatients } from "../../redux/patientSlice";
import { roomState, admission } from "../../redux/roomSlice";

import MessageModal from "../../components/MessageModal";
import ListComponent from "../../components/ListComponent";
import clsx from "clsx";

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
  roomInput: {
    minWidth: 150,
  },
  viewBtn: {
    margin: theme.spacing(2),
  },
}));

const defaultState = {
  roomAssigned: "",
  patient_id: null,
  first_name: "",
  last_name: "",
  care_level: null,
};

const WaitingRoom = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { rooms } = useSelector(roomState);

  const { waitingPatients, error } = useSelector(patientState);
  const [patients, setPatients] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState({});
  const [viewOccupancy, setViewOccupancy] = useState(false);
  const [values, setValues] = useState(defaultState);

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
    if (selectedId) {
      const found = patients.find((p) => p.patient_id === selectedId);
      setSelectedPatient(found);
    }
  }, [selectedId]);

  const handleRoom = (evt) => {
    const { value } = evt.target;
    setValues({ ...values, roomAssigned: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const data = {
      room_number: values.roomAssigned,
      occupied: true,
      occupant_id: values.patient_id,
    };
    dispatch(admission(data));
    dispatch(listWaitingPatients());
  };

  if (patients.length < 1) return null;

  return (
    <>
      {error && <MessageModal />}

      <TitleBar text="waiting Room" />

      <Grid container direction="row"  alignItems="center">
        <Grid item>
          <Button
            className={clsx([classes.category, classes.viewBtn])}
            color="secondary"
            size="large"
            variant="contained"
            onClick={() => setViewOccupancy(!viewOccupancy)}
          >
            view Occupancies
          </Button>
        </Grid>

        {selectedId && (
          <Grid
            // className={classes.gridRow}
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h5">PATIENT TO ROOM: </Typography>
            </Grid>

            <Grid item>
              <form onSubmit={handleSubmit}>
                <FormControl variant="outlined" className={classes.roomSelect}>
                  <InputLabel id="select">Rooms</InputLabel>
                  <Select
                    className={classes.roomInput}
                    labelId="select"
                    id="select"
                    value={values.roomAssigned}
                    onChange={(evt) => handleRoom(evt)}
                    label="Rooms"
                  >
                    {rooms
                      .filter((r) => r.occupied === false)
                      .map((room, idx) => {
                        return (
                          <MenuItem key={idx} value={room.room_number}>
                            {room.room_number}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </form>
            </Grid>

            <Grid item>
              <Button
                className={classes.category}
                color="primary"
                size="large"
                variant="contained"
                type="submit"
              >
                CONFIRM
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Paper className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2}>
            <ListComponent onClickItem={handleSelected} patients={patients} />
          </Grid>

          <Grid item xs={10}>
            {selectedId && <Patient patient={selectedPatient} />}
          </Grid>
        </Grid>
      </Paper>

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
