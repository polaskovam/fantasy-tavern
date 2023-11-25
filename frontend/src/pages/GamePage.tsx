import React from "react";
import Container from "@mui/material/Container";
import Navbar from "../components/game components/Navbar";
import Box from "@mui/material/Box";
import Account from "../components/game components/Account";
import Drink from "../components/game components/Drink";
function GamePage() {
    return (
        <Box>
            <Navbar />
            <Account />
            <Drink />


        </Box>
    )
}

export default GamePage;