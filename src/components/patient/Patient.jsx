import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import ListIcon from "@material-ui/icons/List";

import { makeStyles } from "@material-ui/core/styles";
import TitleBar from "../TitleBar";
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

  }
}));

const Patient = (props) => {
  const classes = useStyles();
  const { rooms } = useSelector(roomState);
  const [values, setValues] = useState({
    room: "",
  });

  const handleChange = (evt) => {
    const { value } = evt.target;
    setValues({ ...values, room: value });
  };

  return (
    <>
      <Grid
      className={classes.gridRow}
        container
        direction="row"
        justify="space-between"
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
        justify="space-between"
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


      <Grid
      className={classes.gridRow}
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
        <Typography className={classes.category} variant="h5">Assign to room</Typography>

        </Grid>
        <Grid item>
          <FormControl variant="outlined" className={classes.roomSelect}>
            <InputLabel id="select">Rooms Available</InputLabel>
            <Select
              labelId="select"
              id="select"
              value={values.room}
              onChange={(evt) => handleChange(evt)}
              label="Rooms Available"
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
      </Grid>
    </>
  );
};

export default Patient;
