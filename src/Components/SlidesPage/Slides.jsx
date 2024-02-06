import React from 'react'
import Flex from '../../Flex'

import NewBtn from '../../NewBtn'
import ProductText from '../../ProductText'
import PricingText from '../../PricingText'
import { AiFillHeart } from 'react-icons/ai'
import { TbGitCompare } from 'react-icons/tb'
import { BsCartFill } from 'react-icons/bs'
function Slides({ product, pricing, src, alt }) {
  return (
    <div className=' mx-3   '>
      <div className='relative overflow-hidden  group' >
        <img src={src} alt={alt} className='w-full' />
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
          <Flex className="items-center  justify-end cursor-pointer gap-x-4">
            <PricingText text="Add to Cart" className=" hover:font-bold duration-500" />
            <BsCartFill size={20} />
          </Flex>
        </div>
      </div>
      <Flex className="justify-between mt-5">
        <ProductText text={`${product}`} />
        <PricingText text={`${pricing}`} />
      </Flex>
    </div>
  )
}

export default Slides