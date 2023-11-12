import React, { useState } from 'react'

function Tooltip({children, tooltip}) {

    const [showTooltip, setShowTooltip] = useState(false);
    const timer = 50;

    const toggleTooltipState = ( state ) => {
        window.setTimeout(()=>{
            setShowTooltip( state )
        },timer);
    }

  return (
    <div 
        onMouseEnter={() => toggleTooltipState(true)}
        onMouseLeave={() => toggleTooltipState(false)}
        className='relative'
    >
        {children}
        {showTooltip && 
            <span 
                className='absolute -left-0.5 text-xs py-1 px-2 bg-white border border-black rounded-lg'
            >
                {tooltip}
            </span>
        }
    </div>
  )
}

export default Tooltip