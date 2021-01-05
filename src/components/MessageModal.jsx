import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";

import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

import {clearError} from "../redux/patientSlice";



const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
    //   border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const MessageModal = ({message}) => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const closeModal = () => {
        dispatch(clearError())
        setOpen(false)
    }

    return (
        <>
        <Modal
        className={classes.paper}
        open={open}
        onClose={() => closeModal()}
      >
       <Typography>{message}</Typography>
      </Modal>
      </>
    )
}

export default MessageModal
