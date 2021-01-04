import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Circle } from "react-shapes";

import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { roomState, listRooms } from "../../redux/roomSlice";
import Spinner from "../Spinner";
import TitleBar from "../TitleBar";

const useStyles = makeStyles((theme) => ({
  rooms: {
    textAlign: "center",
    margin: theme.spacing(1),
  },
  paper: {
    margin: theme.spacing(3),
  },
  evenRooms: {
    marginBottom: theme.spacing(14),
  },
  header: {
    textTransform: "uppercase",
    textAlign: "center"
  }
}));

const Rooms = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { rooms } = useSelector(roomState);

  useEffect(() => {
    dispatch(listRooms());
  }, []);

  const isRoomOccupied = (status) => (status ? "#c51162" : "none");

  if (rooms.length < 1) return <Spinner />;

  return (
    <>
      <TitleBar text="Room Occupancy" />
      <Paper className={classes.paper} elevation={15}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={4}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Typography className={classes.header}>long stay</Typography>
              </Grid>

              {rooms.reduce((acc, room, idx) => {
                if (room.room_number % 2 === 1) {
                  acc.push(
                    <Grid key={idx} item xs={2}>
                      <Typography variant="h6" className={classes.rooms}>
                        {room.room_number}
                      </Typography>
                      <Circle
                        onClick={() => console.log(room.room_number)}
                        fill={{ color: isRoomOccupied(room.occupied) }}
                        stroke={{ color: "#b256c2" }}
                        strokeWidth={5}
                        r={20}
                      />
                    </Grid>
                  );
                }
                return acc;
              }, [])}
            </Grid>
          </Grid>

          <Grid item xs={2}>
            <Box></Box>
          </Grid>

          <Grid item xs={4} className={classes.evenRooms}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Typography className={classes.header}>short stay</Typography>
              </Grid>

              {rooms.reduce((acc, room, idx) => {
                if (room.room_number % 2 === 0) {
                  acc.push(
                    <Grid key={idx} item xs={2}>
                      <Typography className={classes.rooms} variant="h6">
                        {room.room_number}
                      </Typography>
                      <Circle
                        onClick={() => console.log(room.room_number)}
                        fill={{ color: isRoomOccupied(room.occupied) }}
                        stroke={{ color: "#b256c2" }}
                        strokeWidth={5}
                        r={20}
                      />
                    </Grid>
                  );
                }
                return acc;
              }, [])}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Rooms;
