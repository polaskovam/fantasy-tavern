import React, {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface DataT {
    username: string;
    email: string;
}

function ForgottenPassword(props: { open: boolean; onClose: (e?: any) => void; }) {

    const [data, setData] = useState<DataT>({username: "", email: ""});

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log(data);
        setData({username: "", email: ""});
        props.onClose();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {name, value} = e.target;

        setData((prevData: DataT) => ({
            ...prevData,
            [name]: value
        }));
    }
    const isFormValid = data.username.trim() !== "" && data.email.trim() !== "";

    return (
        <>
            <Dialog open={props.open} onClose={props.onClose}>
                <DialogTitle>
                    Restore forgotten password
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter you username and email.
                        New password will be send to you email address.
                    </DialogContentText>
                    <TextField
                        margin="dense"
                        id="username2"
                        label="Username"
                        type="username"
                        fullWidth
                        name="username"
                        variant="outlined"
                        onChange={handleChange}
                        value={data.username}
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        name="email"
                        variant="outlined"
                        onChange={handleChange}
                        value={data.email}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onClose}>Cancel</Button>
                    <Button onClick={handleSubmit} disabled={!isFormValid}>Send</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ForgottenPassword;