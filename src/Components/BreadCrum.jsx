import React from 'react'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AiOutlineRight } from 'react-icons/ai'

export default function BreadCrum() {
    const pagename = useSelector((state => state.BreakCum.previousname));
    console.log(pagename);
  const brod = (window.location.pathname.replace("/", ""))
  
  return (
    <Flex className="mt-3  gap-x-2">
    <Link to={pagename=="Home" ? "/" : pagename=="About" ? "/about" : pagename=="signup" ?  "/sign-up" : pagename=="Contacts" && "/contacts"}>
    </Link>
  {pagename}
  <AiOutlineRight className=' mt-[6px] '/>
    <p className=' first-letter:uppercase '>{brod}</p>
  </Flex>
  )
}
