import React, {useState} from 'react';
import Axios from "axios";
import {Button, Grid,Typography,Paper, makeStyles, Card, CardActions, CardContent, Divider} from "@material-ui/core"
require('dotenv').config()

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: "20px",
        fontSize: "20px"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
  }));

const TextBlock = ({theId,text, topic}) => {
    const classes = useStyles();
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
            {/* <Paper className = {classes.paper}>Message: {text} <br></br> Topic: {topic} </Paper> */}
            {/* <Button color ="inherit" onClick={deleteText}>Delete</Button> */}
                <Card className = {classes.root}>
                    <CardContent>
                        <Typography variant="h4">{text}</Typography>
                        <Typography variant="body2" >Type: {topic}</Typography>
                        <Divider></Divider>
                        <Button color ="inherit" onClick={deleteText}>Delete</Button>
                    </CardContent>
                </Card>
            </Grid>
        )
    } else {
        return(
            <Grid id={theId} item xs={12}>
                <Card className = {classes.root}>
                    <CardContent>
                        <Typography variant="h4" className={classes}>Deleted...</Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

export default TextBlock;
