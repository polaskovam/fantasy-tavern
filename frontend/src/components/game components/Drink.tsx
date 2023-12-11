import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {CardContent} from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

interface TDrinkProps {
    onIncrease: (name: string) => void,
    onDecrease: (name: string) => void,
    name: string,
    count: number,
    drinkPrice: number,
}

function Drink({onIncrease, onDecrease, name, count, drinkPrice}: TDrinkProps) {
    return (
        <Grid item xs={4} sx={{mb: 1}}>
            <Card sx={{width: 120, mx: "auto"}}>
                <CardContent sx={{px: 2, pt: 1, pb: "0 !important"}}>
                    <Typography variant="body2" sx={{fontSize: 14, color: "red", pb: 0, mt: 0}} align="right" gutterBottom>
                        Alcoholic
                    </Typography>
                    <CardMedia
                        sx={{ height: 88, width: 88, justifyContent: "center"}}
                        image="/images/margarita.jpg"
                        title="margarita"
                    />
                    <Typography variant="h6" mt={1} align="center" fontWeight="bold">
                        {name[0].toUpperCase()+name.slice(1)}
                    </Typography>
                    <Typography align="center">
                        {drinkPrice} coins
                    </Typography>
                    <Box display="flex" alignItems="center" justifyContent="center" sx={{pb: 1}}>
                        <IconButton aria-label="subtract" sx={{mr: 1}} color="error" onClick={() => onDecrease(name)}>
                            <RemoveIcon />
                        </IconButton>
                        <Typography variant="h6">{count}</Typography>
                        <IconButton aria-label="add" sx={{ml: 1}} color="success" onClick={() => onIncrease(name)}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Drink;