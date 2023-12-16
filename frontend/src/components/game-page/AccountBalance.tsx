import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import {ListItemText, Paper} from "@mui/material";
import List from "@mui/material/List";
import ListItem from '@mui/material/ListItem';
import {useUserContext} from "../context/UserContext";
import Box from "@mui/material/Box";


function AccountBalance() {
    const {user} = useUserContext();
    if (!user) {
        throw new Error("Account Balance: Not available");
    }

    return (
        <Box>
            <Card sx={{
                width: 200,
                position: 'fixed',
                bottom: 10,
                right: 20,
                backgroundImage: `url("/images/old-paper.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
                p: 2
            }}>
                <Box sx={{textAlign: "center", backgroundColor: 'rgba(0, 0, 0, 0)', pt: 1}}>
                    <Typography variant="h4" >
                        {user.accountBalance}
                    </Typography>
                    <Typography>
                        coins
                    </Typography>
                </Box>
                <List style={{height: 180, overflowY: 'auto'}}>
                    <ListItem>
                        <ListItemText
                            primary="Margarita"
                            secondary="5x"
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                textAlign: 'left',
                            }}
                            secondaryTypographyProps={{
                                sx: {
                                    fontWeight: "bold",
                                    color: "black",
                                    fontSize: 16,
                                }
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
                            secondaryTypographyProps={{
                                sx: {
                                    fontWeight: "bold",
                                    color: "black",
                                    fontSize: 16,
                                }
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
                            secondaryTypographyProps={{
                                sx: {
                                    fontWeight: "bold",
                                    color: "black",
                                    fontSize: 16,
                                }
                            }}
                        />
                    </ListItem>
                </List>
            </Card>
        </Box>
    )
}

export default AccountBalance;