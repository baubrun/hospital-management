import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  list: {
    // paddingRight: theme.spacing(4),
    border: `2px solid ${theme.palette.secondary.main}`,
    width: 240,
    overflow: "auto",
  }
}));


const ListComponent = (props) => {
  const classes = useStyles();
  const [selectedId, setSelectedId] = useState(null);
  const [patients, setPatients] = useState([])


  useEffect(() => {
    setPatients(props.patients)
  }, [props.patients])

    console.log('props.patients :>> ', props.patients);

    if (patients.length < 1) return null

    return (
        <List className={classes.list}>
        {patients.map((i, idx) => (
          <ListItem
            button
            key={idx}
            onClick={() => {
              props.onClickItem(i.patient_id);
              setSelectedId(i.patient_id)
            }}
            selected={i.patient_id === selectedId}
          >
            <ListItemText primary={`${i.first_name} ${i.last_name}`} />
          </ListItem>
        ))}
      </List>

    )
}

export default ListComponent
