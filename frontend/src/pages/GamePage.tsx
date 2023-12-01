import React, {useState} from "react";
import Navbar from "../components/game components/Navbar";
import Box from "@mui/material/Box";
import Account from "../components/game components/Account";
import Menu from "../components/game components/Menu";
import Witch from "../components/game components/Witch";

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
        <Box>
            <Navbar onHandleMenuOpen={handleMenuOpen} onHandleWitchOpen={handleWitchOpen}/>
            <Account/>
            {isMenuOpen && <Menu onHandleMenuOpen={handleMenuOpen}/>}
            {isWitchOpen && <Witch onHandleWitchOpen={handleWitchOpen} />}


        </Box>
    )
}

export default GamePage;