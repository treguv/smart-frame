import React, {useState, useEffect} from 'react';
import Axios from "axios";
import {Button,Container, Grid,Typography, makeStyles} from "@material-ui/core";
import ImageBlock from "../ImageBlock/ImageBlock";
require('dotenv').config()

const useStyles = makeStyles({
    padding: {
        padding:"20px"
    }
})

const ImageFeed = () => {
    const classes = useStyles();
    const [images, setImages] = useState(null);
    //on page load, get the data
    useEffect(() =>{
        getData();
    }, []);
    //send request for the text data feed
    async function getData(){
        const data = await Axios.get("http://localhost:3001/api/images");
        //set our data
        console.log("data",data.data);
        setImages(data.data.reverse());
        // console.log("messages",messages);
    }
    return(
        <Container maxWidth="sm">
        <Typography variant="h3" className={classes.padding}>Images On Device:</Typography>
        <Grid container spacing = {3}>
            {images && (
                images.map(({id, imageURL}) =>(
                    <ImageBlock key={id} theId={id} imgURL={imageURL}></ImageBlock>
                ))
            )}
        </Grid>
        </Container>
    )
}

export default ImageFeed;
