import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function ShopByCategory() {
  const [ToggleCategory,setToggleCategory] = useState(false);
  const [fetchCategory , setfetchCategory] = useState([]);

   useEffect(() => {
    const fetchGetCategory = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/v1/allget/getAllCategory");
        setfetchCategory(response.data.CATEGORYS);
      } catch (error) {
        console.log(error, "CategoryStatus Page-");
      }
    }
    fetchGetCategory();
  }, []);
  return (
    <>
        {/*Shop by Category  */}
        <h3 className='font-semibold text-xl  mt-5'>Shop by Category</h3>
            {
              fetchCategory.map((item,index)=>{
               return <>
               <button key={index} onClick={()=>setToggleCategory(!ToggleCategory)} className="flex justify-between items-center">
                <p className=' font-bold text-green-600'>{item.name}</p>
                {ToggleCategory ?<FaMinus size={15}/> :<FaPlus size={15}/>}
                </button>
                {item.subCategory?.map((item)=>ToggleCategory && <p className=' border-b text-sm text-re'>{item.name}</p>)}
               </>
              })
            }
          
           
    </>
  )
}
