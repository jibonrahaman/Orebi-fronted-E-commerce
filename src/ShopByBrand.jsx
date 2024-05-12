import React, { useState } from 'react'
import { MdArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md'

export default function ShopByBrand() {
    const [IconDropShow, setIconDropShow] = useState(true)
    const [itemShow, setitemShow] = useState(true)
    const handleDrop = () => {
        setitemShow(!itemShow)
    }
  return (
    <>
            <div onClick={handleDrop} className="flex items-center justify-between">
                <h3 className='font-semibold text-xl mt-5'>Shop by Brand</h3>
                {
                    itemShow ?
                    <MdOutlineArrowDropDown size={30} className='mt-4' />
              :
              <MdArrowDropUp size={30} className='mt-4' />
                }
            </div>

            {
                itemShow &&
                (<>
                      <p>Brand 1</p>
              <p>Brand 2</p>
              <p>Brand 3</p>
              <p>Brand 4</p>
              <p>Brand 5</p> 
                </>
                )
            }
        </>
  )
}
