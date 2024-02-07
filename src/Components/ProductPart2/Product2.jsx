import Container from '../../Container'
import Flex from '../../Flex'
import NewBtn from '../../NewBtn'
import Product5 from '../../assets/Product5.png'
import {AiFillHeart} from 'react-icons/ai'
import {TbGitCompare} from 'react-icons/tb'
import {BsCartFill} from 'react-icons/bs'
import ProductText from '../../ProductText'
import PricingText from '../../PricingText'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../Redux/CartSlices'

function Product2({productName,productPrice}) {
  const dispatch=useDispatch()
  const handleAddCart=()=>{
    dispatch(addtoCart({
      title:productName,
      price:productPrice,
      quantity:1,
      image:Product5,
    }))
  }
  return (
  <section className=''>
  <Container>
  <div className=' mx-3   '>
      <Flex>
      <div className='relative overflow-hidden  group' >
        <img src={Product5} alt={Product5} className='w-full' />
        <NewBtn text="New" className=" absolute top-5 left-6" />
        <div className=' absolute -bottom-44 group-hover:bottom-0 duration-700 left-0 bg-[#F5F5F5] p-6 w-full '>
          <Flex className="items-center justify-end cursor-pointer  gap-x-4">
            <PricingText text="Add to Wish List" className=" hover:font-bold duration-500" />
            <AiFillHeart size={20} />
          </Flex>
          <Flex className="items-center  py-3  justify-end cursor-pointer gap-x-4">
            <PricingText text="Compare" className=" hover:font-bold duration-500" />
            <TbGitCompare size={20} />
          </Flex>
         <div onClick={handleAddCart}>
         <Flex className="items-center  justify-end cursor-pointer gap-x-4">
            <PricingText text="Add to Cart" className=" hover:font-bold duration-500" />
            <BsCartFill size={20}/>
          </Flex>
         </div>
        </div>
      </div>
          </Flex>
          <Flex className="justify-between mt-4">
        <ProductText text={`${productName}`}/>
        <PricingText text={`${productPrice}`} />
          </Flex>

    </div>
  </Container>
  </section>
  )
}

export default Product2