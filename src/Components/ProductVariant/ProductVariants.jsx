import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../Container';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../Redux/CartSlices';

export default function ProductVariants() {
  const dispatch = useDispatch();
    const {id}= useParams();
    const [productData, setProductData] = useState([]);
     // fetching Product Data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/v1/allget/getproduct")
        setProductData(response.data);
      } catch (error) {
        console.log("Error Fethcing Product Data", error);
      }
    }
    fetchProduct()
  }, [])

  const handleAddCart = (item)=>{   
    dispatch(addtoCart(item))
   
  }
  const findsProduct = productData.find((item)=> item._id === id)

  return (
    <section>
      <Container>
        <h2>Product Variant Details</h2>
        {
          findsProduct?.Variant.map((item,id)=>{
           return <div key={id}>
         <div className=' flex items-center gap-x-20'>
         <div><img className="w-[200px]" src={item.img} alt="" /></div>
          <div>
          <h5 className=' text-2xl font-bold'>Product Name : {findsProduct.name}</h5>
          <h5 className=' text-lg'>Color: {item.color}</h5>
          <h5 className=' text-lg'>Size: {item.size}</h5>
         {
          item.ram && item.storage && <>
           <h5>Ram: {item.ram}</h5>
          <h5>Storage: {item.storage}</h5></>
         }
         <button onClick={()=>handleAddCart(item)} className=' px-4 py-2 bg-black text-white rounded-lg mt-2'>Add Cart</button>
          </div>
         </div>
            </div>
          })
        }

      </Container>
    </section>
  )
}
