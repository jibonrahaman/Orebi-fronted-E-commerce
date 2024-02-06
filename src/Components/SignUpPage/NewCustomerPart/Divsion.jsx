import React, { useState } from 'react'
import data from '../NewCustomerPart/Divison';
function Divsion() {
    const [country,secountry]=useState(data)
    const [all,setall]=useState('')

    const handleChange=(e)=>{
       if(e.target.value!="Select Divison"){
            setall(e.target.value)
       }
    }

  return (
    <>
   <select onChange={handleChange}>
       <option>Select Divison</option>
    {
        country.map((item=>
            <option >{item.name}</option>
        ))
    }
   </select>

   <select>
    <option>Select District</option>
    {
        country.map((item)=>(
            item.name==all &&
           item.district.map((ite,index)=>(
           <option key={index}>{ite.name}</option> 
            ))
        ))
    }
   </select>
      
    </>
  )
}

export default Divsion
