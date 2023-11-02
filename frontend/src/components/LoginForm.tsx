import React, {useState} from "react";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from "@mui/material";
import ForgottenPassword from "../components/ForgottenPassword";

interface DataT {
    username: string;
    password: string;
}

function LoginForm() {

    const [open, setOpen] = useState(false);
    const [data, setData] = useState<DataT>({username: "", password: ""});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(data);
        setData({username: "", password: ""})
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {name, value} = e.target;

        setData((prevData: DataT) => ({
            ...prevData,
            [name]: value
        }));
    }


    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    mt: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: "center",
                    maxWidth: "xs",
                }}>
                <Typography component="h1" variant="h4">
                    Sign in
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
                        onChange={handleChange}
                        value={data.username}
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
                        onChange={handleChange}
                        value={data.password}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                        onClick={handleSubmit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link onClick={handleClickOpen} variant="body2" underline="hover" sx={{cursor: "pointer"}}>
                                Forgot password?
                            </Link>
                            <ForgottenPassword open={open} onClose={handleClose}/>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2" underline="hover">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default LoginForm;