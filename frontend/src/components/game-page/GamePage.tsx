import React, {useState} from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import AccountBalance from "./AccountBalance";
import ModalDrinkMenu from "./modals/ModalDrinkMenu";
import ModalWitch from "./modals/ModalWitch";
import {UserContextProvider} from "../context/UserContext";

function GamePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isWitchOpen, setIsWitchOpen] = useState(false);

    function handleMenuOpen() {
        setIsMenuOpen(prevState => !prevState)
    }

    function handleWitchOpen() {
        setIsWitchOpen(prevState => !prevState)
    }

    return (
        <UserContextProvider>
            <Box>
                <Navbar onHandleMenuOpen={handleMenuOpen} onHandleWitchOpen={handleWitchOpen}/>
                <AccountBalance />
                {isMenuOpen && <ModalDrinkMenu onHandleMenuOpen={handleMenuOpen}/>}
                {isWitchOpen && <ModalWitch onHandleWitchOpen={handleWitchOpen}/>}
            </Box>
        </UserContextProvider>
    )
}

export default GamePage;