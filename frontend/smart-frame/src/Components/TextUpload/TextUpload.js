import React, {useState} from 'react';
import Axios from "axios";
import {Button, FormControl, InputLabel, Input, FormHelperText} from "@material-ui/core";
import {List, ListItem, ListItemText, Menu, MenuItem, makeStyles} from "@material-ui/core";
require('dotenv').config()


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const options = [
    "Encouraging",
    "Happy",
    "Sad",
    "Romantic",
    "Funny"
];


function TextUpload(){
    const [messageText, setMessageText] = useState("");
    const sendMessage = () => {
        const data = {
            "messageText": messageText,
            "messageTopic": options[selectedIndex]
        }
        Axios.post('http://localhost:3001/api/messages/', data)
        .then((response) => {
          window.location.reload();
        }) 
        .catch(error => console.log(error));
    }

    //menu stuff
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div>
            <FormControl>
            <InputLabel htmlFor="my-input">Send a message</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" onChange = {e => { setMessageText(e.target.value)}} />
            <FormHelperText id="my-helper-text">This will be displayed on the frame</FormHelperText>
            </FormControl>
            {/* Dropdown form that selects the type of the message */}
                 <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
        >
          <ListItemText primary="Message Type" secondary={options[selectedIndex]} />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
        <Button color="inherit" onClick={sendMessage}>Send</Button>
        </div>
    )
}
export default TextUpload;