import React, {ReactElement} from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Paper} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function WelcomePage(): ReactElement {
    return (
        <Grid item xs={12} mt={5}>
            <Paper elevation={24}>
                <Box p={9} pt={4} pb={2}>
                    <Box pb={3}>
                        <Typography variant="h4" textAlign="center" gutterBottom={true}>
                            Welcome to our Fantasy Tavern
                        </Typography>
                    </Box>
                    <Typography variant="body1" gutterBottom={true}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque arcu. Nam libero
                        tempore,
                        cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
                        facere
                        possimus, omnis voluptas assumenda est, omnis dolor repellendus. Nullam at arcu a est
                        sollicitudin euismod. In enim a arcu imperdiet malesuada. Sed elit dui, pellentesque a,
                        faucibus
                        vel, interdum nec, diam. Mauris metus. Aenean placerat. Ut enim ad minim veniam, quis
                        nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Typography variant="body1">
                        Integer in sapien. Etiam
                        ligula pede, sagittis quis, interdum ultricies, scelerisque eu. Nullam rhoncus aliquam
                        metus.
                        Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Duis risus. In sem justo,
                        commodo ut, suscipit at, pharetra vitae, orci. Nam quis nulla. Aenean fermentum risus id
                        tortor.
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id
                        quod
                        maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                        Maecenas
                        aliquet accumsan leo.
                    </Typography>
                    <Grid container mt={5} textAlign="center" justifyContent="center">
                        <Grid item xs={12} md={4}>
                            <Button size="large" variant="text">Sign In</Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button size="large" variant="text">Don't have an account? Sign Up</Button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Button size="large" variant="text">Visit without registration</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    )
}

export default WelcomePage;