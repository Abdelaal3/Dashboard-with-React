import { Box } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.main,
        textAlign: 'center',
        padding: '2px',
      }}
    >
      <h4 style={{
        fontFamily: 'Lexenda',
        fontWeight: '300',
        fontSize: '13px'
      }}> Made with ❤️ by Mahmoud Abdelaal © 2025</h4>
    </Box>
  );
}