import React, {useState} from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import AvatarButton from "./AvatarButton";

interface RegDataT {
    username: string,
    password: string,
    passwordCheck: string,
    email: string,
    age: number,
}

interface RegistrationProps {
    onReturn: () => void;
    onLoginClick: () => void;
}

const buttons = [
    {
        name: "human",
        label: "Human",
        image: "/images/human.png",
    },
    {
        name: "orc",
        label: "Orc",
        image: "/images/orc.png",
    },
    {
        name: "elf",
        label: "Elf",
        image: "/images/elf.png",
    },
    {
        name: "goblin",
        label: "Goblin",
        image: "/images/goblin.png",
    },
    {
        name: "undead",
        label: "Undead",
        image: "/images/undead.png",
    },
];


function RegistrationForm(props: RegistrationProps) {
    const [selectedRace, setSelectedRace] = useState<string | null>("human");
    const [selectedRole, setSelectedRole] = useState<string>("drunk");
    const [isFirstVisible, setIsFirstVisible] = useState(true);
    const [regData, setRegData] = useState<RegDataT>({
        username: "",
        password: "",
        passwordCheck: "",
        email: "",
        age: 30,
    });

    //Functions
    const handleSelect = (name: string, type?: string) => {
        if (type === 'race') {
            setSelectedRace(name);
        } else {
            setSelectedRole(name);
        }
    }

    function nextPart() {
        setIsFirstVisible(prevState => !prevState)
    }

    // Rest of a form
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        const {name, value} = e.target;

        setRegData((prevData: RegDataT) => ({
            ...prevData,
            [name]: value
        }));
    }

    function checkAge(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
        let age: number = Number(e.target.value);

        if (age <= 0) {
            age = 1;
        } else if (age > 10000) {
            age = 10000;
        }

        setRegData((prevData: RegDataT) => ({
            ...prevData,
            age: age,
        }));
    }

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();

        const formData = {
            ...regData,
            selectedRace,
            selectedRole
        }

        fetch("/register", {
            method: 'POST',
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                window.alert("Registration successful! You can now sign in.")
                props.onLoginClick();
            })
            .catch(error => {
                window.alert(error);
            });
    }

    const checkPassword = regData.password === regData.passwordCheck;

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(regData.email);

    const isFormValid = regData.username.trim() !== "" && checkPassword && isEmailValid && regData.email !== '';

    return (
        <Box
            sx={{
                mt: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: "center",
                maxWidth: "500px",
            }}>
            <Typography component="h1" variant="h4">
                Registration form
            </Typography>
            <Box sx={{mt: 1}}>
                {isFirstVisible ? (
                    <>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            value={regData.username}
                            autoComplete="username"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={regData.password}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            error={!checkPassword}
                            helperText={!checkPassword ? 'Passwords do not match!' : ''}
                            name="passwordCheck"
                            label="Password Check"
                            type="password"
                            id="passwordCheck"
                            value={regData.passwordCheck}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            error={!isEmailValid && regData.email !== ''}
                            helperText={!isEmailValid && regData.email !== '' ? "Invalid email format!" : ""}
                            name="email"
                            label="Email address"
                            type="email"
                            id="email"
                            autoComplete="email"
                            value={regData.email}
                            onChange={handleChange}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                            onClick={nextPart}
                            disabled={!isFormValid}
                        >
                            Next
                        </Button>
                    </>
                ) : (
                    <Grid container textAlign="center" justifyContent="center" alignItems="center" sx={{mt: 2}}
                          columnSpacing={1}>
                        <Grid item xs={12}>
                            <Typography>
                                Character's age:
                            </Typography>
                            <TextField
                                sx={{width: 160}}
                                margin="normal"
                                name="age"
                                label="Character's Age"
                                type="number"
                                id="age"
                                onChange={handleChange}
                                value={regData.age}
                                onBlur={checkAge}
                            />
                        </Grid>
                        <Grid item xs={12} mt={3}>
                            <Typography>
                                My character will be:
                            </Typography>
                        </Grid>
                        <AvatarButton
                            name="drunk"
                            src="/images/drunk.png"
                            handleClick={() => handleSelect("drunk")}
                            isSelected={selectedRole === "drunk"}
                        />
                        {/*<AvatarButton*/}
                        {/*    name="bartender"*/}
                        {/*    src="/images/bartender.png"*/}
                        {/*    handleClick={() => handleSelect("bartender")}*/}
                        {/*    isSelected={selectedRole === "bartender"}*/}
                        {/*/>*/}
                        <Grid item xs={12} pb={1} pt={1} mt={3}>
                            <Typography>
                                My character's race will be:
                            </Typography>
                        </Grid>
                        {buttons.map((button) => (
                            <AvatarButton key={button.name} name={button.label} src={button.image}
                                          handleClick={() => handleSelect(button.name, "race")}
                                          isSelected={selectedRace === button.name}
                            />
                        ))}
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </Button>
                    </Grid>
                )}
                <Grid container rowSpacing={6}>
                    {!isFirstVisible ? (
                        <Grid item xs>
                            <Link variant="body2" underline="hover" sx={{cursor: "pointer"}} onClick={nextPart}>
                                Back to first step
                            </Link>
                        </Grid>
                    ) : ""}
                    <Grid item xs textAlign="right">
                        <Link variant="body2" underline="hover" sx={{cursor: "pointer"}} onClick={props.onLoginClick}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                    <Grid item xs={12} textAlign="center" mb={2}>
                        <Link variant="body2" underline="hover" sx={{cursor: "pointer"}} onClick={props.onReturn}>
                            Back to Main page
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default RegistrationForm;