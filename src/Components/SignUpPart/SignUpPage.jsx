import React from 'react'
import Container from '../../Container'
import SubHeading from '../../SubHeading'
import Flex from '../../Flex'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'

const SignUpPage = () => {
  const pagename = useSelector((state => state.BreakCum.previousname))
  const brod = (window.location.pathname.replace("/", "").replace("-", " "))
  return (
    <section>
      <Container className=' mt-4 '>
        <SubHeading text="Sign up" className="text-49" />
        <Flex className="mt-3 gap-x-1"> 
        <Link to={pagename=="Home"? "/": pagename=="Shop" ? "/shop" : pagename=="About" ? "/about" : pagename=="Contacts" && "/contacts"}></Link>
        {pagename}
        <AiOutlineRight className=' mt-[6px] '/>
          <p className=' first-letter:uppercase '>{brod}</p>
        </Flex>
      </Container>
    </section>
  )
}

export default SignUpPage
