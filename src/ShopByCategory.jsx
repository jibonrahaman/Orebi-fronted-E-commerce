import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function ShopByCategory() {
  const [expandedCategory, setExpandedCategory] = useState(null);
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

  const handleToggle = (index) => {
    if (expandedCategory === index) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(index);
    }
  };

  return (
    <>
      {/* Shop by Category */}
      <h3 className='font-semibold text-xl mt-5'>Shop by Category</h3>
      {
        fetchCategory.map((item, index) => (
          <div key={index}>
            <button onClick={() => handleToggle(index)} className="flex justify-between items-center w-full py-2">
              <p className='font-bold text-green-600'>{item.name}</p>
              {expandedCategory === index ? <FaMinus size={15}/> : <FaPlus size={15}/>}
            </button>
            {item.subCategory?.map((subItem, subIndex) => (
             expandedCategory === index && <p key={subIndex} className='border-b text-sm text-red-700 ml-4'>{subItem.name}</p>
            ))}
          </div>
        ))
      }
    </>
  )
}
