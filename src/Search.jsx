import React from 'react'

import {AiOutlineSearch} from "react-icons/ai"

function Search({className,placeholder}) {
  return (
    <div className={`w-[45%] relative `}>
    <input type="text" className={`w-full px-5 py-4 outline-none ${className}`} placeholder={`${placeholder}`}/>
    <AiOutlineSearch size={20} className='absolute top-1/2 right-4 -translate-y-1/2 '/>
   </div>
  )
}

export default Search