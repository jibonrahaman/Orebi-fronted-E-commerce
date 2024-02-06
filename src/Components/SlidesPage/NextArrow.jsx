import React from 'react'
import {LuArrowLeftToLine} from 'react-icons/lu'
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
        className={`flex justify-center items-center z-10  w-11 h-11 text-[#FFFFFF] rounded-full bg-[#979797] cursor-pointer  absolute top-1/3 left-4`}
       
        onClick={onClick}
      >
        <LuArrowLeftToLine size="20"/> 
      </div>
  
    );
}

export default NextArrow