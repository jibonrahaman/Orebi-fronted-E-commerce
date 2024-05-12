import React, { useState } from 'react'
import { MdArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md'
import Flex from './Flex'

export default function ShopByColor() {
    const [IconDropShow, setIconDropShow] = useState(false)
    const [itemShow, setitemShow] = useState(false)
    const handleDrop = () => {
        setitemShow(!itemShow)
    }
    return (
        <>
            <div onClick={handleDrop} className="flex items-center justify-between">
                <h3 className='font-semibold text-xl mt-5'>Shop by Color</h3>
                {
                    itemShow ?
                    <MdArrowDropUp size={30} className='mt-4' />
              :
              <MdOutlineArrowDropDown size={30} className='mt-4' />
                }
            </div>

            {
                itemShow &&
                (<>
                    {/* black color */}
                    <button className=" flex gap-x-2 items-center" >
                        <span className='w-2.5 h-2.5 bg-black rounded-full'></span>
                        <p>Color 1</p>
                    </button>
                    {/* orange color  */}
                    <button className=" flex gap-x-2 items-center" >
                        <span className='w-2.5 h-2.5 bg-[#FF8686] rounded-full'></span>
                        <p>Color 2</p>
                    </button>
                    {/* green color  */}
                    <button className=" flex gap-x-2 items-center" >
                        <span className='w-2.5 h-2.5 bg-green-500 rounded-full'></span>
                        <p>Color 2</p>
                    </button>
                    {/* gray color  */}
                    <button className=" flex gap-x-2 items-center" >
                        <span className='w-2.5 h-2.5 bg-[#B6B6B6] rounded-full'></span>
                        <p>Color 2</p>
                    </button>
                    {/* blue color  */}
                    <button className=" flex gap-x-2 items-center" >
                        <span className='w-2.5 h-2.5 bg-blue-500 rounded-full'></span>
                        <p>Color 2</p>
                    </button>
                </>
                )
            }
        </>
    )
}
