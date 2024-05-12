import React from 'react'
import { FaPlus } from 'react-icons/fa'

export default function ShopByCategory() {
  return (
    <>
        {/*Shop by Category  */}
        <h3 className='font-semibold text-xl  mt-5'>Shop by Category</h3>
            <button className="flex justify-between items-center">
            <p>Category 1</p>
            <FaPlus size={15}/>
            </button>
            <p>Category 2</p>
            <button className="flex justify-between items-center">
            <p>Category 3</p>
            <FaPlus size={15}/>
            </button>
            <p>Category 4</p>
            <p>Category 5</p>
    </>
  )
}
