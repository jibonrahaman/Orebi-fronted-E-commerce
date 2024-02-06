import React from 'react'

function NewBtn({text,className}) {
  return (
   <button className={`font-dm font-bold text-sm py-2 px-7 bg-black text-white rounded-sm ${className} `}>{text}</button>
  )
}

export default NewBtn