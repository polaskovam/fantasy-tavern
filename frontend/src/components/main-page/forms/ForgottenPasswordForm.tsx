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

function ForgottenPasswordForm(props: { open: boolean; onClose: (e?: any) => void; }) {
    const [data, setData] = useState<DataT>({username: "", email: ""});

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        fetch("/forgotten-password", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                window.alert("New password has been sent to your e-mail.")
                props.onClose();
            })
            .catch(error => {
                window.alert(error);
            });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const {name, value} = e.target;

        setData((prevData: DataT) => ({
            ...prevData,
            [name]: value
        }));
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
    const isFormValid = data.username.trim() !== "" && data.email.trim() !== "" && data.email !== '' && isEmailValid;


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
                        error={!isEmailValid && data.email !== ''}
                        helperText={!isEmailValid && data.email !== '' ? "Invalid email format!" : ""}
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

export default ForgottenPasswordForm;