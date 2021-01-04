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
  },
  paper: {
    margin: theme.spacing(3),
  },
  evenRooms: {
    marginBottom: theme.spacing(14),
  },
  header: {
    textTransform: "uppercase",
    textAlign: "center",
  },
}));

const Rooms = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { rooms } = useSelector(roomState);

  useEffect(() => {
    dispatch(listRooms());
  }, []);

  const isRoomOccupied = (status) => (status ? "#c51162" : "none");


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

              {rooms.filter((r) => r.room_number % 2 === 1).map((room, idx) => {
                  return (
                    <Grid
                    key={idx}
                    item
                    xs={2}
                    style={{ margin: "16px 32px" }}
                  >
                    <Typography variant="h6" className={classes.rooms}>
                      {room.room_number}
                    </Typography>
                    <Circle
                      style={{ padding: "0px !important" }}
                      fill={{ color: isRoomOccupied(room.occupied) }}
                      stroke={{ color: "#b256c2" }}
                      strokeWidth={5}
                      r={20}
                    />
                  </Grid>

                  )
                })}
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

              {rooms.filter((r) => r.room_number % 2 === 0).map((room, idx) => {
                  return (
                    <Grid
                    key={idx}
                    item
                    xs={2}
                    style={{ margin: "16px 32px" }}
                  >
                    <Typography variant="h6" className={classes.rooms}>
                      {room.room_number}
                    </Typography>
                    <Circle
                      style={{ padding: "0px !important" }}
                      fill={{ color: isRoomOccupied(room.occupied) }}
                      stroke={{ color: "#b256c2" }}
                      strokeWidth={5}
                      r={20}
                    />
                  </Grid>

                  )
                })}

            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Rooms;
