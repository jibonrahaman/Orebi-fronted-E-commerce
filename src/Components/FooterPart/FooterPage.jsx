import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import ProductText from '../../ProductText'
import PricingText from '../../PricingText'
import Logo from '../../assets/Logo.png'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineLinkedin,AiOutlineInstagram} from 'react-icons/ai'
function FooterPage() {
  return (
    <section  className='footer bg-[#F5F5F3] mt-24 py-10'>
     <Container>
      <Flex className="justify-between w-[75%]">
        <div>
        <ProductText text="MENU" />
       <div className='my-4 '>
       <PricingText text="Home" />
        <PricingText text="Shop" />
        <PricingText text="About" />
        <PricingText text="Contact" />
        <PricingText text="Journal" />
       </div>
        </div>

        <div>
        <ProductText text="SHOP" />
       <div className='my-4'>
       <PricingText text="Category 1" />
        <PricingText text="Category 2" />
        <PricingText text="Category 3" />
        <PricingText text="Category 4" />
        <PricingText text="Category 5" />
       </div>
        </div>
        
        <div>
        <ProductText text="HELP" />
       <div className='my-4'>
       <PricingText text="Privacy Policy 1" />
        <PricingText text="Terms & Conditions 2" />
        <PricingText text="Special E-shop 3" />
        <PricingText text="Shipping 4" />
        <PricingText text="Secure Payments 5" />
       </div>
        </div> 
        
         <div>
        <ProductText text="(052) 611-5711
           company@domain.com" className="w-[300px]" />
       <div className='my-4'>
       <PricingText text="575 Crescent Ave. Quakertown, PA 18951" />
       </div>
        </div>
        <div className=''>
            <img src={Logo} alt={Logo} />
        </div>
    </Flex>

    <Flex className=" justify-between">
       <Flex className="gap-x-5 mt-7">
       <BsFacebook size={20} />
        <AiOutlineLinkedin size={20} />
        <AiOutlineInstagram size={20} />
       </Flex>
        <div>
            <h2>2020 Orebi Minimal eCommerce Figma Template by Adveits</h2>
        </div>
    </Flex>
</Container>
    </section>
  )
}

export default FooterPage