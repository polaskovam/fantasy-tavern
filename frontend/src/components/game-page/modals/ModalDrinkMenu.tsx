import React, {useEffect, useState} from "react";
import Drink from "./Drink";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import {useUserContext} from "../../context/UserContext";

interface NumRecord {
    [name: string]: number,
}

interface MenuProps {
    onHandleMenuOpen: () => void,
    drinks: Record<string, string | number>[],
}

function ModalDrinkMenu({onHandleMenuOpen, drinks}: MenuProps) {
    const [count, setCount] = useState<NumRecord>({});
    const [prices, setPrices] = useState<NumRecord>({});

    useEffect(() => {
        const countObj: NumRecord = {};
        const pricesObj: NumRecord = {};

        for (const item of drinks) {
            countObj[item.name] = 0;
            pricesObj[item.name] = Number(item.price);
        }

        setCount(countObj);
        setPrices(pricesObj);
    }, [])

    const getTotalCost = () => {
        let total = 0;

        for (const drink in count) {
            total += count[drink] * prices[drink];
        }
        return total;
    };

    const handleIncrease = (name: string) => {
        setCount((prevCount) => ({...prevCount, [name]: prevCount[name] + 1}));

    };

    const handleDecrease = (name: string) => {
        setCount((prevCount) => ({
            ...prevCount, [name]: prevCount[name] === 0 ? 0 : prevCount[name] - 1
        }));

    };

    const {user, setUser} = useUserContext();
    if (!user) {
        throw new Error("AccountBalance Balance: Not available");
    }

    function handleSubmit() {
        setUser((prevValue) => ({...prevValue, accountBalance: prevValue.accountBalance - getTotalCost()}));
        onHandleMenuOpen();
    }

    const isValidPurchase = getTotalCost() <= user.accountBalance;

    return (
        <Dialog open>
            <Box sx={{backgroundImage: `url("/images/old-paper.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <DialogActions sx={{p: 0}}>
                <IconButton onClick={onHandleMenuOpen}>
                    <CloseIcon/>
                </IconButton>
            </DialogActions>
            <DialogTitle sx={{pt: 0, textAlign: "center", mb: 0}} typography={"h4"}>
                Menu
            </DialogTitle>
            <DialogContent>
                <Box sx={{overflowY: 'auto', height: 488, width: '100%', justifyContent: 'center'}}>
                    <Grid container>
                        {Object.keys(count).map((drinkName) => (
                                <Drink
                                    key={drinkName}
                                    onIncrease={handleIncrease}
                                    onDecrease={handleDecrease}
                                    name={drinkName}
                                    count={count[drinkName]}
                                    drinkPrice={prices[drinkName]}
                                />
                            )
                        )}

                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions sx={{justifyContent: "center"}}>
                <Button type="submit" variant="contained" size="large" disabled={!isValidPurchase}
                        onClick={handleSubmit}>
                    Buy
                </Button>
            </DialogActions>
            </Box>
        </Dialog>
    )
}

export default ModalDrinkMenu;