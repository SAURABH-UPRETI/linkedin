import React from 'react'
import TripOriginSharpIcon from '@mui/icons-material/TripOriginSharp';
import InfoIcon from '@mui/icons-material/Info';

const HomeRightSidebar = () => {
  return (
    <>
      <div className='d-flex flex-column text-start p-3 home-right-part-one'>
        <label htmlFor="" className='d-flex justify-content-between'>
        LinkedIn News <InfoIcon/>
        </label>
        <ul className='px-0 mx-0 mt-2'>
          <li> <TripOriginSharpIcon style={{ fontSize: '.5rem', marginRight: '.3rem' }} />More players enter semiconductor race</li>
          <span>2d ago</span>
          <li> <TripOriginSharpIcon style={{ fontSize: '.5rem', marginRight: '.3rem' }} />More players enter semiconductor race</li>
          <span>5d ago</span>
        
          <li> <TripOriginSharpIcon style={{ fontSize: '.5rem', marginRight: '.3rem' }} />More players enter semiconductor race</li>
          <span>2d ago</span>
          <li> <TripOriginSharpIcon style={{ fontSize: '.5rem', marginRight: '.3rem' }} />More players enter semiconductor race</li>
           <span>5d ago</span>
         
        </ul>
      </div>
    </>
  )
}

export default HomeRightSidebar