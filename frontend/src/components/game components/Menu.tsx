import React, {useState} from "react";
import Drink from "./Drink";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

interface CountT {
    [name: string]: number,
}

function Menu() {
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
        setCount((prevCount) => ({...prevCount,  [name]: prevCount[name] === 0 ? 0 : prevCount[name] - 1
    }))
    };


    return (
        <Box sx={{
            height: 535,
            width: 500,
            mt: 10,
            ml: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: 1,
            py: 1
        }}>
            <Typography variant="h4" sx={{textAlign: "center", mb: 1}}>
                Menu
            </Typography>
            <Box sx={{overflowY: 'auto', height: 438, width: '100%', justifyContent: 'center'}}>
                <Grid container>
                    <Drink name="margarita" count={count.margarita} onIncrease={handleIncrease} onDecrease={handleDecrease}/>
                    <Drink name="vodka" count={count.vodka} onIncrease={handleIncrease} onDecrease={handleDecrease}/>
                    <Drink name="jaeger" count={count.jaeger} onIncrease={handleIncrease} onDecrease={handleDecrease}/>
                    <Drink name="rum" count={count.rum} onIncrease={handleIncrease} onDecrease={handleDecrease}/>
                </Grid>
            </Box>
            <Button type="submit" variant="contained" size="large">
                Buy
            </Button>
        </Box>
    )
}

export default Menu;