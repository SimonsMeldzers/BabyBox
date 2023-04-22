import React from 'react';
import { Paper, Typography } from '@mui/material';
import Link from 'next/link';

function IconsSection() {
  return (
    <Paper className='icons-section-container' elevation={0}>

      <div className='icons-divs'>
        <img src={`https://i.ibb.co/Tcv79PN/delivery-courier-2.png`} width={170}/>
        <Typography variant='h4' component='h1'> Ātra & Droša Piegāde </Typography>
        <Typography variant='subtitle1' component='h2'> Sākas no 2.99€ </Typography>
      </div>

      <div className='icons-divs'>
        <img src={`https://i.ibb.co/k2gb6pW/customer-service-agent-1.png`} width={170}/>
        <Typography variant='h4' component='h1'> Atsaucīgs personāls </Typography>
        <Link href='/contactus'><Typography variant='subtitle1' component='h2'> Sazināties ar mums </Typography></Link>
      </div>

      <div className='icons-divs'>
        <img src={`https://i.ibb.co/GQDgJnq/warehouse-1.png`} width={170}/>
        <Typography variant='h4' component='h1'> Bezmaksas piegāde Latvijā </Typography>
        <Typography variant='subtitle1' component='h2'> Sūtījumiem no 89€ </Typography>
      </div>

    </Paper>
  )
}

export default IconsSection;