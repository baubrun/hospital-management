import React from "react";

import GridOnIcon from "@material-ui/icons/GridOn";
import QueueIcon from "@material-ui/icons/Queue";
import AirlineSeatLegroomExtraIcon from '@material-ui/icons/AirlineSeatLegroomExtra';


export const navItems = [
  {
    name: "New Patient",
    icon: <QueueIcon />,
    url: "/",
  },

  {
    name: "Waiting Room",
    icon: <AirlineSeatLegroomExtraIcon />,
    url: "/waiting",
  },
];
