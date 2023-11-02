import React, {ReactElement} from "react";
import Container from "@mui/material/Container";
import WelcomePage from "../components/WelcomePage";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";


function MainPage(): ReactElement {
    return (
        <Container component="main" maxWidth="md">
            <Grid container component="main" justifyContent="center" rowSpacing={5}>
                <Grid item xs={12} mt={3}>
                    <Typography variant="h1" component="h2" textAlign="center">
                        Fantasy Tavern
                    </Typography>
                </Grid>
            </Grid>
            {/*Tady se načítají komponenty, měly by být v grid item*/}
            <Grid container justifyContent="center">
                <WelcomePage />
            </Grid>
        </Container>
    );
}

export default MainPage;