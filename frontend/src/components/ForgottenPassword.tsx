import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function DialogPass(props: { open: boolean; onClose: (e: any) => void;}) {
    return (
        <React.Fragment>
            <Dialog open={props.open} onClose={props.onClose}>
                <DialogTitle>Restore forgotten password</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter you username and email.
                        New password will be send to you email address.
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Username"
                        type="username"
                        fullWidth
                        variant="outlined"
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose}>Cancel</Button>
                    <Button onClick={props.onClose}>Send</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default DialogPass;