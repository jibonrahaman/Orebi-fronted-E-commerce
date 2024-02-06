import React from 'react'

function Common({className,text}) {
  return (
    <div className={`font-dm text-base font-normal ${className}`}>{text}</div>
  )
}

export default Common