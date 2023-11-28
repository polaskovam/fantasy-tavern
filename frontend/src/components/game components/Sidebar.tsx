import React from "react";
import {Drawer} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';


const drawerWidth = 65;

interface SideBarProps {
    onHandleOpen: () => void,
};

function Sidebar({onHandleOpen}: SideBarProps) {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
            }}
            PaperProps={
                {
                    sx: {backgroundColor: 'green'}
                }
            }
        >
            <Toolbar/>
            <Box sx={{overflowX: 'hidden'}}>
                <List>
                    <ListItem button>
                        <Tooltip title={<span style={{fontSize: 14}}>Rooms</span>} placement="right" arrow>
                            <ListItemIcon sx={{mt: 2}}>
                                <MeetingRoomIcon fontSize="large" sx={{color: 'white'}}/>
                            </ListItemIcon>
                        </Tooltip>
                    </ListItem>
                    <ListItem button onClick={onHandleOpen}>
                        <Tooltip title={<span style={{fontSize: 14}}>Menu</span>} placement="right" arrow>
                            <ListItemIcon sx={{mt: 3}}>
                                <MenuBookIcon fontSize="large" sx={{color: 'white'}}/>
                            </ListItemIcon>
                        </Tooltip>
                    </ListItem>
                    <ListItem button>
                        <Tooltip title={<span style={{fontSize: 14}}>Guessing game</span>} placement="right" arrow>
                            <ListItemIcon sx={{mt: 3}}>
                                <QuestionMarkIcon fontSize="large" sx={{color: 'white'}}/>
                            </ListItemIcon>
                        </Tooltip>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}

export default Sidebar;