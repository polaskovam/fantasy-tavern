import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {Avatar} from "@mui/material";
import Typography from "@mui/material/Typography";

interface AvatarProps {
    name: string;
    src: string;
    handleClick?: () => void;
    isSelected: boolean;
}

function AvatarButton(props: AvatarProps) {
    return (
        <Grid item>
                <Button onClick={props.handleClick}>
                    <Grid container justifyContent="center" alignItems="center" textAlign="center" rowSpacing={1} direction="column">
                        <Grid item xs={12}>
                            <Avatar alt={props.name} src={props.src} sx={{
                                width: 70,
                                height: 70,
                                border: props.isSelected ? '5px solid #b53faf' : 'none',
                            }}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>{props.name}</Typography>
                        </Grid>
                    </Grid>
                </Button>
        </Grid>
    )
}

export default AvatarButton;
