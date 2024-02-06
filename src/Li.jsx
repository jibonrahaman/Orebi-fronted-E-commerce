import React from 'react'

function Li({className,text}) {
  return (
    <li href="#" className={`font-dm font-normal text-sm hover:font-bold hover:text-[#262626] duration-500 ${className}`}>{text}</li>
  )
}

export default Li