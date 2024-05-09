import React from 'react'
import { useSelector } from 'react-redux'
import {AiOutlineRight} from "react-icons/ai"
import Flex from '../../Flex'
import { Link } from 'react-router-dom'
import Container from '../../Container'
import PageHeading from '../../PageHeading'
import BreadCrum from '../BreadCrum'
import { BiSolidCategory } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";

function ProductPage() {

  
  return (
    <section>
     <Container>
    <PageHeading text="Products"/>
     <BreadCrum/>
     <Flex className=" justify-between">
      <div className=' w-1/4'>Shop by Category</div>
      <div className=' w-4/5'>
        <Flex className=" justify-between text-[#f0f0f0]">
       <Flex className=" gap-x-2 items-center">
       <BiSolidCategory size={20} />
        <FaThList size={20} />
       </Flex>
       <Flex>
        <h4>Short by : </h4>
        <select className=' relative'>
        <MdOutlineArrowDropDown className=' absolute top-0 right-0' />
          <option value="">Featured</option>
          <option value="">Demo</option>
        </select>
       </Flex>
       <Flex>
        <h4>Show : </h4>
        <select className=' relative'>
        <MdOutlineArrowDropDown className=' absolute top-0 right-0' />
          <option value="">36</option>
          <option value="">34</option>
        </select>
       </Flex>
        </Flex>

      </div>
     </Flex>
     </Container>
    </section>
  )
}

export default ProductPage
