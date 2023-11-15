import React from "react";
import Typography from "@mui/material/Typography";
import {AppBar, Toolbar} from "@mui/material";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";

function Navbar() {
    return (
        <AppBar position="static"  sx={{ backgroundColor: 'black' }}>
            <Box ml={5} mr={5}>
                <Toolbar >
                    <Typography variant="h4" sx={{ flexGrow: 1}} >
                        Fantasy tavern
                    </Typography>
                    <Typography variant="h6" sx={{flexGrow: 1.3, justifyContent: 'center'}}>
                        (name of current room)
                    </Typography>
                    <Button color="inherit">Log out</Button>
                </Toolbar>
            </Box>
        </AppBar>

    )
}

export default Navbar;