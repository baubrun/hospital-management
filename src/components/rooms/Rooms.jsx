import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


import { roomState, listRooms } from "../../redux/roomsSlice";
import Spinner from "../Spinner";


const useStyles = makeStyles((theme) => ({
    rooms:{
      stroke: theme.palette.secondary.main,
      fill: "none"
    },
    paper: {
        width: 250,
        height: 500
    }
  
  }));
  

const Rooms = () => {
  const classes = useStyles()
  const dispatch = useDispatch();
  const { rooms } = useSelector(roomState);

  useEffect(() => {
    dispatch(listRooms());
  }, []);

  if (rooms.length < 1) return <Spinner />;

  return (
    <Paper>
      <Typography>Rooms</Typography>
      {rooms.map((r, idx) => {
        return (
          <svg key={idx} className={classes.rooms}>
            <g>
              <text>{r.room_number}</text>
              <circle r={10}></circle>
            </g>
          </svg>
        );
      })}
    </Paper>
  );
};

export default Rooms;
