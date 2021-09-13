import React, {useState, useEffect} from 'react';
import Axios from "axios";
import {Container, Grid,Typography} from "@material-ui/core";
import TextBlock from "../TextBlock/TextBlock";
require('dotenv').config()

const TextFeed = () => {
    const [messages, setMessages] = useState(null);
    //on page load, get the data
    useEffect(() =>{
        getData();
    }, []);
    //send request for the text data feed
    async function getData(){
        const data = await Axios.get("http://localhost:3001/api/messages");
        //set our data
        console.log("data",data.data);
        setMessages(data.data.reverse());
        console.log("messages",messages);
    }
    return(
        <Container maxWidth="sm">
        <Grid container spacing = {3}>
            {messages && (
                messages.map(({messageText, messageTopic}) =>(
                    <TextBlock text={messageText} topic={messageTopic}></TextBlock>
                ))
            )}
        </Grid>
        </Container>
    )
}

export default  TextFeed;
