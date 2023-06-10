import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Typography, Breadcrumbs, Link, TextField, FormControlLabel, Checkbox, Button, Snackbar, Alert } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


const theme = createTheme({
    palette: {
       primary: {
          main: '#FFFBEB',
          light: '#FFFCF2',
          dark: '#FFF8DD',
          contrastText: '#000000',
       },
       secondary: {
        main: '#F8CBA6',
        contrastText: '#FFFFFF',
     },
    },
    typography: {
      "fontFamily": `"League Spartan", sans-serif`,
      "fontWeightRegular": 300,
    }
  });

function contacts() {
  return (

    <ThemeProvider theme={theme}>
        <Navbar/>

            <div className='contacts-container'>

              <div className='contacts-banner-section'>
                <Typography variant='h2' component='h1' className='contacts-heading'> Kontakti </Typography>
                <IconBreadcrumbs/>
              </div>

              <ContactsForm/>

            </div>

        <Footer/>
    </ThemeProvider>

  )
};


function IconBreadcrumbs() {
    return (
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}
            color="inherit"
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Galvenā
          </Link>
          <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', fontSize: '20px' }}
            color="inherit"
            href="/contacts"
          >
            <PermContactCalendarIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Kontakti
          </Link>
        </Breadcrumbs>
    );
};


const ContactsForm = () => {
    const [open, setOpen] = React.useState(false);
    const [openError, setOpenError] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
    const handleClickError = () => {
        setOpenError(true);
      };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };
    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenError(false);
      };


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_89wt498', 'template_d0c3nxf', form.current, 'gW3p9kpSlnCDrn7-I')
        .then((result) => {
            console.log(result.text);
            handleClick();
        }, (error) => {
            console.log(error.text);
            handleClick2();
        });
    };

    return(

        <div className="contacts-form-container">
            <Typography variant='h4'> Atstājiet mums savas atsauksmes </Typography>
            <Typography variant='h5'> Mēs sazināsimies ar jums tuvākajā laikā. </Typography>
            <Typography variant='subtitle1'> Ja jums ir preces, kuras vēlaties pārdot mūsu lapā, nosūtiet mums savu numuru.</Typography>
            
            <form ref={form} onSubmit={sendEmail} className='contacts-form'>
                <div className="contacts-form-div">
                    <TextField required className='contacts-form-input' name='name' label="Vārds" variant="outlined" color='secondary'/>
                    <TextField required className='contacts-form-input' type='email' name='email' label="E-pasts" variant="outlined" color='secondary'/>
                </div>
                <TextField required label="Ziņa" type='text' name='message' variant="outlined" color='secondary' multiline rows={6}/>
                <FormControlLabel control={<Checkbox color='secondary' defaultChecked />} label="Saņemt īpašos piedāvājumus un akcijas uz manu e-pastu." />

                <Button className='contacts-form-submit' type='submit'> Sūtīt </Button>
            </form>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%', fontSize:'16px', fontWeight: '500' }}>
                Jūsu ziņojums tika nosūtīts! {`\u{1F609}`}
                </Alert>
            </Snackbar>

            <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
                <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%', fontSize:'16px', fontWeight: '500' }}>
                Kautkas notika ne tā! Mēģiniet vēlreiz vēlāk.
                </Alert>
            </Snackbar>

        </div>
        
    )
};



export default contacts;