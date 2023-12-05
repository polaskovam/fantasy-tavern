import React, {useState} from "react";
import Drink from "./Drink";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";

interface CountT {
    [name: string]: number,
}

interface MenuProps {
    onHandleMenuOpen: () => void,
}

function Menu({onHandleMenuOpen}: MenuProps) {
    const [count, setCount] = useState<CountT>({
        margarita: 0,
        vodka: 0,
        jaeger: 0,
        rum: 0,
    });

    const handleIncrease = (name: string) => {
        setCount((prevCount) => ({...prevCount, [name]: prevCount[name] + 1}))
    };

    const handleDecrease = (name: string) => {
        setCount((prevCount) => ({
            ...prevCount, [name]: prevCount[name] === 0 ? 0 : prevCount[name] - 1
        }))
    };

    function handleBuy() {
        console.log(count)
    }


    return (
        <Dialog open>
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
                        <Drink name="margarita" count={count.margarita} onIncrease={handleIncrease}
                               onDecrease={handleDecrease}/>
                        <Drink name="vodka" count={count.vodka} onIncrease={handleIncrease}
                               onDecrease={handleDecrease}/>
                        <Drink name="jaeger" count={count.jaeger} onIncrease={handleIncrease}
                               onDecrease={handleDecrease}/>
                        <Drink name="rum" count={count.rum} onIncrease={handleIncrease} onDecrease={handleDecrease}/>
                    </Grid>
                </Box>
            </DialogContent>
            <DialogActions sx={{justifyContent: "center"}}>
                <Button type="submit" variant="contained" size="large" onClick={handleBuy}>
                    Buy
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Menu;