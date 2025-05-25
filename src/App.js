import './App.css';
import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import { Button } from "@mui/material";


// Clerk //
import { SignIn, SignUp } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
// Clerk //


// Context //
import { ToastProvider } from './Contexts/ToastContext';

// Components //
import Header from './Components/Header';
import Footer from './Components/Footer';

import SideBar from './Components/SideBar';
import UsersList from './Components/UsersList';
import Setting from './Components/Settings';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import Calendar from './Components/Calendar';
import UserDetails from './Components/UserDetails';
import Faqs from './Components/Faqs';

// === Components === //


const theme = createTheme({

  typography: {
    fontFamily: 'Lexenda',
  },
  palette: {
    primary: {
      main: '#2684FF'
    },
    secondary: {
      main: '#F4F5FA',
    },

  },
});



const darkTheme = createTheme({
  typography: {
    fontFamily: 'Lexenda',
  },
  palette: {
    mode: 'dark',
    secondary: {
      main: '#1e1e2f',

    },
    primary: {
      main: '#2684FF',
    },
  },
});


function App() {
  const [darktheme2, setDarkTheme] = useState(theme)
  const [mode, setMode] = useState('normal');

  const { isSignedIn, user } = useUser();

  useEffect(() => {
    setMode(darktheme2 === darkTheme ? 'darkMood' : 'normal');
  }, [darktheme2]);




  const handleChange = () => {
    setDarkTheme(darktheme2 === theme ? darkTheme : theme);
  }



  if (!isSignedIn) {
    return (
      <Routes>
        <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" />} />
        <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up" />} />
        <Route
          path="*"

          element={
            <div style={{
              width: '100%',
              height: '100vh',
              margin: 'auto',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'rgb(229 241 252)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>

              <h1>User Management System</h1>

              <h2>Sign In</h2>
              <Link to="/sign-in">
                <Button variant="contained">  Sign in </Button>
              </Link>

              <h2>  Or Register</h2>
              <Link to="/sign-up">
                <Button variant="contained"> Sign up</Button>
              </Link>
            </div>
          }
        />
      </Routes>
    );
  }



  return (

    <ThemeProvider theme={darktheme2}>
      <ToastProvider >
        <div className="App" style={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: mode === 'darkMood' ? '#1e1e2f' : 'white',
          display: 'flex',
          flexDirection: 'column',
          flex: 1

        }}>
          <Header />

          {/* Container */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0' }}>


            {/* SideBar */}
            <div style={{ width: '4%', margin: '-20px 10px 0 0' }}>
              <SideBar darkTheme={darktheme2} change={handleChange} />
            </div>
            {/* === SideBar === */}

            {/* Content */}
            <div id='content' >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userlist" element={<UsersList />} />
                <Route path="/settings" element={<Setting />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/user/:id" element={<UserDetails />} />
                <Route path="/faqs" element={<Faqs />} />


                <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" />} />
                <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up" />} />

                {/* زوّد الصفحات اللي تحبها هنا */}
              </Routes>
            </div>
            {/* === Content === */}

          </div>
          {/* === Container === */}

          <main style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            margin: '20px 0'
          }}></main>




        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
