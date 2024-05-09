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
import Slides from '../SlidesPage/Slides'

import Pagination from '../../Pagination'
function ProductPage() {

  
  return (
    <section>
     <Container>
    <PageHeading text="Products"/>
     <BreadCrum/>
     {/* degin left side and righ side product & Shop by Category */}
     <Flex className=" justify-between">
              {/* left side Shop by Category */}
            <div className=' w-1/4'>Shop by Category</div> 

            {/* right side product design  */}
      <div className=' w-4/5'>
        <Flex className=" justify-between text-[#7e7e7e]">
       <Flex className=" gap-x-4 items-center">
       <BiSolidCategory className=' cursor-pointer' size={20} />
        <FaThList className=' cursor-pointer' size={20} />
       </Flex>
      <Flex className=" gap-x-16">
      <Flex className=" gap-x-2">
        <h4>Short by : </h4>
        <select className='cursor-pointer relative px-3 border border-[#f0f0f0]'>
        <MdOutlineArrowDropDown className=' absolute top-0 right-0' />
          <option value="">Featured</option>
          <option value="">Demo</option>
        </select>
       </Flex>
       <Flex className=" gap-x-2"> 
        <h4>Show : </h4>
        <select className='cursor-pointer relative border border-[#f0f0f0] px-3'>
        <MdOutlineArrowDropDown className=' absolute top-0 right-0' />
          <option value="">36</option>
          <option value="">34</option>
        </select>
       </Flex>
      </Flex>
        </Flex>

<div className='  flex flex-wrap '>
<Pagination itemsPerPage={12} />
</div>


      </div>
     </Flex>
     </Container>
    </section>
  )
}

export default ProductPage
