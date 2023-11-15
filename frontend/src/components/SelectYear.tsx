import React from "react";
import InputLabel from '@mui/material/InputLabel';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Grid from "@mui/material/Grid";
import {FormControl} from "@mui/material";

function SelectYear() {
    const generateYearOption = () => {
        const arr: number[] = [];

        const startYear = new Date().getFullYear();
        const endYear: number = 1970;

        for (let i = endYear; i <= startYear; i++) {
            arr.push(i)
        }
        return arr;
    }

    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Grid item ml={8}>
            <FormControl required>
                <InputLabel id="select-label">Year of birth</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="select-year-option"
                    value={age}
                    label="Year of birth"
                    onChange={handleChange}
                    sx={{minWidth: 150}}
                >
                    {generateYearOption().map((year) => (
                        <MenuItem key={year} value={year}>{year}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    )

}

export default SelectYear;