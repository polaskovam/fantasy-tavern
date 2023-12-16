import React from "react";
import Typography from "@mui/material/Typography";
import {AppBar, Toolbar} from "@mui/material";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import NavbarSidebar from "./NavbarSidebar";
import { useNavigate } from "react-router-dom";

interface NavProps {
    onHandleMenuOpen: () => void,
    onHandleWitchOpen: () => void,
}

function Navbar({onHandleMenuOpen, onHandleWitchOpen}: NavProps) {
    const navigate = useNavigate();

    function handleLogOut() {
        fetch("/logout", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: "{}",
        })
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                navigate("/");
            })
            .catch(error => {
                window.alert(error);
            });
    }

    return (
        <>
            <AppBar position="fixed" sx={{backgroundColor: 'black', zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Box ml={5} mr={5}>
                    <Toolbar>
                        <Typography variant="h4" sx={{flexGrow: 1}}>
                            Fantasy tavern
                        </Typography>
                        <Typography variant="h6" sx={{flexGrow: 1.3, justifyContent: 'center'}}>
                            {/*(name of current room)*/}
                        </Typography>
                        <Button color="inherit" onClick={handleLogOut}>Log out</Button>
                    </Toolbar>
                </Box>
            </AppBar>
            <NavbarSidebar onHandleMenuOpen={onHandleMenuOpen} onHandleWitchOpen={onHandleWitchOpen}/>
        </>
    )
}

export default Navbar;