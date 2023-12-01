import React, {useState} from "react";
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
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

interface WitchProps {
    onHandleWitchOpen: () => void
}

function Witch({onHandleWitchOpen}: WitchProps) {
    return (
        <Dialog open>
            <DialogActions sx={{p: 0}}>
                <IconButton onClick={onHandleWitchOpen}>
                    <CloseIcon/>
                </IconButton>
            </DialogActions>
            <DialogTitle sx={{pt: 0}}>
                <Typography variant="h5" sx={{textAlign: "center", mb: 0, pt: 0}}>
                    Guessing game
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Box border={1} sx={{m: 1, p: 2}}>
                    <Typography>
                        What is the biggest animal of all?
                    </Typography>
                </Box>
                <Box sx={{width: 500}}>
                    <RadioGroup
                        aria-labelledby="answer-options"
                        name="answer-options"
                    >
                        <FormControlLabel value="Option 1" control={<Radio/>} label="Option 1"/>
                        <FormControlLabel value="Option 2" control={<Radio/>} label="Option 2"/>
                        <FormControlLabel value="Option 3" control={<Radio/>} label="Option 3"/>
                    </RadioGroup>
                </Box>
            </DialogContent>
            <DialogActions style={{ justifyContent: 'center' }}>
                <Button variant="contained" sx={{mb: 2}}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Witch;