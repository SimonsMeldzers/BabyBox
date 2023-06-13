import React from 'react';

import { Typography } from '@mui/material';
import Link from 'next/link';

function GiftsSection() {
    const arrowSVG = (
      <svg
        viewBox="0 0 49 20"
        height="10"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
        id="arrow-horizontal"
      >
        <path
          transform="translate(30)"
          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
          data-name="Path 10"
          id="Path_10"
        ></path>
      </svg>
    );

    const gift25 = '50';
    const href25 = '/store/all/filter?50';

  return (
    <div className='gifts-container'>

        <div className='gifts-divs'>
            <Link href='/store/all?50'><img  src="https://i.ibb.co/F8Y2gVs/Childrensfloralgiftbox-1024x1024.webp" className='gifts-img'/></Link>
            <Link href='/store/all?50' className='gifts-img-text'><Typography variant='h6' > Dāvanas zem 50.00€ {arrowSVG}</Typography> </Link>
        </div>

        <div className='gifts-divs'>
            <Link href='/store/all?75'><img  src="https://i.ibb.co/5M6pW14/baby-gift-box-480x480.webp" className='gifts-img'/></Link>
            <Link href='/store/all?75' className='gifts-img-text'><Typography variant='h6' > Dāvanas zem 75.00€ {arrowSVG}</Typography> </Link>
        </div>

        <div className='gifts-divs'>
            <Link href='/store/all?100'><img  src="https://i.ibb.co/4VzxvNK/750678fa2bc53298e9b844d064b45866.jpg" className='gifts-img'/></Link>
            <Link href='/store/all?100' className='gifts-img-text'><Typography variant='h6' > Dāvanas zem 100.00€ {arrowSVG}</Typography> </Link>
        </div>

        <div className='gifts-divs'>
            <Link href='/store/all'><img  src="https://i.ibb.co/WBF4gb3/il-fullxfull-4182593184-iman.webp" className='gifts-img'/></Link>
            <Link href='/store/all' className='gifts-img-text'><Typography variant='h6' > Visas Dāvanas {arrowSVG}</Typography> </Link>
        </div>
        

    </div>
  )
}

export default GiftsSection;