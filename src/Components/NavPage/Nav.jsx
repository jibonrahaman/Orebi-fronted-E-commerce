import  { useEffect, useRef, useState } from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import Li from '../../Li'
import Logo from '../../assets/Logo.png'
import { DiYeoman } from 'react-icons/di'
import { BsCartFill } from 'react-icons/bs'
import Search from '../../Search'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { pageName } from '../Redux/BreakCum'
import {MdCancelPresentation} from 'react-icons/md';
import { FaDeleteLeft } from "react-icons/fa6";
import { increment,decrement,removeItem} from '../Redux/CartSlices'
function Nav() {
  const [scroll, setScroll] = useState(false)
  const [openCart,setopenCart]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cart =useSelector(state=>state.cart.cartItem)

  const dispatch = useDispatch()
  const handlename = (name) => {
    dispatch(pageName(name))
  }
  
  useEffect(()=>{
   const falseHover=(e)=>{
    if(!dropref.current.contains(e.target)){
      setopenCart(false)

    }

   }
   document.addEventListener("mousedown",falseHover) 
   return()=>{
    document.removeEventListener("mousedown",falseHover)
   } 
  },[])
  const dropref=useRef(null);
const handleIncrement = (item)=>{   
  dispatch(increment(item))
}

const handleDecrement = (item)=>{
 dispatch(decrement(item))
}
const handleRemove =(item)=>{
  dispatch(removeItem(item))
}
  return (
    <>
      <section>
        <nav className={`nav w-full z-30 fixed  ${scroll ? "top-0 duration-500 bg-purple-200" : " top-0"}`}>
          <Container>
            <Flex className=" justify-between py-5">
              <div>
                <img src={Logo} alt={Logo} />
              </div>

              <div className='w-[60%]  '>
                <ul>
                  <Flex className=" gap-x-8">

                    <Link onClick={() => handlename("Home")} to='/'>
                      <Li text="Home" />
                    </Link>


                    <Link onClick={() => handlename("Shop")} to='/shop'>
                      <Li text="Shop" />
                    </Link>

                    <Link onClick={() => handlename("About")} to='/about'>
                      <Li text="About" />
                    </Link>



                    <Link onClick={() => handlename("Contacts")} to="/contacts">
                      <Li text="Contacts" />
                    </Link>

                    <Li text="Journal" />

                    <Li text="Footer" />


                  </Flex>
                </ul>
              </div>
            </Flex>
          </Container>
        </nav>

      </section>
      <section className='search bg-[#F5F5F3] mt-[4%]'>
        <div className=' relative'>
          <Container >
            <Flex className="py-3 justify-between">
              <Flex className="gap-x-4 items-center cursor-pointer">
                {/* ===svg==== */}
                <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.653061 2.93878H17.6327C17.9933 2.93878 18.2857 2.64641 18.2857 2.28571V0.653061C18.2857 0.292367 17.9933 0 17.6327 0H0.653061C0.292367 0 0 0.292367 0 0.653061V2.28571C0 2.64641 0.292367 2.93878 0.653061 2.93878Z" fill="#262626" />
                  <path d="M0.5 9.46929H13.5C13.7762 9.46929 14 9.17693 14 8.81623V7.18358C14 6.82288 13.7762 6.53052 13.5 6.53052H0.5C0.223844 6.53052 0 6.82288 0 7.18358V8.81623C0 9.17693 0.223844 9.46929 0.5 9.46929Z" fill="#262626" />
                </svg>

                {/* ===svg==== */}
                <p>Shop by Category</p>
              </Flex>

              <Search placeholder="Search Products" />
              <div>
                <Flex className="items-center gap-x-12">

                  <Link to='/sign-up' onClick={() => handlename('signup')} >
                    <div>
                      <Flex className="items-center cursor-pointer gap-x-1">
                        <DiYeoman size={20} />
                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.605575 0H8.39443C8.93326 0 9.20267 0.637415 8.82125 1.01097L4.92834 4.82656C4.69222 5.05781 4.30778 5.05781 4.07166 4.82656L0.178747 1.01097C-0.202673 0.637415 0.0667427 0 0.605575 0Z" fill="#262626" />
                        </svg>
                      </Flex>
                    </div></Link>
                  <BsCartFill size={20}   onClick={()=> setopenCart(true)} />{cart.length}
                </Flex>
              </div>
            </Flex>
          </Container>

          {
            openCart && 
            <div ref={dropref} className=" overflow-hidden overflow-y-scroll w-2/5 bg-black text-white h-[650px]  absolute top-0 right-0 border-solid border-white border-3">
       <MdCancelPresentation onClick={()=>setopenCart(false)} size={40} className=' absolute top-0 right-0 text-white '/>
       <ul className=' flex justify-between  mt-14 border-2 items-center  px-2  py-2 text-lg bg-[#5b5353] '>
        <li className=' '>Remove</li>
        <li className=''>Product Name</li>
        <li className=''>Price</li>
        <li className=''>Quantity</li>
        <li className=''>Sub Total</li>
               </ul>          
          {
          cart.length > 0 ? 
          (  cart.map((item,index)=>(
            <ul key={index} className=' flex   px-2 gap-y-2  border-black border-2 bg-white text-black py-3 text-center items-center justify-between'>
                <button onClick={()=>handleRemove(item)}  className=' text-red-500 text-2xl'><FaDeleteLeft /></button>
                <li className=''>{item.title}</li>
                <li  className=''> {item.price}</li>
                <li className='w-[10%] flex flex-col border '>
                  <button onClick={()=>handleIncrement(item)} className='border-b'>+</button>
                  {item.quantity}
                  <button onClick={()=>handleDecrement(item)} className='border-t'>-</button>
                  </li>
                <li className=''>$ {item.quantity * item.price} </li>
                  </ul>
                  
          )) 
          )
           :
          (  <div>
                  <h1 className=' text-center mt-2'>Cart is Empty </h1>
                </div>
          )
          }  
          <div className=' border border-red-400 border-t-4 mt-2'></div>      
          <h2 className=' text-right  text-xl py-5 mr-10   '>Total :ddeedf </h2>
         </div>
          }
        </div>

      </section>
    </>



  )
}

export default Nav