import React, { useEffect,useRef } from 'react'
import "./serialNumber.css"
const ConfigPage = () => {
   return (

    <div className='config-page--wrapper' >
      <div className="total-trigger-container">
        <div className="serial-number-container">
            <p className='serial-number text-xl--b' >1</p>
            <div className="connection-line"></div>
        </div>  
        
    <div>
    
      {/* broadcast-input */}
    </div>
      
      </div>

      
      <div className="all-capping-container">
        <div className="serial-number-container">
            <p className='serial-number text-xl--b' >2</p>
            <div  className="connection-line"></div>
        </div>

        <div>
     
      {/* Whom to send, whom to not send*/}
    </div>
       


      </div>
      <div className="all-capping-container">
        <div className="serial-number-container">
            <p className='serial-number text-xl--b' >3</p>
            {/* <div className="connection-line"></div> */}
        </div>
        <div>
     
      {/* Schedule Broadcast*/}
    </div>
       
       

      </div>


    <div className='schedule-broadcast'>
    <button disabled>Schedule Broadcast</button>
    </div>


    </div>

    
  )
}

export default ConfigPage