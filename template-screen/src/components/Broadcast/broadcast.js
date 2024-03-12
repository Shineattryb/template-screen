import React from 'react'
import './broadcast.css';
import ConfigPage from '../serialNumber/serialNumber';
function Broadcast() {
  return (
    <div className='Broadcast-wrapper'>
  
   <div className='Broadcast-heading'>
      Broadcast Details
      </div>
      <div className='Broadcast-details'>
      <ConfigPage/>
      </div>
    
    </div>
  )
}

export default Broadcast;
