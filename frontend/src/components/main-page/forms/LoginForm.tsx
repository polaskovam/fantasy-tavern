import React, {useState} from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from "@mui/material/Link";
import {Paper} from "@mui/material";
import ForgottenPasswordForm from "./ForgottenPasswordForm";
import {useNavigate} from "react-router-dom";
import {useUserContext} from "../../context/UserContext";


interface DataT {
    username: string;
    password: string;
}

interface LoginProps {
    onReturn: () => void;
    onRegistrationClick: () => void;
}

function LoginForm(props: LoginProps) {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState<DataT>({username: "", password: ""});
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(data);

        fetch("/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            })
            .then(json => {
                console.log(json);
                // React context
                const {setUser} = useUserContext();
                setUser(json);

                navigate("/game-page");
            })
            .catch(error => {
                window.alert(error);
            });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {name, value} = e.target;

        setData((prevData: DataT) => ({
            ...prevData,
            [name]: value
        }));
    }

    const isFormValid = data.username.trim() !== "" && data.password.trim() !== "";

    return (
        <Paper elevation={24}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: "center",
                    maxWidth: "500px",
                    m: 3,
                }}>
                <Typography component="h1" variant="h4">
                    Sign in
                </Typography>
                <Box sx={{mt: 1}} component="form">
                    <TextField
                        margin="dense"
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
                        margin="dense"
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
                        disabled={!isFormValid}
                    >
                        Sign In
                    </Button>
                    <Grid container rowSpacing={6}>
                        <Grid item xs>
                            <Link onClick={handleClickOpen} variant="body2" underline="hover" sx={{cursor: "pointer"}}>
                                Forgot password?
                            </Link>
                            {open && <ForgottenPasswordForm open={open} onClose={handleClose}/>}
                        </Grid>
                        <Grid item>
                            <Link variant="body2" underline="hover" sx={{cursor: "pointer"}}
                                  onClick={props.onRegistrationClick}>
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                        <Grid item xs={12} textAlign="center">
                            <Link variant="body2" underline="hover" sx={{cursor: "pointer"}} onClick={props.onReturn}>
                                Back to Main page
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Paper>
    )
}

export default LoginForm;