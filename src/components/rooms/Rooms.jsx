import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TitleBar from "../TitleBar";

import { roomState, listRooms } from "../../redux/roomsSlice";
import Spinner from "../Spinner";
import { Circle } from "react-shapes";

const useStyles = makeStyles((theme) => ({
  rooms: {
    textAlign: "center",
    margin: theme.spacing(1),
  },
  paper: {
    margin: theme.spacing(3),
  },
}));

const Rooms = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { rooms } = useSelector(roomState);

  useEffect(() => {
    dispatch(listRooms());
  }, []);


  const isRoomOccupied = (status) => status ? "#c51162" : "none"


  if (rooms.length < 1) return <Spinner />;

  return (
    <>
      <TitleBar text="Room Occupancy" />
      <Paper className={classes.paper} elevation={15}>
        <Grid container direction="row" justify="center" alignItems="center">
          {rooms.map((r, idx) => {
            return (
              <Grid className={classes.rooms}  key={idx} item xs={2}>
                  <Typography variant="h6">{r.room_number}</Typography>
                  <Circle 
                  onClick={() => console.log(r.room_number)}
                  fill={{ color: isRoomOccupied(r.occupied) }} 
                  stroke={{ color: "#b256c2" }}
                  strokeWidth={5}
                  r={20} />
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </>
  );
};

export default Rooms;
