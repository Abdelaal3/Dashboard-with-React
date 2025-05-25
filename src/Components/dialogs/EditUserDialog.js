import React, { memo } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    TextField,
} from '@mui/material';

const EditUserDialog = memo(({ open, onClose, user, setUser, onSave }) => {
    if (!user) return null;

    const handleChange = (field) => (e) => {
        setUser({ ...user, [field]: e.target.value });
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit User</DialogTitle>
            <DialogContent>
                <TextField
                    label="First Name"
                    value={user.first_name}
                    onChange={handleChange('first_name')}
                    fullWidth
                    margin="dense"
                    autoFocus
                />
                <TextField
                    label="Last Name"
                    value={user.last_name}
                    onChange={handleChange('last_name')}
                    fullWidth
                    margin="dense"
                />
                <TextField
                    label="Email"
                    value={user.email}
                    onChange={handleChange('email')}
                    fullWidth
                    margin="dense"
                    type="email"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={() => onSave(user)} variant="contained">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
});

export default EditUserDialog;
