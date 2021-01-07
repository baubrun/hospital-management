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
  category: {
    textTransform: "uppercase",
  },
  confirm: {
    marginLeft: theme.spacing(6),
  },
  modal: {
    width: "80%",
    margin: "auto",
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    elevation: 15,
  },
  roomInput: {
    minWidth: 150,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  viewBtn: {
    margin: theme.spacing(2),
  },
}));




const WaitingRoom = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { rooms } = useSelector(roomState);
  const { waitingPatients, error } = useSelector(patientState);
  const [patients, setPatients] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState({});
  const [viewOccupancy, setViewOccupancy] = useState(false);
  const [values, setValues] = useState({
    patient_id: null,
    roomAssigned: "",
  });


  const handleSelected = (id) => {
    setSelectedId(id);
    setValues({...values, patient_id: id})
  };

  useEffect(() => {
    dispatch(listWaitingPatients());
  }, []);

  useEffect(() => {
    setPatients(waitingPatients)
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
    setSelectedId(null)
  };

  return (
    <>
      {error && <MessageModal />}

      <TitleBar text="waiting Room" />

      <form onSubmit={handleSubmit}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
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

        <Grid item>
          <Typography variant="h5" className={classes.category}>
            assign patient to room:
          </Typography>
        </Grid>

          <Grid item>
            <FormControl variant="outlined" className={classes.roomSelect}>
              <InputLabel id="select" className={classes.category}>
                room
              </InputLabel>
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

      <Paper className={classes.root}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={2}>
            <ListComponent onClickItem={handleSelected} patients={patients} />
          </Grid>

          <Grid item xs={10}>
             <Patient patient={selectedPatient} selectedId={selectedId}/>
          </Grid>
        </Grid>
      </Paper>
      </form>

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
