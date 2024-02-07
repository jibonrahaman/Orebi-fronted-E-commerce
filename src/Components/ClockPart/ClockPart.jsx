import Clock from '../../assets/Clock.png'
import Container from '../../Container'
import Flex from '../../Flex'
import SubHeading from '../../SubHeading'
import PricingText from '../../PricingText'
import ShopBtn from '../ShopBtn'
function ClockPart() {
  return (
    <section className='clock py-32'>
   <Container className="bg-[#F3F3F3]">
    <Flex>
        <img src={Clock} alt={Clock} />
        <div  className=' my-auto'>
          <SubHeading  text="Phone of the year"/>
          <PricingText text="Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum.."  className=" py-8 w-5/6"/>
          <ShopBtn  text="Shop Now"/>
        </div>
    </Flex>
   </Container>
    </section>
  )
}

export default ClockPart