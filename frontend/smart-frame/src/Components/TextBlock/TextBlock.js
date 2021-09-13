import React, {useState} from 'react';
import Axios from "axios";
import {Button, Grid,Typography,Paper, makeStyles} from "@material-ui/core"
require('dotenv').config()

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  }));

const TextBlock = ({theId,text, topic}) => {
    const [visible, setVisible] = useState(true);
    const deleteText = () => {
        console.log("clicked!");
        Axios.delete(`http://localhost:3001/api/messages/${theId}`)
        .then(response => console.log(response))
        .catch(err => console.error(err));
        setVisible(false);
    }
    if(visible){
        return (
            <Grid id={theId} item xs={12}>
            <Paper>Message: {text} <br></br> Topic: {topic} </Paper>
            <Button color ="inherit" onClick={deleteText}>Delete</Button>
            </Grid>
        )
    } else {
        return <Typography> Deleted...</Typography>
    }
}

export default TextBlock;
