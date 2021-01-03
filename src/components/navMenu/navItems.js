import React from "react";

import GridOnIcon from "@material-ui/icons/GridOn";
import QueueIcon from "@material-ui/icons/Queue";

export const navItems = [
  {
    name: "Occupancy",
    icon: <GridOnIcon />,
    url: "/rooms",
  },
  {
    name: "New Patient",
    icon: <QueueIcon />,
    url: "/patient/new",
  },
];
