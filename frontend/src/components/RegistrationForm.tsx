import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

interface RegistrationProps {
    onReturn: () => void;
    onLoginClick: () => void;
}

function RegistrationForm(props: RegistrationProps) {
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    }
    return (
        <Box
            sx={{
                mt: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                maxWidth: "500px",
            }}>
            <Typography component="h1" variant="h4">
                Registration form
            </Typography>
            <Box sx={{mt: 1}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    label="Email address"
                    type="email"
                    id="email"
                    autoComplete="email"
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
                    onClick={handleSubmit}
                >
                    Sign Up
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link variant="body2" underline="hover" sx={{cursor: "pointer"}} onClick={props.onReturn}>
                            Back to Main page
                        </Link>
                    </Grid>
                    <Grid item >
                        <Link variant="body2" underline="hover" sx={{cursor: "pointer"}} onClick={props.onLoginClick}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default RegistrationForm;