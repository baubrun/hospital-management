import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import TitleBar from "../TitleBar";
import Rooms from "../../components/rooms/Rooms";

import { patientsState } from "../../redux/patientSlice";
import { roomState } from "../../redux/roomSlice";

const useStyles = makeStyles((theme) => ({
  paper: {
    elevation: 15,
    // padding: theme.spacing(3),
  },
  category: {
    textTransform: "uppercase",
  },
  roomSelect: {
    minWidth: 250,
  },
  gridRow: {
    margin: "48px 0px",
  },
}));

const Patient = (props) => {
  const classes = useStyles();
  const { rooms } = useSelector(roomState);
  const [values, setValues] = useState({
    roomAssigned: "",
    patient_id: props.patient.patient_id,
  });
  const [roomView, setRoomsView] = useState(false)

  const handleRoom = (evt) => {
    const {value} = evt.target
    setValues({ ...values, roomAssigned: value });
  };


  const handleSubmit = (evt) => {
    evt.preventDefault()
    console.log('values :>> ', values);
  } 



  return (
    <>
      <Grid
        className={classes.gridRow}
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.category} variant="h5">
            Patient
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">{props.patient.first_name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">{props.patient.last_name}</Typography>
        </Grid>
      </Grid>

      <Grid
        className={classes.gridRow}
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <Typography className={classes.category} variant="h5">
            Care Level
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">{props.patient.care_level}</Typography>
        </Grid>
      </Grid>


      <form onSubmit={handleSubmit}>
      <Grid
        className={classes.gridRow}
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        
        <Grid item>
          <Typography variant="h5">ASSIGN TO ROOM: </Typography>
        </Grid>
        <Grid item>
          <FormControl variant="outlined" className={classes.roomSelect}>
            <InputLabel id="select">Rooms</InputLabel>
            <Select
              labelId="select"
              id="select"
              value={values.roomAssigned}
              onChange={(evt) => handleRoom(evt)}
              label="Rooms"
            >
              {rooms.reduce((acc, room, idx) => {
                if (!room.occupied) {
                  acc.push(
                    <MenuItem key={idx} value={room.room_number}>
                      {room.room_number}
                    </MenuItem>
                  );
                }
                return acc;
              }, [])}
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
      </form>

      <Grid
        className={classes.gridRow}
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <Button
            className={classes.category}
            color="secondary"
            size="large"
            variant="contained"
            onClick={() => setRoomsView(!roomView)}
          >
            view Occupancies
          </Button>
        </Grid>
      </Grid>

      <Grid
        className={classes.gridRow}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {roomView && (
          <Grid item>
            <Rooms />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Patient;
