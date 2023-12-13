import React, {ReactElement, useState} from "react";
import Container from "@mui/material/Container";
import Introduction from "./Introduction";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LoginForm from "./forms/LoginForm";
import RegistrationForm from "./forms/RegistrationForm";


function MainPage(): ReactElement {
    const [activeComponent, setActiveComponent] = useState("introduction");

    function handleComponentChange(componentName: string) {
        setActiveComponent(componentName);
    }

    return (
        <Container component="main" maxWidth="md">
            <Grid container component="main" justifyContent="center" rowSpacing={5}>
                <Grid item xs={12} mt={3}>
                    <Typography variant="h1" component="h2" textAlign="center">
                        Fantasy Tavern
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                {activeComponent === "introduction" && (
                    <Introduction
                        onLoginClick={() => handleComponentChange('login')}
                        onRegistrationClick={() => handleComponentChange('registration')}
                    />
                )}
                {activeComponent === 'login' && (
                    <LoginForm
                        onReturn={() => handleComponentChange("introduction")}
                        onRegistrationClick={() => handleComponentChange('registration')}
                    />
                )}
                {activeComponent === 'registration' && (
                    <RegistrationForm
                        onReturn={() => handleComponentChange("introduction")}
                        onLoginClick={() => handleComponentChange('login')}
                    />
                )}
            </Grid>
        </Container>
    );
}

export default MainPage;