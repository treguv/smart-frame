import React from "react";
import {Button, AppBar, Toolbar, IconButton, Typography} from "@material-ui/core";

function NavBar() {
    return (
    <AppBar position="fixed">
    <Toolbar>
        <IconButton edge="start"  color="inherit" aria-label="menu">
        </IconButton>
        <Typography variant="h6">
        Home
        </Typography>
        <Button color="inherit">Text</Button>
        <Button color="inherit">Verse</Button>
        <Button color="inherit">Image</Button>
    </Toolbar>
</AppBar>
    )
}

export default NavBar;