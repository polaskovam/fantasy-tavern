import React, {useState} from "react";
import Container from "@mui/material/Container";
import Navbar from "../components/game components/Navbar";
import Box from "@mui/material/Box";
import Account from "../components/game components/Account";
import Menu from "../components/game components/Menu";
function GamePage() {
    const[isOpen, setIsOpen] = useState(false);

    function handleOpen() {
        setIsOpen(prevState => !prevState)
    }


    return (
        <Box>
            <Navbar onHandleOpen={handleOpen} />
            <Account />
            {isOpen && <Menu onHandleOpen={handleOpen}/>}

        </Box>
    )
}

export default GamePage;