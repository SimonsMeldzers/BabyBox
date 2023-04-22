import React from 'react';

import { Typography } from '@mui/material';

import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';

import Link from 'next/link';



function Footer() {
  return (
    <div className='footer-container'>

        <div className='footer-column'>
            <Typography variant='h3'> Kontakti </Typography>

            <div style={{display:'flex'}}>
                <LocalPhoneOutlinedIcon id='phone' fontSize=''/>
                <Typography variant='subtitle1' className='footer-phone'> +371 20334412</Typography>
            </div>

            <div style={{display:'flex'}}>
                <EmailOutlinedIcon id='mail' fontSize=''/>
                <Typography variant='subtitle1' className='footer-phone'> babybox@gmail.com </Typography>
            </div>

            <Typography variant='subtitle1'>
                SIA &quot;Baby Box&quot; <br></br>
                Reģ. Nr.: 4242424242 <br></br>
                Jur. adrese: Rīgas iela 11-12, Rīga, LV-1001 <br></br>
                Bankas rekvizīti: SWEDBANK AS <br></br>
                SWIFT kods: HABALV22 <br></br>
                Konta Nr.: LV62HABA0551044665836 <br></br>
            </Typography>
        </div>

        <span id='footer-divider1'></span>

        <div className="footer-column">
            <Typography variant='h3'> Izvēlne </Typography>
            <Link id='footer-links' href='/'> <Typography varaiant='subtitle1'> Galvenā </Typography> </Link>
            <Link id='footer-links' href='/'> <Typography varaiant='subtitle1'> Visas Preces </Typography> </Link>
            <Link id='footer-links' href='/'> <Typography varaiant='subtitle1'> Sazināties ar mums </Typography> </Link>
        </div>

        <span id='footer-divider2'></span>

        <div className="footer-column">
            <Typography variant='h3'> Seko mums </Typography>
            <Link href='/'><FacebookSharpIcon fontSize='large' id='footer-socials'/></Link>
            <Link href='/'><InstagramIcon fontSize='large' id='footer-socials'/></Link>
        </div>

    </div>
  )
}

export default Footer;