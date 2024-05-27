import Container from "../../Container";
import Flex from "../../Flex";
import PageHeading from "../../PageHeading";
import BreadCrum from "../BreadCrum";
import { FaDeleteLeft } from "react-icons/fa6";
import Product3  from "../../assets/Product3.png"
export default function ViewCart() {
  return (
    <section>
        <Container className=" mx-auto ">
         <PageHeading  text="Cart"/>
         <BreadCrum />
         <div>

            {/* cart list  */}
         <Flex className="py-5 bg-[#f5f5f3] list-none justify-between px-10">
        <li className=" w-[400px]">Product</li>
        <li>Price</li>
        <li>Quantity</li>
        <li>Total</li>
         </Flex>
         {/* Cart item  */}
         <Flex className=" justify-between  items-center py-2">      
       <Flex className=" w-[400px] gap-x-5 items-center">
       <FaDeleteLeft /> 
       <img className=" w-20" src={Product3} alt="" />
     <p>Product Name</p>
       </Flex>
       <p>price</p>
       <Flex >
        <button>-</button>
        <button>1</button>
        <button>+</button>
       </Flex>
       <p>$44.00</p>
         </Flex>
         </div>
        </Container>
    </section>
  )
}
