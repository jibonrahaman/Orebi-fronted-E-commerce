import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineRight } from "react-icons/ai"
import Flex from '../../Flex'
import { Link } from 'react-router-dom'
import Container from '../../Container'
import PageHeading from '../../PageHeading'
import BreadCrum from '../BreadCrum'
import { BiSolidCategory } from "react-icons/bi";
import { FaThList } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Slides from '../SlidesPage/Slides'
import { FaPlus } from "react-icons/fa6";

import Pagination from '../../Pagination'
function ProductPage() {
  const [showPagination, setshowPagination] = useState(12)
  const [showList, setShowList] = useState(false);
  const [isListHidden, setIsListHidden] = useState(false);
  const [viewMode, setviewMode] = useState("");
 
  const toggleShowList = (e) => {
    setIsListHidden(false);
    setShowList(true)
    setviewMode("list")
   
  };
  const toggleIsListHidden = () => {
    setIsListHidden(true);
    setShowList(false)
    setviewMode("grid")
  };


  return (
    <section>
      <Container>
        <PageHeading text="Products" />
        <BreadCrum />
        {/* degin left side and righ side product & Shop by Category */}
        <Flex className=" justify-between gap-x-10">
          {/* left side Shop by Category */}
          <div className='w-[20%]'>
           <Flex className="flex-col gap-y-6">
           <h3 className='font-semibold text-xl  mt-5'>Shop by Category</h3>
            <Flex className="justify-between items-center">
            <p>Category 1</p>
            <FaPlus size={15}/>
            </Flex>
            <p>Category 2</p>
            <Flex className="justify-between items-center">
            <p>Category 3</p>
            <FaPlus size={15}/>
            </Flex>
            <p>Category 4</p>
            <p>Category 5</p>
                  
           <h3 className='font-semibold text-xl mt-5'>Shop by Color</h3>
            <Flex className="justify-between items-center">
            <p>Color 1</p>
            <FaPlus size={15}/>
            </Flex>
            <p>Color 2</p>
            <Flex className="justify-between items-center">
            <p>Color 3</p>
            <FaPlus size={15}/>
            </Flex>
            <p>Color 4</p>
            <p>Color 5</p>
            </Flex>
          </div>

          {/* right side product design  */}
          <div className=' w-4/5'>
            <Flex className=" justify-between text-[#7e7e7e]">
              <Flex className=" gap-x-4 items-center">
              <FaThList  onClick={toggleShowList } className={`cursor-pointer text-4xl border p-2 ${viewMode == "list" && "bg-black text-white"}`}  />
                <BiSolidCategory onClick={toggleIsListHidden } className={`cursor-pointer border text-4xl p-2  ${viewMode == "grid" && "bg-black text-white "}`}  />
                
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
                  <select onChange={(e) => setshowPagination(e.target.value)} className='cursor-pointer relative border border-[#f0f0f0] px-3'>
                    <MdOutlineArrowDropDown className=' absolute top-0 right-0' />
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                  </select>
                </Flex>
              </Flex>
            </Flex>

           {
            showList ? 
            <div className="mt-10 ">
          <Pagination itemsPerPage={parseInt(showPagination)} />
        </div>
          :
          <div className="mt-10 flex flex-wrap">
            <Pagination itemsPerPage={parseInt(showPagination)} />
          </div>
           }

          </div>
        </Flex>
      </Container>
    </section>
  )
}

export default ProductPage
