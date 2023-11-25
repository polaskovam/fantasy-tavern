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

function Drink() {
     const [count, setCount] = useState(0);

     const handleIncrease = () => {
         setCount((prevCount) => prevCount + 1);
     };

     const handleDecrease = () => {
         setCount((prevCount) => (prevCount === 0 ? 0 : prevCount - 1));
     };


    return (
        <Grid item sx={{mt:10, ml:10}}>
            <Card sx={{width: 170}}>
                <CardContent sx={{px:2, pt: 1, pb: "0 !important"}}>
                    <Typography variant="body2" sx={{fontSize: 14, color: "red", pb: 1}} mt={0} align="right" gutterBottom>
                        Alcoholic
                    </Typography>
                    <CardMedia
                        sx={{ height: 138, width: 138, justifyContent: "center"}}
                        image="/images/margarita.jpg"
                        title="margarita"
                    />
                    <Typography variant="h6" mt={1} align="center">
                        Margarita
                    </Typography>
                    <Box display="flex" alignItems="center" justifyContent="center" sx={{mt:1, pb: 1}}>
                        <IconButton aria-label="subtract" sx={{mr:1}} color="error" onClick={handleDecrease}>
                            <RemoveIcon />
                        </IconButton>
                        <Typography variant="h5">{count}</Typography>
                        <IconButton aria-label="add" sx={{ml:1}} color="success" onClick={handleIncrease}>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Drink;