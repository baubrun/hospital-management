import React from "react";

import GridOnIcon from '@material-ui/icons/GridOn';
import QueueIcon from '@material-ui/icons/Queue';


export const navItems = [
    {
    name: "Occupancy",
    icon: <GridOnIcon />,
    color: "3c51162",
    url: "/rooms"
    }, 
    {
    name: "New Patient",
    icon: <QueueIcon />,
    color: "3c51162",
    url: "/patient/new"
},
]