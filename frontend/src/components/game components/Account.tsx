import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {ListItemText, Paper} from "@mui/material";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';

function Account() {
    return (
        <Card sx={{width: 230, position: 'fixed', bottom: 10, right: 20, backgroundColor: "#f3dfc1"}}>
            <Paper style={{padding: 16,  textAlign:"center", backgroundColor:"#f6e8d3"}}>
                <Typography variant="h4" gutterBottom>
                    2000
                </Typography>
                <Typography>
                    Money Balance
                </Typography>
            </Paper>
            <List style={{height: 180, overflowY: 'auto'}}>
                <ListItem>
                    <ListItemText
                        primary="Margarita"
                        secondary="5x"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            textAlign: 'left'
                        }}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Tequilla"
                        secondary="2x"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            textAlign: 'left'
                        }}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Vodka"
                        secondary="3x"
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            textAlign: 'left'
                        }}
                    />
                </ListItem>
            </List>
        </Card>
    )
}

export default Account;