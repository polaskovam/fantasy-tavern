import React, {useState} from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import AvatarButton from "./AvatarButton";

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
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    }

    const [selectedRace, setSelectedRace] = useState<string | null>(null);

    const [selectedRole, setSelectedRole] = useState<string>("drunk");


    const handleSelect = (name: string, type?: string) => {
        if (type === 'race') {
            setSelectedRace(name);
        } else {
            setSelectedRole(name);
        }
    }


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
            <Grid container textAlign="center" justifyContent="center" sx={{mt: 2}} columnSpacing={1}>
                <Grid item xs={12}>
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
                <AvatarButton
                    name="bartender"
                    src="/images/bartender.png"
                    handleClick={() => handleSelect("bartender")}
                    isSelected={selectedRole === "bartender"}
                />
                <Grid item xs={12} pb={1} pt={1}>
                    <Typography>
                        My character's race will be:
                    </Typography>
                </Grid>
                {buttons.map((button) => (
                    <AvatarButton key={button.name} name={button.label} src={button.image}
                                  handleClick={() => handleSelect(button.name, "race")} isSelected={selectedRace === button.name}/>
                ))}
            </Grid>
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
                    <Grid item>
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