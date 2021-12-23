import React, {useState, useEffect} from 'react';
import Axios from "axios";
import {Button,Container, Grid,Typography, makeStyles, Divider} from "@material-ui/core";
import TextBlock from "../TextBlock/TextBlock";
require('dotenv').config()
const BASE_URL = process.env.BASE_URL;

const useStyles = makeStyles({
    padding: {
        padding:"20px"
    }
})
const TextFeed = () => {
    const classes = useStyles();
    const [messages, setMessages] = useState(null);
    //on page load, get the data
    useEffect(() =>{
        getData();
    }, []);
    //send request for the text data feed
    async function getData(){
        const data = await Axios.get(`${BASE_URL}/api/messages`);
        //set our data
        console.log("data",data.data);
        setMessages(data.data.reverse());
        console.log("messages",messages);
    }
    return(
        <Container maxWidth="sm">
            <Typography className={classes.padding} variant="h3">Messages On Device: <br></br></Typography>
            <Divider></Divider>
        <Grid container spacing = {3}>
            {messages && (
                messages.map(({id, messageText, messageTopic}) =>(
                    <TextBlock key={id} theId={id} text={messageText} topic={messageTopic}></TextBlock>
                ))
            )}
        </Grid>
        </Container>
    )
}

export default  TextFeed;
