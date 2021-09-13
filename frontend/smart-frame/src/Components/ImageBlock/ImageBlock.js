import React, {useState} from 'react';
import Axios from "axios";
import {Button, Grid,Typography,Paper, makeStyles} from "@material-ui/core"
require('dotenv').config()

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  }));

const ImageBlock = ({theId, imgURL}) => {
    const [visible, setVisible] = useState(true);
    const deleteImage = () => {
        console.log("clicked!");
        Axios.delete(`http://localhost:3001/api/images/${theId}`)
        .then(response => console.log(response))
        .catch(err => console.error(err));
        setVisible(false);
    }
    if(visible){
        return (
            <Grid id={theId} item xs={4}>
                <img height={50} src={imgURL}/>
            <Button color ="inherit" onClick={deleteImage}>Delete</Button>
            </Grid>
        )
    } else {
        return <Typography> Deleted...</Typography>
    }
}

export default ImageBlock;
