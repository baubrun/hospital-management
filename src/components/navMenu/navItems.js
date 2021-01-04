import React from "react";

import GridOnIcon from "@material-ui/icons/GridOn";
import QueueIcon from "@material-ui/icons/Queue";
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';

export const navItems = [
  {
    name: "New Patient",
    icon: <QueueIcon />,
    url: "/",
  },

  {
    name: "Occupancy",
    icon: <GridOnIcon />,
    url: "/rooms",
  },
  {
    name: "Patients",
    icon: <AccessibilityNewIcon />,
    url: "/patients",
  },
];
