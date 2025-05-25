import React, { memo } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    TextField,
} from '@mui/material';

const AddUserDialog = memo(({ open, onClose, form, onFormChange, onSubmit }) => {
    const handleInputChange = (field) => (e) => {
        const value = field === 'avatar' ? e.target.files[0] : e.target.value;
        onFormChange(field, value);
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add a user</DialogTitle>
            <DialogContent>
                <TextField
                    onChange={handleInputChange('first_name')}
                    value={form.first_name}
                    autoFocus
                    required
                    margin="dense"
                    id="fName"
                    label="First Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handleInputChange('last_name')}
                    value={form.last_name}
                    required
                    margin="dense"
                    id="Lname"
                    label="Last Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handleInputChange('email')}
                    value={form.email}
                    required
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    onChange={handleInputChange('avatar')}
                    margin="dense"
                    id="avatar"
                    label="Profile Picture"
                    type="file"
                    fullWidth
                    variant="standard"
                    InputLabelProps={{ shrink: true }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onSubmit} type="submit" variant="contained">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
});

export default AddUserDialog;
