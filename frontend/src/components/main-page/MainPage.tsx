import React, {ReactElement, useState} from "react";
import Container from "@mui/material/Container";
import Introduction from "./Introduction";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LoginForm from "./forms/LoginForm";
import RegistrationForm from "./forms/RegistrationForm";
import Box from "@mui/material/Box";

function MainPage(): ReactElement {
    const [activeComponent, setActiveComponent] = useState("introduction");

    function handleComponentChange(componentName: string) {
        setActiveComponent(componentName);
    }

    return (
        <Box width={1} sx={{backgroundImage: `url("images/main-background1.png")`}}
             component="div"
             display="flex"
             justifyContent="center"
             height="100vh">
            <Container component="main" maxWidth="md" sx={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
                <Grid container justifyContent="center" mt={17}>
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
        </Box>
    );
}

export default MainPage;