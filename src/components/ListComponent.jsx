import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const ListComponent = (props) => {
  const [selectedId, setSelectedId] = useState(null);


    return (
        <List>
        {props.patients.map((i, idx) => (
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
