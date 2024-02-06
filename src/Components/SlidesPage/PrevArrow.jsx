import React from 'react'
import {LuArrowRightToLine} from 'react-icons/lu'

function PrevArrow(props) {
    const { className, style, onClick } = props;
  return (
    <div
    className={`flex justify-center items-center z-10 w-11 h-11 text-[#FFFFFF] rounded-full bg-[#979797] cursor-pointer absolute top-1/3 right-4 `}
   
    onClick={onClick}
  >
    <LuArrowRightToLine size="20"/> 
  </div>
  )
}

export default PrevArrow