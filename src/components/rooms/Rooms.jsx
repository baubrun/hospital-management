import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import {roomState, listRooms} from "../../redux/roomsSlice"

import Spinner from "../Spinner"

const Rooms = () => {
    const dispatch = useDispatch();
    const { rooms } = useSelector(roomState);

    useEffect(() => {
        dispatch(listRooms());
      }, []);



    if (rooms.length < 1) return (<Spinner />)

    return (
        
        <Paper>
            <Typography>Rooms</Typography>
            <svg>
                <g>
                    <text></text>
                    <circle r={5}></circle>
                </g>
            </svg>
        </Paper>
    )
}


export default Rooms
