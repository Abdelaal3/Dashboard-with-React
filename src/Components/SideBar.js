import { Link } from 'react-router-dom';

// Material UI //
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';



export default function SideBar({ change }) {


    const [activeIcon, setActiveIcon] = useState(''); // بدل click

    const handleClick = (iconName) => {

        setActiveIcon(iconName);

    };

    const active = {
        backgroundColor: '#2684FF',
        color: 'white',
        width: '60px',
        borderRadius: '0 10px 10px 0px',
        fontSize: '25px',
        margin: '10px 0 0 -7px',
        padding: '10px 0',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
        transition: 'transform 150ms ease-in-out',



    }



    function darkTheme() {
        change()
    }
    return (
        <>
            <Box sx={{
                position: 'fixed',
                cursor: 'pointer',
                top: 0,
                left: 0,
                width: '60px',
                height: '100vh',
                backgroundColor: (theme) => theme.palette.secondary.main,
                display: 'flex',
                flexDirection: 'column',
                zIndex: 1000,
            }}>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '30px',
                    paddingTop: '20px',
                    marginBottom: '50px',
                }}>

                    <BedtimeOutlinedIcon onClick={darkTheme} style={{ width: '30px', color: 'rgb(88, 88, 88)' }} />


                    <Link to="/">
                        <DashboardIcon onClick={() => handleClick('OtherHousesOutlinedIcon')} style={
                            activeIcon === 'OtherHousesOutlinedIcon'
                                ? active
                                : { color: 'rgb(88, 88, 88)' }
                        } />
                    </Link>
                    <hr style={{ width: '70%' }} />


                </div>


                <div style={{ height: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>




                    <Link to="/userlist">
                        <PeopleAltIcon onClick={() => handleClick('PersonOutlineOutlinedIcon')} style={
                            activeIcon === 'PersonOutlineOutlinedIcon'
                                ? active
                                : { color: 'rgb(88, 88, 88)' }
                        } />
                    </Link>


                    <Link to="/calendar">
                        <CalendarTodayOutlinedIcon onClick={() => handleClick('CalendarTodayOutlinedIcon')} style={
                            activeIcon === 'CalendarTodayOutlinedIcon'
                                ? active
                                : { color: 'rgb(88, 88, 88)' }
                        } />
                    </Link>



                    <hr style={{ width: '70%' }} />

                </div >

                <div style={{ height: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Link to="/faqs">
                        <InfoOutlineIcon onClick={() => handleClick('ChatBubbleOutlineOutlinedIcon')} style={
                            activeIcon === 'ChatBubbleOutlineOutlinedIcon'
                                ? active
                                : { color: 'rgb(88, 88, 88)' }
                        } />
                    </Link>
                </div>
                <div style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'space-around',
                    marginTop: 'auto',
                    padding: '30px'
                }}>
                    <Link to="/settings">
                        <SettingsOutlinedIcon onClick={() => handleClick('SettingsOutlinedIcon')} style={
                            activeIcon === 'SettingsOutlinedIcon'
                                ? active
                                : { color: 'rgb(88, 88, 88)' }
                        } />
                    </Link>
                </div>




            </Box>
        </>
    )
}