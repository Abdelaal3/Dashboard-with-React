import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function SearcDialog({ openDialog, coloseDialog }) {


    const handleClickOpen = () => {
        openDialog()
    };

    const handleClose = () => {
        coloseDialog()
    };

    return (
        <React.Fragment>

            <Dialog
                open={openDialog}
                onClose={coloseDialog}

            >
                <DialogTitle>Search</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Search about everything
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={coloseDialog()}>Cancel</Button>
                    <Button type="submit">Subscribe</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
