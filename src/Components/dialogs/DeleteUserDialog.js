import React, { memo } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
    Typography,
} from '@mui/material';

const DeleteUserDialog = memo(({ open, onClose, user, onDelete }) => {
    if (!user) return null;

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Delete User</DialogTitle>
            <DialogContent>
                <Typography>
                    Are you sure you want to delete user{' '}
                    <strong>{user.first_name} {user.last_name}</strong>?
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onDelete} variant="contained" color="error">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
});

export default DeleteUserDialog;
