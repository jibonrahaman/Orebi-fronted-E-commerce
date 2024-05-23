import Flex from '../../Flex'
import NewBtn from '../../NewBtn'
import ProductText from '../../ProductText'
import PricingText from '../../PricingText'
import { AiFillHeart } from 'react-icons/ai'
import { TbGitCompare } from 'react-icons/tb'
import { BsCartFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../Redux/CartSlices'
import { Link } from 'react-router-dom'
function Slides({title,price,src,alt,className,ProductDatas}) {
 
  // const dispatch=useDispatch()
  // const handleAddCart=()=>{
  //   dispatch(addtoCart({
  //     title:title,
  //     price:price,
  //     quantity:1,
  //     image:src,
  //   }))
  // }
  return (
    <div className={` mx-3 mb-6 border p-5 bg-gray-200 ${className}`}>
      <div className='relative overflow-hidden  group' >
        <NewBtn text="New" className=" absolute top-3 left-2" />
       <Link to={`/product/${ProductDatas._id}`}>
       <img  src={src} alt={alt} className='w-full h-[300px] ' />
       </Link>
        {/* <div className=' absolute -bottom-44 group-hover:bottom-0 duration-700 left-0 bg-[#F5F5F5] p-6 w-full '>
          <Flex className="items-center justify-end cursor-pointer  gap-x-4">
            <PricingText text="Add to Wish List" className=" hover:font-bold duration-500" />
            <AiFillHeart size={20} />
          </Flex>
          <Flex className="items-center  py-3  justify-end cursor-pointer gap-x-4">
            <PricingText text="Compare" className=" hover:font-bold duration-500" />
            <TbGitCompare size={20} />
          </Flex>
          <div  className=" flex items-center  justify-end cursor-pointer gap-x-4">
            <PricingText text="Add to Cart" className=" hover:font-bold duration-500" />
            <BsCartFill size={20} />
          </div>
        </div> */}
      </div>
      <Flex className="justify-between mt-5">
        <ProductText  text={`${title}`} />
        <PricingText text={`${price}`} />
      </Flex>
    </div>
  )
}

export default Slides