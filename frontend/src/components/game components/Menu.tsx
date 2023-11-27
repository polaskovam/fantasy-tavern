import React from "react";
import Drink from "./Drink";
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Menu() {
    return (
        <Box sx={{height: 535, width: 500, mt: 10, ml: 10,  display: 'flex', flexDirection: 'column', alignItems: 'center', border: 1, py: 1}}>
            <Typography variant="h4" sx={{textAlign: "center", mb: 1}}>
                Menu
            </Typography>
            <Box sx={{overflowY: 'auto', height: 438, width: '100%', justifyContent: 'center'}}>
                <Grid container>
                    <Drink/>
                    <Drink/>
                    <Drink/>
                    <Drink/>
                </Grid>
            </Box>
            <Button type="submit" variant="contained" size="large">
                Buy
            </Button>
        </Box>
    )
}

export default Menu;