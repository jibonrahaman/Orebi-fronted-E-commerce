import React from 'react'

function PricingText({className,text}) {
  return (
   <p className={`font-dm text-base font-normal ${className} `}>{text}</p>
  )
}

export default PricingText