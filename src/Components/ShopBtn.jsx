import React from 'react'

function ShopBtn({text,className}) {
  return (
   <button className={`py-3 px-12 bg-black text-white font-normal font-dm text-13 hover:bg-white border-2 hover:text-black duration-700 ${className}`}>{text}</button>
  )
}

export default ShopBtn