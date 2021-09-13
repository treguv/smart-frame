import React, {useState} from 'react';
import Axios from "axios";
import {Grid,Typography,Paper} from "@material-ui/core"
require('dotenv').config()

const TextBlock = ({text, topic}) => {
    return (
        <Grid item xs={12}>
          <Paper>Message: {text} <br></br> Topic: {topic} </Paper>
        </Grid>
    )
}

export default TextBlock;
