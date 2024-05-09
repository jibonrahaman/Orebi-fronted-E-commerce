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
import Product1 from '../../assets/Product1.png';
import Product2 from '../../assets/Product2.png';
import Product3 from '../../assets/Product3.png';
import Product4 from '../../assets/Product4.png';
import Product5 from '../../assets/Product5.png';
import Product6 from '../../assets/Product6.png';
import Product7 from '../../assets/Product7.png';
import Product8 from '../../assets/Product8.png';
import Product9 from '../../assets/Product9.png';
import Product10 from '../../assets/Product10.png';
import Product11 from '../../assets/Product11.png';
import Product12 from '../../assets/Product12.png';
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
<Slides className="w-[300px]" src={Product1} alt={Product1} price="44" title="Product 1"/>
<Slides className="w-[300px]" src={Product2} alt={Product2} price="44" title="Product 1"/>
<Slides className="w-[300px]" src={Product3} alt={Product3} price="44" title="Product 1"/>
<Slides className="w-[300px]" src={Product4} alt={Product4} price="44" title="Product 1"/>
<Slides className="w-[300px]" src={Product5} alt={Product5} price="44" title="Product 1"/>
<Slides className="w-[300px]" src={Product6} alt={Product6} price="44" title="Product 1"/>
<Slides className="w-[300px]" src={Product7} alt={Product7} price="44" title="Product 1"/>
<Slides className="w-[300px]" src={Product8} alt={Product8} price="44" title="Product 1"/>
<Slides className="w-[300px]" src={Product9} alt={Product9} price="44" title="Product 1"/>
<Slides className="w-[300px]" src={Product9} alt={Product9} price="44" title="Product 1"/>
<Slides className="w-[300px]" src={Product10} alt={Product10} price="44" title="Product 1"/>
      </div>
     </Flex>
     </Container>
    </section>
  )
}

export default ProductPage
