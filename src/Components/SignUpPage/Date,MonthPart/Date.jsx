import React, { useEffect, useState } from 'react'

const Date = () => {
    const [date,setDate]=useState(new Array(12))
    useEffect(()=>{
      let arr=[]
  for(let i=1; i<=date.length;i++){
      arr.push(i)
      }
      setDate(arr)
   },[])
  return (
    <>
   <select className='border border-red-500'>
   {
      date.map((item,index)=>(
     <option  key={index}>{item==1 && 'January' || item==2 && 'February'|| item==3 && 'March' || item==4 && 'April' || item==5 && 'May' || item==6 && 'June' || item==7 && 'July' || item==8 && 'Auguast' || item==9 && 'September' || item==10 && 'October' ||  item==11 && 'November' || item==12 && 'December' }</option>
      ))
      }
   </select>
    </>
  )
}

export default Date
