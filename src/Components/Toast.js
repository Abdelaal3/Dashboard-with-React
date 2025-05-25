import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Toast({ open, message, status }) {





    return (
        <div>

            <Snackbar open={open} autoHideDuration={6000}  >
                <Alert

                    severity={status}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}