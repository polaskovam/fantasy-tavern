import React from "react";
import {Drawer} from "@mui/material";
// import SportsBarIcon from '@mui/icons-material/SportsBar';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import Box from "@mui/material/Box";
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 65;

interface SideBarProps {

};

function Sidebar(props: SideBarProps) {
    return(
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
              }}
            PaperProps={
          {
              sx:{backgroundColor: 'green'}
          }
            }

        >
            <Toolbar />
            <Box sx={{overflowX: 'hidden'}}>
                <List>
                    <ListItem button >
                        <ListItemIcon sx={{mt:2}} >
                            <MeetingRoomIcon fontSize="large" sx={{ color: 'white' }}/>
                        </ListItemIcon>
                    </ListItem>
                    <Divider sx={{ backgroundColor: 'white' }}/>
                    <ListItem button>
                        <ListItemIcon sx={{mt:3}}>
                            <MenuBookIcon fontSize="large" sx={{ color: 'white' }}/>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon sx={{mt:3}}>
                            <QuestionMarkIcon fontSize="large" sx={{ color: 'white' }}/>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Box>

        </Drawer>
    )
}

export default Sidebar;