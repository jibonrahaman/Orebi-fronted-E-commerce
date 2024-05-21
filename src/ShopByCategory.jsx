import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function ShopByCategory() {
  const [ToggleCategory,setToggleCategory] = useState(false)
  
  return (
    <>
        {/*Shop by Category  */}
        <h3 className='font-semibold text-xl  mt-5'>Shop by Category</h3>
            <button onClick={()=>setToggleCategory(!ToggleCategory)} className="flex justify-between items-center">
            <p>Category 1</p>
            {ToggleCategory ?<FaMinus size={15}/> :<FaPlus size={15}/>}
            </button>
            {ToggleCategory && <p className=' border-b'>demo</p>}
          
           
    </>
  )
}
