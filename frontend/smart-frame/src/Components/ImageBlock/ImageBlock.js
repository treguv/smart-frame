import React, {useState} from 'react';
import Axios from "axios";
import {Button, Grid,Typography,Paper, makeStyles, Card, CardContent, Divider, CardMedia} from "@material-ui/core"
require('dotenv').config()

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  }));

const ImageBlock = ({theId, imgURL}) => {
    const classes = useStyles();
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
                <Card >
                    <img height={50} src={imgURL}/>
                    <CardContent>
                        <Divider></Divider>
                         <Button color ="inherit" onClick={deleteImage}>Delete</Button>
                    </CardContent>
                </Card>
            </Grid>
        )
    } else {
        return (
            <Grid id={theId} item xs={4}>
                <Card >
                   <Typography variant="body2">Deleted...</Typography>
                </Card>
            </Grid>
        ) 
    }
}

export default ImageBlock;
