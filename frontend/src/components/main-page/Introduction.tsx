import React, {ReactElement} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface IntroductionProps {
    onLoginClick: () => void;
    onRegistrationClick: () => void;
}

function Introduction(props: IntroductionProps): ReactElement {
    return (
        <Grid item xs={12} mt={3} mr={8} ml={8} >
            <Paper elevation={24}>
                <Box p={6} pt={4} pb={2}>
                    <Box pb={3}>
                        <Typography variant="h4" textAlign="center" gutterBottom={true}>
                            Welcome to our Fantasy Tavern
                        </Typography>
                    </Box>
                    <Typography variant="body1" gutterBottom={true}>
                        Step into a realm where the elixirs are as enchanting as the stories shared, and the ambiance is
                        steeped in the magic of camaraderie. Our Fantasy Tavern invites you to indulge in a captivating
                        experience, where the only quest is to savor the finest concoctions crafted with a touch of
                        fantasy flair.
                    </Typography>
                    <Typography variant="body1" gutterBottom={true}>
                        Within these hallowed walls, we specialize in elixirs that transport your taste buds to realms
                        unknown. From potions that shimmer in iridescent hues to brews that carry the essence of
                        mythical landscapes, every drink is a sip into the extraordinary. Whether you seek the bold
                        strength of a Dragon's Roar or the subtle elegance of a Faery's Nectar, our menu promises a
                        journey through the realms of flavor.
                    </Typography>
                    <Typography variant="body1">
                        So, join us in raising your enchanted goblets high, as we toast to the magic of good company and
                        extraordinary elixirs. The Fantasy Tavern is more than a place to drink! It's a
                        celebration of the fantastical, one sip at a time.
                    </Typography>
                    <Grid container mt={5} textAlign="center" justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <Button size="large" variant="text" onClick={props.onLoginClick}>Sign In</Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button size="large" variant="text" onClick={props.onRegistrationClick}>Don't have an
                                account? Sign Up</Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button size="large" variant="text" disabled>Visit without registration</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    )
}

export default Introduction;