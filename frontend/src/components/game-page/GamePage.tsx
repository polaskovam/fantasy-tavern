import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import AccountBalance from "./AccountBalance";
import ModalDrinkMenu from "./modals/ModalDrinkMenu";
import ModalWitch from "./modals/ModalWitch";
import {UserContextProvider} from "../context/UserContext";


// Simulation of using data from BE
const fakeDrinks = [
    {
        name: "margarita",
        price: "150",
    },
    {
        name: "vodka",
        price: "50",
    },
    {
        name: "jaeger",
        price: "100",
    },
    {
        name: "rum",
        price: "80",
    }
];


function GamePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isWitchOpen, setIsWitchOpen] = useState(false);
    const [drinks, setDrinks] = useState<Record<string, string | number>[]>([]);

    useEffect(() => {
        fetch("/drinkMenu", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                    if (!response.ok) {
                        throw new Error('Error fetching drinks:');
                    }
                    return response.json();
                }
            )
            .then(data => {
                console.log(data);
                setDrinks(data);
            })
            .catch(error => {
                console.error('Error fetching drinks:', error);
                setDrinks(fakeDrinks);
            });
    }, []);

    function handleMenuOpen() {
        setIsMenuOpen(prevState => !prevState)
    }

    function handleWitchOpen() {
        setIsWitchOpen(prevState => !prevState)
    }

    return (
        <UserContextProvider>
            <Box width={1} component="div"
                 display="flex"
                 height="100vh"
                 sx={{backgroundImage: `url("/images/game-background2.png")`}}>
                <Navbar onHandleMenuOpen={handleMenuOpen} onHandleWitchOpen={handleWitchOpen}/>
                <AccountBalance/>
                {isMenuOpen && <ModalDrinkMenu drinks={drinks} onHandleMenuOpen={handleMenuOpen}/>}
                {isWitchOpen && <ModalWitch onHandleWitchOpen={handleWitchOpen}/>}
            </Box>
        </UserContextProvider>
    )
}

export default GamePage;