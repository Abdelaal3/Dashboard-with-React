
import egyptFlag from '../images/Flag_of_Egypt_Flat_Round-1024x1024.webp'
import { Link } from 'react-router-dom';
// Material UI //
import Avatar from '@mui/material/Avatar';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BallotIcon from '@mui/icons-material/Ballot';
import { Box, useMediaQuery } from '@mui/material';
import { UserButton } from "@clerk/clerk-react";


export default function Header() {




  const isSmall = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.main,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: isSmall ? 2 : 4,
        py: 2,
      }}
    >
      <Link to="/">
        <BallotIcon sx={{ color: 'rgb(88, 88, 88)', fontSize: 28, marginLeft: '50px', cursor: 'pointer' }} />
      </Link>


      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        {!isSmall && (
          <>

            <Avatar sx={{ width: 30, height: 30 }} alt="Egypt Flag" src={egyptFlag} />

            <NotificationsNoneIcon sx={{ color: 'rgb(88, 88, 88)', fontSize: 28, cursor: 'pointer' }} />
          </>
        )}
        <UserButton />

      </Box>
    </Box>
  );
}