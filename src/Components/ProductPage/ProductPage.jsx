import React from 'react'
import { useSelector } from 'react-redux'
import {AiOutlineRight} from "react-icons/ai"
import Flex from '../../Flex'
import { Link } from 'react-router-dom'
import Container from '../../Container'
function ProductPage() {

  const pagename = useSelector((state => state.BreakCum.previousname))
  const brod = (window.location.pathname.replace("/", ""))
  return (
    <section>
     <Container>
     <h2>Product</h2>
      <Flex className="mt-3  gap-x-2">
          <Link to={pagename=="Home" ? "/" : pagename=="About" ? "/about" : pagename=="signup" ?  "/sign-up" : pagename=="Contacts" && "/contacts"}>
          </Link>
        {pagename}
        <AiOutlineRight className=' mt-[6px] '/>
          <p className=' first-letter:uppercase '>{brod}</p>
        </Flex>
     </Container>
    </section>
  )
}

export default ProductPage
